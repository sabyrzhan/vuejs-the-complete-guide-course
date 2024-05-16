<template>
  <div class="container">
    <h2>{{ coach.name }}</h2>
    <p><strong>{{ coach.price }}</strong></p>
    <the-badge v-for="tag in coach.tags" :key="tag" :css-class="tag">{{ tag }}</the-badge>
    <div class="buttons">
      <the-button :link="coachContactLink">Contact</the-button>
      <the-button css-class="primary" :link="coachDetailsLink">View Details</the-button>
    </div>
  </div>
</template>
<script>

export default {
  props: ['coach'],
  computed: {
    coachContactLink() {
      return this.$route.path + '/' + this.coach.id + '/contact'
    },
    coachDetailsLink() {
      return this.$route.path + '/' + this.coach.id + '/details'
    }
  }
}
</script>

<style scoped>
div.buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>