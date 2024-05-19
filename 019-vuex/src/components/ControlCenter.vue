<template>
  <button @click="inc">Increment</button>
</template>

<script>
import {useStore} from "vuex";

export default {
  setup() {
    const state = useStore()
    function inc() {
      state.dispatch('increment')
    }

    return { inc };
  },
};
</script>