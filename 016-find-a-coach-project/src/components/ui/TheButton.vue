<template>
  <button :style="{backgroundColor: bgColor, color: color}">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['bgColor', 'color']
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
</style>