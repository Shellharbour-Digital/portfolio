<template>
    <section id="header">
        <header>
            <span class="image avatar">
                <img :src="person.image" :alt="'image of ' + person.name" />
            </span>
            <h1 id="logo"><a href="#">{{ person.name }}</a></h1>
            <p><span v-for="headline in headlines" :key="headline.text">
                {{ headline.text }}<br />
            </span></p>
        </header>
        <nav id="nav">
            <ul>
                <li v-for="(nav, index) in nav" :key="nav.text">
                    <a :href="nav.href" :class="{ 'active' : index === 0 }">
                        {{nav.text}}
                    </a>
                </li>
            </ul>
        </nav>
        <footer>
            <ul class="icons">
                <li v-for="social in socials" :key="social.text">
                    <a :target="social.target" :href="social.href" :class="social.icon">
                        <span class="label">{{ social.text }}</span>
                    </a>
                </li>
            </ul>
        </footer>
    </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapState({
      person: (state) => state.header.person,
      headlines: (state) => state.header.headlines,
      nav: (state) => state.header.nav,
      socials: (state) => state.header.socials,
    }),
  },
};
</script>
