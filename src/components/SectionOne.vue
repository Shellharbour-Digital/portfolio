<template>
    <section id="one">
        <div class="image main" data-position="center">
        <img src="images/banner.jpg" alt="" />
        </div>
        <div class="container">
        <header class="major">
            <h2>{{ heading }}</h2>
            <p><span v-for="headline in headlines" :key="headline.text">
                {{ headline.text }}<br />
            </span></p>
        </header>
        <p>
            {{ about }}
        </p>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Section One',
  computed: {
    ...mapState({
      heading: (state) => state.header.nav[0].text,
      headlines: (state) => state.one.headlines,
      about: (state) => state.one.about,
    }),
  },
};
</script>
