<script>
import BaseCard from "@/components/common/BaseCard.vue";

export default {
  components: {BaseCard},
  props: ['id', 'name', 'description', 'link'],
  inject: ['deleteHandler']
}
</script>

<template>
  <base-card>
    <div class="header">
      <h2>{{ name }}</h2>
      <a href="#" @click="deleteHandler(id)">Delete</a>
    </div>
    <p>{{ description }}</p>
    <a :href="link" target="_blank">View Resource</a>
  </base-card>
</template>

<style scoped>
div.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>