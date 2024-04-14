<template>
<form @submit.prevent>
  <p>
    Name: <input v-model="name" />
  </p>
  <p>
    Phone: <input v-model="phone" />
  </p>
  <p>
    Email: <input v-model="email" />
  </p>
  <p>
    <button @click="addContact">Add</button>
  </p>
</form>
</template>

<script>
export default {
  emits: ['add-friend'],
  data() {
    return {
      name: '',
      phone: '',
      email: ''
    }
  },
  methods: {
    addContact() {
      const friend = {
        id: this.name,
        name: this.name,
        phone: this.phone,
        email: this.email,
        isFavorite: false
      }
      this.name = '';
      this.phone = '';
      this.email = '';
      this.$emit('add-friend', friend)
    }
  }
}
</script>

