<template>
  <div class="container">
    <button @click="login" v-if="!isLoggedIn">Login</button>
    <button @click="logout" v-if="isLoggedIn">Logout</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  methods: {
    ...mapMutations(['login', 'logout'])
  },
  computed: {
    ...mapState(['isLoggedIn'])
  }
}
</script>