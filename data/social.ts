export interface SocialLink {
  link: string;
  name: string;
  faIcon: string;
}

const social: SocialLink[] = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/company/pulpocon/',
    faIcon: 'fab fa-linkedin'
  },
  {
    name: 'YouTube',
    link: 'https://www.youtube.com/channel/UCVa-vcCBJ4tSKWmCFu8yfCg',
    faIcon: 'fab fa-youtube'
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/pulpocon22/',
    faIcon: 'fab fa-instagram'
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/phpulpocon',
    faIcon: 'fab fa-twitter'
  },
]

export default social
