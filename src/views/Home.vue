<template>
  <div id="wrapper">

  <!-- Main -->
    <div id="main">

      <!-- One -->
        <app-section-one />

      <!-- Two -->
        <app-section-two />

      <!-- Three -->
        <app-section-three />

      <!-- Four -->
        <app-section-four />
    </div>

  <!-- Footer -->
  <app-footer />

  </div>
</template>

<script>
import AppFooter from '@/components/Footer.vue';
import AppSectionOne from '@/components/SectionOne.vue';
import AppSectionTwo from '@/components/SectionTwo.vue';
import AppSectionThree from '@/components/SectionThree.vue';
import AppSectionFour from '@/components/SectionFour.vue';

export default {
  name: 'Home',
  components: {
    AppSectionOne,
    AppSectionTwo,
    AppSectionThree,
    AppSectionFour,
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
