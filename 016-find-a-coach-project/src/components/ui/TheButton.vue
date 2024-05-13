<template>
  <button :class="cssClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['cssClass']
}
</script>

<style scoped>
button {
  border-radius: 20px;
  border: 1px solid darkblue;
  background-color: transparent;
  padding: 0.5rem 1.5rem;
  margin: 0 3px;
  cursor: pointer;
}

button.primary {
  background-color: darkblue;
  color: white;
}

button.primary:hover {
  background-color: blue;
}
button.primary:active {
  background-color: transparent;
  color: inherit;
}

button:hover {
  background-color: bisque;
}
button:active {
  background-color: transparent;
}
</style>