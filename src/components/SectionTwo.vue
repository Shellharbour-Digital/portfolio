<template>
    <section id="two">
        <div class="container">
        <h3>{{ heading }}</h3>
        <p>
            <span v-for="paragraph in paragraphs" :key="paragraph.id">
                {{ paragraph.text }}<br />
            </span>
        </p>
        <ul class="feature-icons">
            <li class="icon brands fa-js" style="font-family: Font Awesome 5 Brands">
                JavaScript
            </li>
            <li class="icon solid fa-cubes">Augue fusce morbi</li>
            <li class="icon solid fa-book">Cras augue cep vitae</li>
            <li class="icon solid fa-coffee">Augue enim dictum</li>
            <li class="icon solid fa-bolt">Porttitor ante</li>
            <li class="icon solid fa-users">Tempus risus consequat</li>
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
    }),
  },
};
</script>
