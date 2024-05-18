<template>
  <h2>My Course Goal</h2>
  <h3>{{ userName }}</h3>
</template>
<script>
import {computed} from "vue";

export default {
  props: ['firstName', 'lastName'],
  setup(props) {
    const userName = computed(() => {
      return props.firstName + ' ' + props.lastName
    })

    return { userName }
  }
}
</script>