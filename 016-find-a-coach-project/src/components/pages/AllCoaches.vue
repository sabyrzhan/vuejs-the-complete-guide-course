<template>
  <div v-if="this.$route.name === 'coaches'">
    <the-filter-header></the-filter-header>
    <the-base-card>
      <div class="refresh">
        <the-button @click="loadData()">Refresh</the-button>
      </div>
      <the-coach-card v-for="coach in filteredCoaches" :coach="coach" :key="coach.id">
      </the-coach-card>

    </the-base-card>
  </div>
  <router-view v-else></router-view>
</template>

<script>
import TheFilterHeader from "@/components/TheFilterHeader.vue";
import TheCoachCard from "@/components/ui/TheCoachCard.vue";
import {mapGetters, mapMutations} from "vuex";

export default {
  components: {TheCoachCard, TheFilterHeader},
  computed: {
    ...mapGetters('coach', ['filteredCoaches'])
  },
  methods: {
    ...mapMutations('coach', ['loadData'])
  }
}
</script>

<style scoped>
div.refresh {
  margin: 20px 0;
}
</style>