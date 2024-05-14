<template>
  <the-base-card>
    <h3>Find your coach</h3>
    <span v-for="tag in tags"><input type="checkbox" :checked="isChecked(tag)" :id="tag" @click="toggleFilter($event, tag)" /><label :for="tag">{{ tag }}</label></span>
  </the-base-card>
</template>

<script setup lang="js">
import TheBaseCard from "@/components/ui/TheBaseCard.vue";
</script>

<script lang="js">
import {mapActions, mapState} from "vuex";

export default {
  computed: {
    ...mapState('coach', {
      tags: state => state.tags,
      filter: state => state.filter
    })
  },
  methods: {
    isChecked(tag) {
      return this.filter.find(v => v === tag) !== undefined;
    },
    toggleFilter(event, tag) {
      if (event.target.checked) {
        this.addFilter(tag)
      } else {
        this.removeFilter(tag)
      }
    },
    ...mapActions('coach', ['addFilter', 'removeFilter'])
  }
}
</script>

<style scoped>
label {
  text-transform: capitalize;
  margin: 0 0.5rem 0 0;
}
</style>