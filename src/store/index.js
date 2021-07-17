import { createStore } from 'vuex';

export default createStore({
  state: {
    name: 'Stefan Markovic',
    headlines: [
      { text: 'Web Developer' },
      { text: 'DevOps Engineer' },
    ],
    socials: [
      {
        text: 'LinkedIn',
        target: '_blank',
        url: 'https://www.linkedin.com/in/stefan-markovic-801772212/',
        icon: 'icon brands fa-linkedin',
      },
      {
        text: 'Github',
        target: '_blank',
        url: 'https://github.com/Shellharbour-Digital',
        icon: 'icon brands fa-github',
      },
      {
        text: 'Email',
        target: '_self',
        url: 'mailto:hello@stefanmarkovic.com',
        icon: 'icon solid fa-envelope',
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
