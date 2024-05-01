<template>
  <div class="user-data">
    <form @submit.prevent>
      <label for="username">Name:</label> <input id="username" type="text" v-model="user.username" /> <br />
      <label for="age">Age:</label> <input id="age" type="number" v-model="user.age"> <br />
      <button @click="addUser">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ['add-user'],
  data() {
    return {
      user: {
        username: '',
        age: ''
      }
    }
  },
  methods: {
    addUser() {
      if (this.user.username === '') {
        return alert('Username must not be empty')
      }

      if (this.user.age < 18) {
        return alert('User age must not be less than 18')
      }

      this.$emit('add-user', this.user)
      this.user.username = ''
      this.user.age = ''
    }
  }
}
</script>

<style>
div.user-data {
  text-align: left;
  width: 49%;
}
div.user-data label {
  display: inline-flex;
  width: 4em;
  margin-top: 0.5em;
}

div.user-data button {
  margin-top: .5em;
  width: 50px;
}
</style>