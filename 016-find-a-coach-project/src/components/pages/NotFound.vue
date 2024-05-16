<template>
  <the-base-card>
    <div>404 - Page not found. Go to <router-link to="/">main</router-link> page.</div>
  </the-base-card>
</template>
<script setup lang="ts">
import TheBaseCard from "@/components/ui/TheBaseCard.vue";
</script>

<style scoped>
div {
  padding: 3rem;
}
</style>