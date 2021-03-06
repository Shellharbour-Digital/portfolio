export default {
  state: {
    person:
      {
        name: 'Stefan Markovic',
        image: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light',
      },
    headlines: [
      { text: 'Web Developer' },
      { text: 'DevOps Engineer' },
    ],
    nav: [
      {
        text: 'About Me',
        href: '#one',
      },
      {
        text: 'Things I Can Do',
        href: '#two',
      },
      {
        text: 'A Few Accomplishments',
        href: '#three',
      },
      {
        text: 'Contact Me',
        href: '#four',
      },
    ],
    socials: [
      {
        text: 'LinkedIn',
        target: '_blank',
        href: 'https://www.linkedin.com/in/stefan-markovic-801772212/',
        icon: 'icon brands fa-linkedin',
      },
      {
        text: 'Github',
        target: '_blank',
        href: 'https://github.com/Shellharbour-Digital',
        icon: 'icon brands fa-github',
      },
      {
        text: 'Email',
        target: '_self',
        href: 'mailto:hello@stefanmarkovic.com',
        icon: 'icon solid fa-envelope',
      },
    ],
  },
};
