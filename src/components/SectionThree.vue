<template>
    <section id="three">
        <div class="container">
            <h3>{{ heading }}</h3>
            <p v-for="paragraph in paragraphs" :key="paragraph.id">
              {{ paragraph.text }}
            </p>
            <div class="features">
             <article v-for="project in projects" :key="project.title">
                <a :href="project.url" target="_blank" class="image">
                  <img :src="project.image" :alt="project.alt" />
                </a>
                <div class="inner">
                  <h4>{{ project.title }}</h4>
                  <p>
                    {{ project.text }}
                  </p>
                </div>
              </article>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Section Three',
  computed: {
    ...mapState({
      heading: (state) => state.header.nav[2].text,
      paragraphs: (state) => state.three.paragraphs,
      projects: (state) => state.three.projects,
    }),
  },
};
</script>
