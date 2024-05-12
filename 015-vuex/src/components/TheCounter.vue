<template>
  <h3>{{ counter }}</h3>
  <h4>State counter {{ stateCounter }}</h4>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  computed: {
    ...mapGetters(['counter']),
    ...mapState({
      'stateCounter': 'counter'
    })
  }
}
</script>