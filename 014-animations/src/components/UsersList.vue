<template>
  <transition-group tag="ul" name="users-list">
    <li v-for="user in users" :key="user.id" @click="deleteUser(user)">{{ user.name }}</li>
  </transition-group>
  <input type="text" ref="userInput" />
  <button @click="addUser">Add user</button>
</template>

<script>
export default {
  data() {
    return {
      users: []
    }
  },
  methods: {
    deleteUser(user) {
      this.users = this.users.filter(u => u.id !== user.id)
    },
    addUser() {
      const userName = this.$refs.userInput.value
      this.users.unshift({id: new Date().getTime(), name: userName})
    }
  },
  async beforeMount() {
    for(let i = 1; i <= 10; i++) {
      this.users.push({
        id: new Date().getTime() + i,
        name: 'User' + i
      })
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
}

li {
  border: 1px solid #cccccc;
  padding: 1rem;
  margin: 0;
}

.users-list-enter-from,
.users-list-leave-to {
  opacity: 0;
  transform: translateX(-3px);
}

.users-list-enter-to,
.users-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.users-list-enter-active,
.users-list-leave-active {
  transition: all 0.3s;
}
</style>