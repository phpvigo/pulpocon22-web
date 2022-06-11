export enum Type {
  Workshop = 'workshop',
  Talk = 'talk',
  Break = 'break'
}

export interface ScheduleBase {

}

export interface ScheduleTalk extends ScheduleBase {
  type: Type.Talk
  title: string
  time: [string, string]
  speaker: string
  link: string
}

export interface ScheduleWorkshop extends ScheduleBase {
  type: Type.Workshop
  time: [string, string]
  title: string
  speaker: string
  link: string
}

export interface ScheduleGeneric extends ScheduleBase {
  title: string
  time: [string] | [string, string]
}


export type Schedule = ScheduleTalk | ScheduleWorkshop | ScheduleGeneric

export interface Track {
  name: string
  layout?: string
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
        name: 'Taller CQRS',
        schedule: [
          { time: ['08:30', '09:00'], title: 'Badge pickup & Desayuno' },
          {
            time: ['09:30', '12:00'],
            type: Type.Workshop,
            title: 'Taller CQRS',
            speaker: 'Carlos Buenosvinos & Christian Soronellas'
          },
          { time: ['12:00', '12:30'], title: 'Descanso' },

        ]
      },
      {
        name: '',
        schedule: [
          {
            time: ['12:30', '14:00'],
            type: Type.Workshop,
            title: 'Taller CQRS',
            speaker: 'Carlos Buenosvinos & Christian Soronellas'
          },
          { time: ['14:00', '15:00'], title: 'Comida' },
          {
            time: ['15:00', '18:00'],
            type: Type.Workshop,
            title: 'Taller CQRS',
            speaker: 'Carlos Buenosvinos & Christian Soronellas'
          },
        ]
      }
    ]
  },
  'viernes-2': {
    title: 'Viernes 2',
    tracks: [
      {
        name: 'Track Crafters',
        schedule: [
          { time: ['09:30', '10:00'], title: 'Badge pickup & Desayuno' },
          { time: ['10:00', '12:00'], type: Type.Workshop, title: 'Taller', speaker: 'Fran Iglesias' },
          { time: ['12:00', '12:30'], title: 'Descanso' },
          {
            time: ['12:30', '14:00'],
            type: Type.Workshop,
            title: 'TCR: Test && Commit || Revert',
            speaker: 'Isabel Garrido & Verónica Flores',
            // link: '/workshop-tcr-test-commit-revert'
          },
          { time: ['14:00', '15:00'], title: 'Comida' },
          { time: ['15:00', '17:00'], type: Type.Workshop, title: 'Taller', speaker: 'Gemma Jorba' },
        ]
      },
      {
        name: 'Track Devops',
        schedule: [
          { time: ['09:30', '10:00'], title: 'Badge pickup & Desayuno' },
          {
            time: ['10:00', '12:00'],
            type: Type.Workshop,
            title: 'Building Data Pipelines at Scale',
            speaker: 'Rosa Ferrando & David Macia'
          },
          { time: ['12:00', '12:30'], title: 'Descanso' },
          {
            time: ['12:30', '14:00'],
            type: Type.Workshop,
            title: 'Monitorizando nuestras aplicaciones',
            speaker: 'Lucía Díaz Rodríguez'
          },
          { time: ['14:00', '15:00'], title: 'Comida' },
          {
            time: ['15:00', '17:00'],
            type: Type.Workshop,
            title: 'Estrategias de despliegue',
            speaker: 'Paz González De la Fuente'
          },
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
          { time: ['10:10', '10:50'], type: Type.Talk, title: 'TBC', speaker: 'Ana Fernandez Del Rio' },
          { time: ['11:00', '10:40'], type: Type.Talk, title: 'TBC', speaker: 'TBC' },
          { time: ['11:50', '12:30'], title: 'Descanso' },
          { time: ['12:30', '13:10'], type: Type.Talk, title: 'TBC', speaker: 'Paula Julve' },

        ]
      },
      {
        name: '',
        schedule: [
          { time: ['13:10', '14:00'], type: Type.Talk, title: 'TBC', speaker: 'Nuria Soriano' },
          { time: ['14:10', '16:00'], title: 'Comida' },
          { time: ['16:00', '16:40'], type: Type.Talk, title: 'TBC', speaker: 'Concha Asensio' },
          { time: ['16:50', '17:30'], type: Type.Talk, title: 'TBC', speaker: 'Ricard Clau' },
          { time: ['17:40', '18:30'], type: Type.Talk, title: 'The Hidden Event', speaker: 'Ghost Speaker' },
          { time: ['18:40'], title: 'Clausura' }
        ]
      }
    ]
  }
}

export default program
