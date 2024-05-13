<script setup>
import { RouterView } from 'vue-router'
import TheHeader from "@/components/nav/TheHeader.vue";
</script>

<template>
  <the-header></the-header>
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Reddit+Sans:ital,wght@0,200..900;1,200..900&display=swap');

html {
  margin: 0;
  padding: 0;
}

body {
  padding: 0;
  margin: 0;
  font-family: 'Reddit Sans', sans-serif;
}

div.container {
  border-radius: 10px;
  border: 1px solid black;
  padding: 1rem;
  margin: 0.7rem 0;
}
</style>