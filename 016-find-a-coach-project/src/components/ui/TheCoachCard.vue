<template>
  <div class="container">
    <h2>{{ coach.name }}</h2>
    <p><strong>{{ coach.price }}</strong></p>
    <the-badge v-for="tag in coach.tags" :key="tag" :css-class="tag">{{ tag }}</the-badge>
    <div class="buttons">
      <the-button :link="'/coaches/' + coach.id + '/contact'">Contact</the-button>
      <the-button css-class="primary" :link="'/coaches/' + coach.id + '/details'">View Details</the-button>
    </div>
  </div>
</template>
<script>
import TheBadge from "@/components/ui/TheBadge.vue";
import TheButton from "@/components/ui/TheButton.vue";

export default {
  components: {TheButton, TheBadge},
  props: ['coach']
}
</script>

<style scoped>
div.buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>