<template>
<div class="container">
  <active-user :user="user" />
  <user-data @add-user="handleAddUser" />
</div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '<username>',
        age: '<age>'
      }
    }
  },
  methods: {
    handleAddUser(user) {
      this.user.username = user.username
      this.user.age = user.age
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>
