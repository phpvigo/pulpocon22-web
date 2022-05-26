export interface Sponsor {
  name: string
  logo: string
  link?: string;
}

export enum SponsorType {
  Diamond = 'diamond',
  Gold = 'gold',
  Bronze = 'bronze',
  Supporter = 'supporter'
}

type SponsorGroups = Record<SponsorType, Sponsor[]>

const sponsors: SponsorGroups = {
  [SponsorType.Diamond]: [
    {
      name: 'Nextail',
      logo: '/i/sponsors/nextail.svg',
      link: 'https://bit.ly/PulpoCon'
    },
    // {
    //   name: 'Twilio',
    //   logo: '/i/sponsors/twilio.svg',
    //   link: 'https://www.twilio.com/'
    // }
  ],
  [SponsorType.Gold]: [
    {
      name: 'Boardfy',
      logo: '/i/sponsors/boardfy.svg',
      link: 'https://www.boardfy.com/?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'Gradiant',
      logo: '/i/sponsors/gradiant.png',
      link: 'https://www.gradiant.org/?utm_origin=pulpocon&utm_medium=web'
    },
  ],
  [SponsorType.Bronze]: [
    {
      name: 'Hack A Boss',
      logo: '/i/sponsors/hackaboss.png',
      link: 'https://www.hackaboss.com/?utm_origin=pulpocon&utm_medium=web'
    },
  ],
  [SponsorType.Supporter]: []
}


export default sponsors
