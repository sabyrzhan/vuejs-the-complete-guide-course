<script>
import BaseCard from "@/components/common/BaseCard.vue";

export default {
  components: {BaseCard},
  props: ['id'],
  inject: ['deleteHandler']
}
</script>

<template>
  <base-card>
    <div class="header">
      <h2><slot name="name"></slot></h2>
      <a href="#" @click="deleteHandler(id)">Delete</a>
    </div>
    <p>
      <slot name="description"></slot>
    </p>
    <slot name="link"></slot>
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