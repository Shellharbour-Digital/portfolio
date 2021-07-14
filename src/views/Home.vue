<template>
  <div id="wrapper">

  <!-- Main -->
    <div id="main">

      <!-- One -->
        <section id="one">
          <div class="image main" data-position="center">
            <img src="images/banner.jpg" alt="" />
          </div>
          <div class="container">
            <header class="major">
              <h2>About Me</h2>
              <p>Eget et adipiscing ornare vestibulum quam<br />
              interdum blandit ut Adipiscing.</p>
            </header>
            <p>
              Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col.
              Commodo id in arcu ante lorem ipsum sed accumsan erat praesent faucibus
              commodo ac mi lacus. Adipiscing mi ac commodo. Vis aliquet tortor ultricies
              non ante erat nunc integer eu ante ornare amet commetus vestibulum blandit integer
              in curae ac faucibus integer non. Adipiscing cubilia elementum.
            </p>
          </div>
        </section>

      <!-- Two -->
        <section id="two">
          <div class="container">
            <h3>Things I Can Do</h3>
            <p>
              Integer eu ante ornare amet commetus vestibulum blandit integer
              in curae ac faucibus integer non. Adipiscing cubilia elementum integer
              lorem ipsum dolor sit amet.
            </p>
            <ul class="feature-icons">
              <li class="icon solid fa-code">Neque sit cep ante</li>
              <li class="icon solid fa-cubes">Augue fusce morbi</li>
              <li class="icon solid fa-book">Cras augue cep vitae</li>
              <li class="icon solid fa-coffee">Augue enim dictum</li>
              <li class="icon solid fa-bolt">Porttitor ante</li>
              <li class="icon solid fa-users">Tempus risus consequat</li>
            </ul>
          </div>
        </section>

      <!-- Three -->
        <section id="three">
          <div class="container">
            <h3>A Few Accomplishments</h3>
            <p>
              Integer eu ante ornare amet commetus vestibulum blandit integer
              in curae ac faucibus integer non. Adipiscing cubilia elementum integer
              lorem ipsum dolor sit amet.
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

      <!-- Four -->
        <section id="four">
          <div class="container">
            <h3>Contact Me</h3>
            <p>
              Integer eu ante ornare amet commetus vestibulum blandit integer
              in curae ac faucibus integer non. Adipiscing cubilia elementum integer
              lorem ipsum dolor sit amet.
            </p>
            <form method="post" action="#">
              <div class="row gtr-uniform">
                <div class="col-6 col-12-xsmall">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div class="col-6 col-12-xsmall">
                  <input type="email" name="email" id="email" placeholder="Email" />
                </div>
                <div class="col-12">
                  <input type="text" name="subject" id="subject" placeholder="Subject" />
                </div>
                <div class="col-12">
                  <textarea name="message" id="message" placeholder="Message" rows="6"></textarea>
                </div>
                <div class="col-12">
                  <ul class="actions">
                    <li><input type="submit" class="primary" value="Send Message" /></li>
                    <li><input type="reset" value="Reset Form" /></li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </section>
    </div>

  <!-- Footer -->
  <app-footer />

  </div>
</template>

<script>
import AppFooter from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    AppFooter,
  },
  mounted() {
    // eslint-disable-next-line func-names
    (function ($) {
      const $window = $(window);
      const $body = $('body');
      const $header = $('#header');
      let $titleBar = null;
      const $nav = $('#nav');

      // Breakpoints.
      // eslint-disable-next-line no-undef
      breakpoints({
        xlarge: ['1281px', '1680px'],
        large: ['1025px', '1280px'],
        medium: ['737px', '1024px'],
        small: ['481px', '736px'],
        xsmall: [null, '480px'],
      });

      // Play initial animations on page load.
      $window.on('load', () => {
        window.setTimeout(() => {
          $body.removeClass('is-preload');
        }, 100);
      });

      // Tweaks/fixes.

      // Polyfill: Object fit.
      // eslint-disable-next-line no-undef
      if (!browser.canUse('object-fit')) {
        // eslint-disable-next-line func-names
        $('.image[data-position]').each(function () {
          const $this = $(this);
          const $img = $this.children('img');

          // Apply img as background.
          $this
            .css('background-image', `url("${$img.attr('src')}")`)
            .css('background-position', $this.data('position'))
            .css('background-size', 'cover')
            .css('background-repeat', 'no-repeat');

          // Hide img.
          $img
            .css('opacity', '0');
        });
      }

      // Header Panel.

      // Nav.
      // eslint-disable-next-line camelcase
      const $nav_a = $nav.find('a');

      $nav_a
        .addClass('scrolly')
        // eslint-disable-next-line func-names
        .on('click', function () {
          const $this = $(this);

          // External link? Bail.
          if ($this.attr('href').charAt(0) !== '#') { return; }

          // Deactivate all links.
          $nav_a.removeClass('active');

          // Activate link *and* lock it (so Scrollex doesn't try to activate other
          // links as we're scrolling to this one's section).
          $this
            .addClass('active')
            .addClass('active-locked');
        })
        // eslint-disable-next-line func-names
        .each(function () {
          const $this = $(this);
          const id = $this.attr('href');
          const $section = $(id);

          // No section for this link? Bail.
          if ($section.length < 1) { return; }

          // Scrollex.
          $section.scrollex({
            mode: 'middle',
            top: '5vh',
            bottom: '5vh',
            initialize() {
              // Deactivate section.
              $section.addClass('inactive');
            },
            enter() {
              // Activate section.
              $section.removeClass('inactive');

              // No locked links? Deactivate all links and activate this section's one.
              if ($nav_a.filter('.active-locked').length === 0) {
                $nav_a.removeClass('active');
                $this.addClass('active');
              // eslint-disable-next-line brace-style
              }

              // Otherwise, if this section's link is the one that's locked, unlock it.
              else if ($this.hasClass('active-locked')) { $this.removeClass('active-locked'); }
            },
          });
        });

      // Title Bar.
      $titleBar = $(
        `${'<div id="titleBar">'
        + '<a href="#header" class="toggle"></a>'
        + '<span class="title">'}${$('#logo').html()}</span>`
        + '</div>',
      )
        .appendTo($body);

      // Panel.
      $header
        .panel({
          delay: 500,
          hideOnClick: true,
          hideOnSwipe: true,
          resetScroll: true,
          resetForms: true,
          side: 'right',
          target: $body,
          visibleClass: 'header-visible',
        });

      // Scrolly.
      $('.scrolly').scrolly({
        speed: 700,
        offset() {
          // eslint-disable-next-line no-undef
          if (breakpoints.active('<=medium')) { return $titleBar.height(); }

          return 0;
        },
      });
    // eslint-disable-next-line no-undef
    }(jQuery));
  },
};
</script>
