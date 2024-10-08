import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Home', href: getPermalink('/home') },
    { text: 'Blog', href: getPermalink('blog') },
    { text: 'About', href: getPermalink('/about') },
  ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/nolanbraman/' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/eathren' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    CopyRight © 2018 -  ${new Date().getFullYear()} Nolan Braman. All Rights Reserved.
  `,
};
