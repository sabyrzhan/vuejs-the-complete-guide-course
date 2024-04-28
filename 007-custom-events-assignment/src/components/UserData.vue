<template>
  <div class="user-data">
    <form @submit.prevent>
      Name: <input type="text" v-model="user.username" /> <br />
      Age: <input type="number" v-model="user.age"> <br />
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
</style>