export default {
  state: {
    paragraphs: [
      {
        id: 0,
        text: `
              Check out some of the projects that I have built.
          `,
      },
    ],
    projects: [
      {
        title: 'Multiplayer Pong',
        text: `
          Share with your friends or open in multiple browsers to experience multiplayer pong in the browser.
          Built with Node.js, Socket.IO, and Express.
        `,
        image: 'images/pong.png',
        alt: 'Multiplayer Pong Thumbnail',
        url: 'http://3.26.31.155:3000/',
        git: 'https://github.com/Shellharbour-Digital/socket-pong',
      },
      {
        title: 'Music Portfolio',
        text: `
                A Soundcloud like project where users can upload and comment on songs. 
                Built with Vue.js, Tailwind, Firebase, i18n, Jest, and Cyprus.
            `,
        image: 'images/music.png',
        alt: 'Music Portfolio Thumbnail',
        url: 'https://music-portfolio-three.vercel.app/',
        git: 'https://github.com/Shellharbour-Digital/music-portfolio',
      },
      {
        title: 'Ecom Clothing',
        text: `
            An E-commerce site that features collections, payment intergration, and login/register functionality.
            Built with React, styled-components, SASS, Redux, Redux-Saga, Firebase, and Stripe.
          `,
        image: 'images/ecom.png',
        alt: 'Ecom Clothing Thumbnail',
        url: 'https://ecom-cloth-live.herokuapp.com/',
        git: 'https://github.com/Shellharbour-Digital/ecom-clothing',
      },
      {
        title: 'Rocket Launches REST API',
        text: `
            A React frontend that interacts with a REST API to schedule or abort a NASA or SpaceX rocket launch to a Kepler Exoplanet.
            Built with Node.js, Express, MongoDB, PM2, and Jest.
          `,
        image: 'images/rocket.png',
        alt: 'Rocket Launches Thumbnail',
        url: 'http://13.211.227.169:8000/',
        git: 'https://github.com/Shellharbour-Digital/rocket-launches-rest-api-project',
      },
      {
        title: 'Moon Department',
        text: `
            Keep track of trending and rising cryptocurrencies!
            Built with the RedwoodJS Framework (React, GraphQL, and Prisma).
          `,
        image: 'images/moon.png',
        alt: 'Moon Department Thumbnail',
        url: 'https://moondepartment.com/',
        git: 'https://github.com/Shellharbour-Digital/moon-department',
      },
    ],
  },
};
