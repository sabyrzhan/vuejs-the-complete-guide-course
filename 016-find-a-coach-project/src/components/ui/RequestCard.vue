<template>
  <div>
    <p class="email">{{ request.email}}</p>
    <p>{{ request.message }}</p>
  </div>
</template>

<script>
export default {
  props: ['request']
}
</script>

<style scoped>
p {
  margin: 0;
}
p.email {
  color: darkblue;
  font-weight: bold;
}
div {
  border: 1px solid #cccccc;
  width: 60%;
  padding: 1rem;
  margin: 1rem auto;
}
</style>