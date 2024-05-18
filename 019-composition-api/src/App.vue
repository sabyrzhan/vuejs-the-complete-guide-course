<template>
  <section class="container">
    <h2>My Course Goal</h2>
    <h3>{{ userName }}</h3>
    <div>
      <input type="text" v-model="firstName"/>
      <input type="text" ref="lastName"/>
    </div>
    <button @click="setLastName">Set lastname</button>
    <div>{{ lastUpdated }}</div>
  </section>
</template>

<script>
import {computed, ref, watch} from "vue";

export default {
  setup() {
    const firstName = ref('Name 1')
    const lastName = ref('Name 2')
    const lastUpdated = ref(null)

    const userName = computed(() => {
      return firstName.value + ' ' + lastName.value.value
    })

    const setLastName = () => {
      lastName.value.value = 'Something'
    }

    watch(userName, (value) => {
      lastUpdated.value = new Date().toLocaleTimeString()
    })

    return { firstName, lastName, lastUpdated, userName, setLastName }
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