<template>
    <section id="two">
        <div class="container">
        <h3>{{ heading }}</h3>
        <p v-for="paragraph in paragraphs" :key="paragraph.id">
          {{ paragraph.text }}
        </p>
        <ul class="feature-icons">
          <li v-for="skill in skills" :key="skill.text"
            :class="skill.icon"
          >
            {{ skill.text }}
          </li>
        </ul>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Section Two',
  computed: {
    ...mapState({
      heading: (state) => state.header.nav[1].text,
      paragraphs: (state) => state.two.paragraphs,
      skills: (state) => state.two.skills,
    }),
  },
};
</script>
