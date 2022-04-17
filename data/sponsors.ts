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
      link: 'https://nextaillabs.recruitee.com/'
    },
    {
      name: 'Nextail',
      logo: '/i/sponsors/nextail.svg',
      link: 'https://nextaillabs.recruitee.com/'
    },
    {
      name: 'Nextail',
      logo: '/i/sponsors/nextail.svg',
      link: 'https://nextaillabs.recruitee.com/'
    }
  ],
  [SponsorType.Gold]: [],
  [SponsorType.Bronze]: [],
  [SponsorType.Supporter]: []
}


export default sponsors