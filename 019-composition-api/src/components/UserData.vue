<template>
  <h2>My Course Goal</h2>
  <h3>{{ userName }}</h3>
  <h2>Age: {{ age }}</h2>
  <button @click="increaseAge">Increase age</button>
</template>
<script>
import {computed, inject} from "vue";

export default {
  props: ['firstName', 'lastName'],
  emits: ['increase-age'],
  setup(props, ctx) {
    const userName = computed(() => {
      return props.firstName + ' ' + props.lastName
    })

    const age = inject('age')

    const increaseAge = () => {
      ctx.emit('increase-age')
    }

    return { userName, age, increaseAge }
  }
}
</script>