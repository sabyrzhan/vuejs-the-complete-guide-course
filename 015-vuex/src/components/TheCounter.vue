<template>
  <h3>{{ counter }}</h3>
  <h4>State counter {{ stateCounter }}</h4>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  computed: {
    ...mapGetters('numbers', ['counter']),
    ...mapState('numbers', {
      stateCounter: state => state.counter
    })
  }
}
</script>