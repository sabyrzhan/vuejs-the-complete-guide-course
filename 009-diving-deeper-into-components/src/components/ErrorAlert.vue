<template>
  <dialog open>
    <h3>Error</h3>
    <slot></slot>
  </dialog>
</template>

<style scoped>
  dialog {
    position: fixed;
    margin: 0;
    top: 10vh;
    width: 300px;
    left: 40%;
  }
</style>