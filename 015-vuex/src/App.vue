<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <button @click="increment(10)">Add 10</button>
    <button @click="incrementAsync(10)">Add 10 (async)</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from '@/components/TheCounter.vue';
import { mapMutations, mapActions} from 'vuex';

export default {
  components: {
    TheCounter,
    BaseContainer,
  },
  methods: {
    ...mapMutations(['increment']),
    ...mapActions(['incrementAsync']),
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