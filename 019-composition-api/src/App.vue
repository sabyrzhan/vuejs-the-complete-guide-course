<template>
  <section class="container">
    <h2>My Course Goal</h2>
    <h3 v-if="data.isShown">{{ data.goal }}</h3>
    <button @click="data.toggle">Toggle Goal</button>
  </section>
</template>

<script>
import {ref} from "vue";

export default {
  setup() {
    function toggle() {
      data.value.isShown = !data.value.isShown
    }

    const data = ref({
      goal: 'My course goal',
      isShown: true,
      toggle
    });

    return { data: data }
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>