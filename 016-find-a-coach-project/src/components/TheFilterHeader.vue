<template>
  <the-base-card>
    <h3>Find your coach</h3>
    <span v-for="tag in tags"><input type="checkbox" :checked="isChecked(tag)" :id="tag" @click="addFilter(tag)" /><label :for="tag">{{ tag }}</label></span>
  </the-base-card>
</template>

<script setup lang="js">
import TheBaseCard from "@/components/ui/TheBaseCard.vue";
</script>

<script lang="js">
import {mapActions, mapGetters, mapState} from "vuex";

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
    ...mapActions('coach', ['addFilter'])
  }
}
</script>

<style scoped>
label {
  text-transform: capitalize;
  margin: 0 0.5rem 0 0;
}
</style>