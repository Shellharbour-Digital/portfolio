<template>
    <section id="three">
        <div class="container">
            <h3>{{ heading }}</h3>
            <p v-for="paragraph in paragraphs" :key="paragraph.id">
              {{ paragraph.text }}
            </p>
            <div class="features">
              <article>
                <a href="#" class="image"><img src="images/pic01.jpg" alt="" /></a>
                <div class="inner">
                  <h4>Pharetra fusce facilisis</h4>
                  <p>
                    Integer eu ante ornare amet commetus vestibulum blandit integer
                    in curae ac faucibus integer adipiscing ornare amet.
                  </p>
                </div>
              </article>
              <article>
                <a href="#" class="image"><img src="images/pic02.jpg" alt="" /></a>
                <div class="inner">
                  <h4>Condimentum mus ipsum orci</h4>
                                   <p>
                    Integer eu ante ornare amet commetus vestibulum blandit integer
                    in curae ac faucibus integer adipiscing ornare amet.
                  </p>
                </div>
              </article>
              <article>
                <a href="#" class="image"><img src="images/pic03.jpg" alt="" /></a>
                <div class="inner">
                  <h4>Cubilia enim congue at cep amet</h4>
                                   <p>
                    Integer eu ante ornare amet commetus vestibulum blandit integer
                    in curae ac faucibus integer adipiscing ornare amet.
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
    }),
  },
};
</script>
