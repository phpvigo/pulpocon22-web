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
      logo: '',
      link: 'https://nextaillabs.recruitee.com/'
    }
  ]
}


export default sponsors
