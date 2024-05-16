<template>
  <the-base-card>
    <div>
      <h2>Coach details</h2>
      <h3>{{ selectedCoach.name }}</h3>
      <p><strong>{{ selectedCoach.price }}</strong></p>
      <the-badge v-for="tag in selectedCoach.tags" :key="tag" :css-class="tag">{{ tag }}</the-badge>
    </div>
  </the-base-card>
</template>
<script setup lang="js">
import TheBaseCard from "@/components/ui/TheBaseCard.vue";
import TheBadge from "@/components/ui/TheBadge.vue";
</script>

<script lang="js">
import {mapGetters} from "vuex";

export default {
  computed: {
    selectedCoach() {
      return this.getCoach(parseInt(this.$route.params.coachId));
    },
    ...mapGetters('coach', ['getCoach'])
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