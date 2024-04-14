<template>
  <li>
    <h2>{{ friend.name }} {{ friend.isFavorite ? '(Fav)' : ''}}</h2>
    <button @click="toggleFavorite">Toggle fav</button>
    <button @click="toggleDetails">Show details</button>
    <button @click="$emit('delete-friend', friend.id)">Delete Friend</button>
    <ul v-if="visible">
      <li>
        <strong>Phone:</strong>
        {{ friend.phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ friend.email }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ['friend'],
  emits: ['toggle-favorite', 'delete-friend'],
  data() {
    return {
      visible: false
    }
  },
  methods: {
    toggleDetails() {
      this.visible = !this.visible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.friend.id)
    }
  }
}
</script>