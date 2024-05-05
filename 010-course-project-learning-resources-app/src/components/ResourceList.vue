<script>
import ResourceItem from "@/components/ResourceItem.vue";

export default {
  components: {ResourceItem},
  inject: ['resources']
}
</script>

<template>
  <resource-item
      v-for="resource in resources" v-if="resources.length > 0"
      :id="resource.id"
      :key="resource.id"
      :name="resource.name"
      :description="resource.description"
      :link="resource.link">
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