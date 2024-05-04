<script>
export default {}
</script>

<template>
  <teleport to="body">
    <dialog open>
      <h3>Invalid input</h3>
      <p>Unfortunately, at least one input value is invalid.</p>
      <p>
        Please check all inputs and make sure you enter at least a few characters
        into each input field.
      </p>
      <div class="button-container">
        <slot name="buttons"></slot>
      </div>
    </dialog>
  </teleport>
</template>

<style scoped>
dialog {
  position: fixed;
  margin: auto;
  top: 10vh;
}
div.button-container {
  text-align: right;
}
</style>