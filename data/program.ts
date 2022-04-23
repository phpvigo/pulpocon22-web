export enum Type {
  Workshop = 'workshop',
  Talk = 'talk',
}

export interface ScheduleBase {
  title: string
}

export interface ScheduleTalk extends ScheduleBase {
  type: Type.Talk
  time: [string, string]
  speakers: string[]
}

export interface ScheduleWorkshop extends ScheduleBase {
  type: Type.Workshop
  time: [string, string]
  speakers: string[]
}

export interface ScheduleGeneric extends ScheduleBase {
  time: [string] | [string, string]
}


export type Schedule = ScheduleTalk | ScheduleWorkshop | ScheduleGeneric

export interface Track {
  name: string
  schedule: Schedule[]
}

export interface ProgramDay {
  title: string
  description?: string
  tracks: Track[]
}

export type Program = Record<string, ProgramDay>

const program: Program = {
  'jueves-1': {
    title: 'Jueves 1',
    tracks: [
      {
        name: 'Track Talleres',
        schedule: [
          { time: ['09:30', '10:00'], title: 'Badge pickup & Desayuno' },
          {
            time: ['10:00', '12:00'],
            type: Type.Workshop,
            title: 'Taller',
            speakers: ['carlos-buenosvinos', 'cristian']
          },
          { time: ['12:00', '12:30'], title: 'Descanso' },
          {
            time: ['12:30', '14:00'],
            type: Type.Workshop,
            title: 'Taller',
            speakers: ['carlos-buenosvinos', 'cristian']
          },
          { time: ['14:00', '15:00'], title: 'Comida' },
          {
            time: ['15:00', '17:00'],
            type: Type.Workshop,
            title: 'Taller',
            speakers: ['carlos-buenosvinos', 'cristian']
          },
        ]
      }
    ]
  },
  'viernes-2': {
    title: 'Viernes 2',
    tracks: [
      {
        name: 'Track Talleres A',
        schedule: [
          { time: ['09:30', '10:00'], title: 'Badge pickup & Desayuno' },
          { time: ['10:00', '12:00'], type: Type.Workshop, title: 'Taller', speakers: ['fran-iglesias'] },
          { time: ['12:00', '12:30'], title: 'Descanso' },
          { time: ['12:30', '14:00'], type: Type.Workshop, title: 'Taller', speakers: ['isa-garrido', 'eva'] },
          { time: ['14:00', '15:00'], title: 'Comida' },
          { time: ['15:00', '17:00'], type: Type.Workshop, title: 'Taller', speakers: ['gradiant'] },
        ]
      },
      {
        name: 'Track Talleres B',
        schedule: [
          { time: ['09:30', '10:00'], title: 'Badge pickup & Desayuno' },
          { time: ['10:00', '12:00'], type: Type.Workshop, title: 'Taller', speakers: ['rosa-ferrando'] },
          { time: ['12:00', '12:30'], title: 'Descanso' },
          { time: ['12:30', '14:00'], type: Type.Workshop, title: 'Taller', speakers: ['gradiant'] },
          { time: ['14:00', '15:00'], title: 'Comida' },
          { time: ['15:00', '17:00'], type: Type.Workshop, title: 'Taller', speakers: ['gemma-jorba'] },
        ]
      }
    ]

  },
  'sabado-3': {
    title: 'Sábado 3',
    tracks: [
      {
        name: 'Conferencia',
        schedule: [
          { time: ['09:00', '10:00'], title: 'Badge pickup & Desayuno' },
          { time: ['10:00', '10:10'], title: 'Apertura' },
          { time: ['10:10', '10:50'], type: Type.Talk, title: 'Talk', speakers: ['ana-fernandez'] },
          { time: ['11:00', '10:40'], type: Type.Talk, title: 'Talk', speakers: ['eloy-coto'] },
          { time: ['11:50', '12:30'], title: 'Descanso' },
          { time: ['12:30', '13:10'], type: Type.Talk, title: 'Talk', speakers: ['paula-julve'] },
          { time: ['13:10', '14:00'], type: Type.Talk, title: 'Talk', speakers: ['nuria-soriano'] },
          { time: ['14:10', '16:00'], title: 'Comida' },
          { time: ['16:00', '16:40'], type: Type.Talk, title: 'Talk', speakers: ['concha-asensio'] },
          { time: ['16:50', '17:30'], type: Type.Talk, title: 'Talk', speakers: ['ricard-clau'] },
          { time: ['17:40', '18:30'], type: Type.Talk, title: 'Talk', speakers: ['javier-ferrer', 'rafa-gomez'] },
          { time: ['18:40'], title: 'Clausura' }
        ]
      }
    ]
  }
}

console.log(program)
export default program
