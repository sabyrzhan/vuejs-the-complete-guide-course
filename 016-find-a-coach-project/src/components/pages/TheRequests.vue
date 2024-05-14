<template>
  <the-base-card>
    <h2>Requests Received</h2>
    <request-card v-for="req in requests" :request="req" v-if="requests.length !== 0"></request-card>
    <h3 v-else>No requests found.</h3>
  </the-base-card>
</template>
<script>
import TheBaseCard from "@/components/ui/TheBaseCard.vue";
import RequestCard from "@/components/ui/RequestCard.vue";
import {mapState} from "vuex";

export default {
  components: {TheBaseCard, RequestCard},
  computed: {
    ...mapState('requests', ['requests'])
  }
}
</script>

<style scoped>
h2, h3 {
  text-align: center;
}
</style>