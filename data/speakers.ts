export interface Speaker {
  name: string
  position: string
  bio: string
  picture: string
}

export type Speakers = Record<string, Speaker>


const speakers: Speakers = {
  'eloy-coto': {
    name: 'Eloy Coto',
    picture: '',
    bio: 'loremipsum',
    position: 'Hace cosas'
  }
}

export default speakers
