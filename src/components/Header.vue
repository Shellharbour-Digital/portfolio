<template>
    <section id="header">
        <header>
            <span class="image avatar"><img src="images/avatar.jpg" alt="" /></span>
            <h1 id="logo"><a href="#">{{ name }}</a></h1>
            <p><span v-for="headline in headlines" :key="headline.text">
                {{ headline.text }}<br />
            </span></p>
        </header>
        <nav id="nav">
            <ul>
                <li><a href="#one" class="active">About Me</a></li>
                <li><a href="#two">Things I Can Do</a></li>
                <li><a href="#three">A Few Accomplishments</a></li>
                <li><a href="#four">Contact</a></li>
            </ul>
        </nav>
        <footer>
            <ul class="icons">
                <li v-for="social in socials" :key="social.name">
                    <a :target="social.target" :href="social.url" :class="social.icon">
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
      name: (state) => state.name,
      headlines: (state) => state.headlines,
      socials: (state) => state.socials,
    }),
  },
};
</script>
