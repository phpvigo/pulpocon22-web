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
      logo: '/i/sps/nextail.svg',
      link: 'https://bit.ly/PulpoCon'
    }
    // {
    //   name: 'Twilio',
    //   logo: '/i/sps/twilio.svg',
    //   link: 'https://www.twilio.com/'
    // }
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
    }

  ],
  [SponsorType.Supporter]: []
}

export default sponsors
