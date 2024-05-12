<template>
  <base-container title="Vuex" v-if="isLoggedIn">
    <the-counter></the-counter>
    <button @click="increment(10)">Add 10</button>
    <button @click="incrementAsync(10)">Add 10 (async)</button>
  </base-container>
  <base-container title="Auth">
    <auth></auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from '@/components/TheCounter.vue';
import { mapMutations, mapActions, mapState } from 'vuex';
import Auth from '@/components/Auth.vue';

export default {
  components: {
    Auth,
    TheCounter,
    BaseContainer,
  },
  methods: {
    ...mapMutations('numbers', ['increment']),
    ...mapActions('numbers', ['incrementAsync'])
  },
  computed: {
    ...mapState(['isLoggedIn'])
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>