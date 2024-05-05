<script>
export default {
  emits: ['switch-view'],
  inject: ['handleSwitchView']
}
</script>

<template>
  <base-card>
    <div>
      <base-button @click="handleSwitchView('resource-list')">Stored Resources</base-button>
      <base-button @click="handleSwitchView('resource-form')">Add Resource</base-button>
    </div>
  </base-card>
</template>

<style scoped>
div {
  text-align: center;
}

div button {
  margin: 10px 0;
  font-size: 1em;
}
</style>