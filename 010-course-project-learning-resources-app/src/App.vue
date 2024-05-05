<script>
import TheHeader from "@/components/TheHeader.vue";
import ResourceContent from "@/components/ResourceContent.vue";

export default {
  components: {
    ResourceContent,
    TheHeader,
  },
  data() {
    return {
      resources: []
    }
  },
  provide() {
    return {
      resources: this.resources,
      addResourceHandler: this.handleAddResource,
      deleteHandler: this.handleDeleteResource,
    }
  },
  methods: {
    handleAddResource(resource) {
      this.resources.unshift(resource)
    },
    handleDeleteResource(id) {
      const index = this.resources.findIndex(resource => resource.id === id)
      this.resources.splice(index, 1)
    }
  }
}
</script>

<template>
  <the-header></the-header>
  <resource-content></resource-content>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
