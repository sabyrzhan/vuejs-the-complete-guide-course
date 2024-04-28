<template>
  <div class="active-user">
    <h2>{{ user.username }}</h2>
    <h3>Age: {{ user.age }}</h3>
  </div>
</template>

<script>
export default {
  props: ['user'],
  data() {
    return {
      user: this.user
    }
  }
}
</script>

<style>
div.active-user {
  text-align: right;
  width: 49%;
}
</style>