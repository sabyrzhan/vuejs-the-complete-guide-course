<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <button @click="increment">Add 10</button>
    <button @click="incrementAsync">Add 10 (async)</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from '@/components/TheCounter.vue';

export default {
  components: {
    TheCounter,
    BaseContainer,
  },
  methods: {
    increment() {
      this.$store.commit('increment', 10);
    },
    incrementAsync() {
      this.$store.dispatch('incrementAsync', 10);
    }
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