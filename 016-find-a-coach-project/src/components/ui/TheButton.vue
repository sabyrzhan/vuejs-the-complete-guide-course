<template>
  <router-link :class="cssClass" :to="link" v-if="link !== ''"><slot></slot></router-link>
  <button :class="cssClass" v-else>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['cssClass', 'link']
}
</script>

<style scoped>
button, a {
  border-radius: 20px;
  border: 1px solid darkblue;
  background-color: transparent;
  padding: 0.5rem 1.5rem;
  margin: 0 3px;
  cursor: pointer;
  text-decoration: none;
}

button.primary, a.primary {
  background-color: darkblue;
  color: white;
}

button.primary:hover, a.primary:hover {
  background-color: blue;
}
button.primary:active, a.primary:active {
  background-color: transparent;
  color: inherit;
}

button:hover, a:hover {
  background-color: bisque;
}
button:active, a:active {
  background-color: transparent;
}
</style>