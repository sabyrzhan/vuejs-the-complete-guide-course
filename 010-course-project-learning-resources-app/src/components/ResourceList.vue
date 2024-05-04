<script>
import ResourceItem from "@/components/ResourceItem.vue";
import BaseCard from "@/components/common/BaseCard.vue";

export default {
  components: {BaseCard, ResourceItem},
  inject: ['resources']
}
</script>

<template>
  <resource-item v-for="resource in resources" v-if="resources.length > 0">
    <template #name>{{ resource.name}}</template>
    <template #description>{{ resource.description}}</template>
    <template #link><a :href="resource.link" target="_blank">View Resource</a></template>
  </resource-item>
  <base-card v-else>
    <div>
      <h3>No resources found. Add one to view them here...</h3>
    </div>
  </base-card>
</template>

<style scoped>
h3 {
  text-align: center;
}
</style>