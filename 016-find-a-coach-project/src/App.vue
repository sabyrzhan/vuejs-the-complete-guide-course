<script setup>
import { RouterView } from 'vue-router'
import TheHeader from "@/components/nav/TheHeader.vue";
</script>

<template>
  <the-header></the-header>
  <transition name="fade" mode="out-in">
    <RouterView />
  </transition>
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

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease-in-out;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
}


</style>