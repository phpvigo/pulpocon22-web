export interface Workshop {
  title: string
  time: Date
  description: string
  speakers: string[]
}


const workshops: Record<string, Workshop> = {
  'buenosvinos-sorosellas-workshop': {
    title: 'Taller CQRS',
    time: new Date("2022-09-01 10:00"),
    description: '',
    speakers: ['carlos-buenosvinos', 'cristian-sorosellas']
  }
}

export default workshops
