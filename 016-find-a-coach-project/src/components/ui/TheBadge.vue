<template>
  <span :class="cssClass">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: ['cssClass']
}
</script>

<style scoped>
span {
  padding: 5px 1rem;
  border: none;
  border-radius: 20px;
  margin: 0 3px;
  color: white;
}

span.frontend {
  background-color: darkblue;
}

span.backend {
  background-color: purple;
}

span.career {
  background-color: palevioletred;
}
</style>