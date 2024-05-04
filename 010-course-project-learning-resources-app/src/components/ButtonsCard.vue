<script>
import BaseCard from "@/components/BaseCard.vue";

export default {
  components: {
    BaseCard
  },
  emits: ['switch-view'],
  methods: {
    switchView(viewName) {
      this.$emit('switch-view', viewName)
    }
  }
}
</script>

<template>
  <base-card>
    <div>
      <button @click="switchView('resource-list')">Stored Resources</button>
      <button @click="switchView('resource-form')">Add Resource</button>
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