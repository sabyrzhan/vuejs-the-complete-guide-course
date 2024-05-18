<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName" @increase-age="handleIncreaseAge"></user-data>
    <div>
      <input type="text" v-model="firstName"/>
      <input type="text" v-model="lastName"/>
    </div>
    <button @click="setLastName">Set lastname</button>
    <div>{{ lastUpdated }}</div>
  </section>
</template>

<script>
import {computed, provide, ref, watch} from "vue";
import UserData from "@/components/UserData.vue";

export default {
  components: {UserData},
  setup() {
    const firstName = ref('Name 1')
    const lastName = ref('Name 2')
    const lastUpdated = ref(null)
    const age = ref(1)

    provide('age', age)

    const userName = computed(() => {
      return firstName.value + ' ' + lastName.value
    })

    const setLastName = () => {
      lastName.value = 'Something'
    }

    const handleIncreaseAge = () => {
      age.value += 10
    }

    watch(userName, (value) => {
      lastUpdated.value = new Date().toLocaleTimeString()
    })

    return { firstName, lastName, lastUpdated, userName, setLastName, handleIncreaseAge }
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