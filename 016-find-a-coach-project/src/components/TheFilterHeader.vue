<template>
  <the-base-card>
    <h3>Find your coach</h3>
    <input type="checkbox" id="frontend" /><label for="frontend">Frontend</label>
    <input type="checkbox" id="backend" /><label for="backend">Backend</label>
    <input type="checkbox" id="career" /><label for="career">Career</label>
  </the-base-card>
</template>

<script setup lang="ts">
import TheBaseCard from "@/components/ui/TheBaseCard.vue";
</script>

<style scoped>
label {
  margin: 0 1rem 0 0;
}
</style>