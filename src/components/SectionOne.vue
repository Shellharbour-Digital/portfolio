<template>
    <section id="one">
        <div class="container">
        <header class="major">
            <h2>{{ heading }}</h2>
            <p><span v-for="headline in headlines" :key="headline.text">
                {{ headline.text }}<br />
            </span></p>
        </header>
        <p v-for="paragraph in paragraphs" :key="paragraph.id">
            {{ paragraph.text }}
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
      paragraphs: (state) => state.one.paragraphs,
    }),
  },
};
</script>
