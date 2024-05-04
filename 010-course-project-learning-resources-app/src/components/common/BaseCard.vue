<script>
export default {
  data() {
    return {
      data: ''
    }
  }
}
</script>

<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  border-radius: 4px;
  border-color: black;
  box-shadow: 0 0 5px black;
  padding: 10px;
  margin: 30px 0;
}
</style>