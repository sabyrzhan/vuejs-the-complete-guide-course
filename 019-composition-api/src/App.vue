<template>
  <section class="container">
    <h2>{{ user.username }}</h2>
    <h2>{{ user.age }}</h2>
    <button @click="setAge">Set age</button>
  </section>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const user = reactive({
      username: 'Max',
      age: 31
    })
    setTimeout(() => {
      user.username = 'Max 2';
      user.age = 311
    }, 2000);

    function setAge() {
      user.age = 3222;
    }

    return { user: user, setAge }
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