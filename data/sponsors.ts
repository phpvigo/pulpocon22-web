export interface Sponsor {
  name: string
  logo: string
  link?: string;
}

export enum SponsorType {
  Octopus = 'octopus',
  Diamond = 'diamond',
  Gold = 'gold',
  Bronze = 'bronze',
  Supporter = 'supporter',
  Multimedia = 'multimedia'
}

type SponsorGroups = Record<SponsorType, Sponsor[]>

const sponsors: SponsorGroups = {
  [SponsorType.Octopus]: [
    {
      name: 'Wallbox',
      logo: '/i/sps/wallbox.svg',
      link: 'https://wallbox.com/es_es/?utm_origin=pulpocon&utm_medium=web'
    }
  ],
  [SponsorType.Diamond]: [
    {
      name: 'Nextail',
      logo: '/i/sps/nextail.svg',
      link: 'https://bit.ly/PulpoCon'
    },
    {
      name: 'New Relic',
      logo: '/i/sps/newrelic.svg',
      link: 'https://newrelic.com/about/culture?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'Twilio',
      logo: '/i/sps/twilio.svg',
      link: 'https://www.twilio.com/'
    },
    {
      name: 'Cabify',
      logo: '/i/sps/cabify.svg',
      link: 'https://cabify.com/es/?utm_origin=pulpocon&utm_medium=web'
    }
  ],
  [SponsorType.Gold]: [
    {
      name: 'Boardfy',
      logo: '/i/sps/boardfy.svg',
      link: 'https://www.boardfy.com/?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'Gradiant',
      logo: '/i/sps/gradiant.png',
      link: 'https://www.gradiant.org/?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'benshi.ai',
      logo: '/i/sps/benshi_ai.svg',
      link: 'https://www.benshi.ai/?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'SiteGround',
      logo: '/i/sps/siteground.svg',
      link: 'https://www.siteground.es/?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'Arengu',
      logo: '/i/sps/arengu.svg',
      link: 'https://arengu.com/?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'idealista',
      logo: '/i/sps/idealista.svg',
      link: 'https://www.idealista.com/empleo/ofertas/?utm_origin=pulpocon&utm_medium=web'
    }
  ],
  [SponsorType.Bronze]: [
    {
      name: 'Hack A Boss',
      logo: '/i/sps/hackaboss.png',
      link: 'https://www.hackaboss.com/?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'Ultreia',
      logo: '/i/sps/ultreia.png',
      link: 'https://www.ultreia.es/?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'Marine Instruments',
      logo: '/i/sps/marine.png',
      link: 'https://www.marineinstruments.es/?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'quobis',
      logo: '/i/sps/quobis.svg',
      link: 'https://quobis.com/es/?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'Codely',
      logo: '/i/sps/codely.svg',
      link: 'https://codely.com/?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'Seat Code',
      logo: '/i/sps/seat-code.svg',
      link: 'https://code.seat/?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'Codium',
      logo: '/i/sps/codium.png',
      link: 'https://www.codium.team/?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'Auth0',
      logo: '/i/sps/auth0.svg',
      link: 'https://a0.to/PulpoCon22'
    }
  ],
  [SponsorType.Supporter]: [
    {
      name: 'Jet Brains',
      logo: '/i/sps/jetbrains.svg',
      link: 'https://www.jetbrains.com/?utm_origin=pulpocon&utm_medium=web'
    }
  ],
  [SponsorType.Multimedia]: [
    {
      name: 'Teltek',
      logo: '/i/sps/teltek.png',
      link: 'https://teltek.es//?utm_origin=pulpocon&utm_medium=web'
    }
  ]
}

export default sponsors
