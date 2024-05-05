<script>
import TheHeader from "@/components/TheHeader.vue";
import ButtonsCard from "@/components/ButtonsCard.vue";
import ResourceList from "@/components/ResourceList.vue";
import ResourceForm from "@/components/ResourceForm.vue";

export default {
  components: {
    TheHeader,
    ButtonsCard,
    ResourceList,
    ResourceForm,
  },
  data() {
    return {
      viewName: 'resource-list',
      resources: []
    }
  },
  provide() {
    return {
      resources: this.resources,
      addResourceHandler: this.handleAddResource,
      deleteHandler: this.handleDeleteResource,
      handleSwitchView: this.handleSwitchView
    }
  },
  methods: {
    handleSwitchView(viewName) {
      this.viewName = viewName
    },
    handleAddResource(resource) {
      this.resources.unshift(resource)
      this.viewName = 'resource-list'
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
  <buttons-card @switch-view="handleSwitchView"></buttons-card>
  <keep-alive>
    <component :is="viewName"></component>
  </keep-alive>
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
