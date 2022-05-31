import { VueElement } from '@vue/runtime-dom'
import { Type } from '~/data/program'

export interface Event {
  id: string
  title: string
  date: Date
  speakers: string[]
  type: Type.Talk | Type.Workshop
  description: VueElement
}

const eventsDef = import.meta.glob('./*.md')
const events = {}
for (const path in eventsDef) {
  eventsDef[path]().then((d) => {
    events[d.attributes.id] = {
      id: d.attributes.id,
      title: d.attributes.title,
      date: new Date(d.attributes.date),
      speakers: d.attributes.speakers,
      type: d.attributes.type,
      description: d.VueComponent
    }
  })
}

export default events
