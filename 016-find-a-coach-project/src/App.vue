<script setup>
import {RouterView} from 'vue-router'
import TheHeader from "@/components/nav/TheHeader.vue";
import TheBaseCard from "@/components/ui/TheBaseCard.vue";
</script>
<script>
import {mapMutations, mapState} from "vuex";

export default {
  methods: {
    ...mapMutations('coach', ['loadData']),
    ...mapMutations('requests', { loadRequestsData: "loadData" }),
  },
  computed: {
    ...mapState('coach', ['dataLoaded'])
  },
  mounted() {
    this.loadData();
    this.loadRequestsData();
  }
}
</script>

<template>
  <the-header></the-header>
  <router-view v-slot="props">
    <transition name="fade" mode="out-in">
      <the-base-card v-if="!dataLoaded">
        <div class="loading">Loading data...</div>
      </the-base-card>
      <component :is="props.Component" v-else></component>
    </transition>
  </router-view>
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

div.loading {
  text-align: center;
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