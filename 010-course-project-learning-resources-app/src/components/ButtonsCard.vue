<script>
export default {
  emits: ['switch-view'],
  inject: ['handleSwitchView']
}
</script>

<template>
  <base-card>
    <div>
      <button @click="handleSwitchView('resource-list')">Stored Resources</button>
      <button @click="handleSwitchView('resource-form')">Add Resource</button>
    </div>
  </base-card>
</template>

<style scoped>
div {
  text-align: center;
}

div button {
  margin: 10px;
  font-size: 1em;
}
</style>