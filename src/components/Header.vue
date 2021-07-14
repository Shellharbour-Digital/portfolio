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
                <li><a href="#two" class=''>Things I Can Do</a></li>
                <li><a href="#three">A Few Accomplishments</a></li>
                <li><a href="#four">Contact</a></li>
            </ul>
        </nav>
        <footer>
            <ul class="icons">
                <li><a target="_blank" href="https://www.linkedin.com/in/stefan-markovic-801772212/" class="icon brands fa-linkedin">
                    <span class="label">LinkedIn</span>
                </a></li>
                <li><a target="_blank" href="https://github.com/Shellharbour-Digital" class="icon brands fa-github">
                    <span class="label">Github</span>
                </a></li>
                <li><a href="mailto:hello@stefanmarkovic.com" class="icon solid fa-envelope">
                    <span class="label">Email</span>
                </a></li>
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
      headlines: (state) => state.headline,
    }),
  },
};
</script>
