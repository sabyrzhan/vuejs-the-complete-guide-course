<template>
  <div class="container">
    <h2>{{ coach.name }}</h2>
    <p><strong>{{ coach.price }}</strong></p>
    <the-badge v-for="tag in coach.tags" :key="tag" :css-class="tag">{{ tag }}</the-badge>
    <div class="buttons">
      <the-button>Contact</the-button>
      <the-button bg-color="darkblue" color="white">View Details</the-button>
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
div.container {
  border-radius: 10px;
  border: 1px solid black;
  padding: 0.5rem;
  margin: 0.7rem 0;
}

div.buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>