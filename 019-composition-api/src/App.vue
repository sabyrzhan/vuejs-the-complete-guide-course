<template>
  <section class="container">
    <h2>My Course Goal</h2>
    <h3>{{ data.userName }}</h3>
    <div>
      <input type="text" @input="data.setFirstname"/>
      <input type="text" @input="data.setLastName"/>
    </div>
  </section>
</template>

<script>
import {computed, reactive, ref} from "vue";

export default {
  setup() {
    const firstName = ref('')
    const lastName = ref('')

    function setFirstname(event) {
      firstName.value = event.target.value
    }

    function setLastName(event) {
      lastName.value = event.target.value
    }

    const userName = computed(() => {
      return firstName.value + ' ' + lastName.value
    })

    const data = reactive({
      setFirstname,
      setLastName,
      userName
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