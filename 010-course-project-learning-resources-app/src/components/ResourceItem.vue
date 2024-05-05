<script>
export default {
  props: ['id', 'name', 'description', 'link'],
  inject: ['deleteHandler']
}
</script>

<template>
  <base-card>
    <div class="resource-item">
      <div class="header">
        <h3>{{ name }}</h3>
        <button @click="deleteHandler(id)">Delete</button>
      </div>
      <p>{{ description }}</p>
      <a :href="link" target="_blank">View Resource</a>
    </div>
  </base-card>
</template>

<style scoped>
h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}

div.resource-item {
  max-width: 40rem;
  margin: auto;
}

div.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>