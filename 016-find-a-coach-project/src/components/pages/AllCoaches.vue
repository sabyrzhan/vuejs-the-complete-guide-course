<template>
  <div v-if="this.$route.name === 'coaches'">
    <the-filter-header></the-filter-header>
    <the-base-card>
      <div class="refresh">
        <the-button>Refresh</the-button>
      </div>

      <the-coach-card v-for="coach in coaches" :coach="coach" :key="coach.id">
      </the-coach-card>

    </the-base-card>
  </div>
  <router-view v-else></router-view>
</template>

<script>
import TheFilterHeader from "@/components/TheFilterHeader.vue";
import TheBaseCard from "@/components/ui/TheBaseCard.vue";
import TheButton from "@/components/ui/TheButton.vue";
import TheCoachCard from "@/components/ui/TheCoachCard.vue";
import {mapState} from "vuex";

export default {
  components: {TheButton, TheCoachCard, TheBaseCard, TheFilterHeader},
  computed: {
    ...mapState('coach', {
      coaches: state => state.coaches,
    })
  }
}
</script>

<style scoped>
div.refresh {
  margin: 20px 0;
}
</style>