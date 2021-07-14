/* eslint-disable no-undef */
/* eslint-disable no-undef */
<template>
  <app-header />

  <router-view v-slot="{ Component }">
      <component :is="Component"></component>
  </router-view>

</template>

<script>
import AppHeader from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
};
</script>
