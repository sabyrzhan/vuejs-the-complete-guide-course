<template>
  <the-base-card>
    <div>
      <h2>Coach details</h2>
      <h3>{{ coach.name }}</h3>
      <p><strong>{{ coach.price }}</strong></p>
      <the-badge v-for="tag in coach.tags" :key="tag" :css-class="tag">{{ tag }}</the-badge>
    </div>
  </the-base-card>
</template>
<script setup lang="js">
import TheBaseCard from "@/components/ui/TheBaseCard.vue";
import TheBadge from "@/components/ui/TheBadge.vue";
</script>

<script lang="js">
import {mapState} from "vuex";

export default {
  computed: {
    ...mapState('coach', {
      coach: state => state.coaches[0]
    })
  }
}
</script>

<style scoped>
div {
  padding: 20px;
}
h2 {
  text-align: center;
}
</style>