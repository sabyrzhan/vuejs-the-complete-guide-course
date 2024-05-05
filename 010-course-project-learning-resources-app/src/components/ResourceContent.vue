<script>
import ResourceList from "@/components/ResourceList.vue";
import ResourceForm from "@/components/ResourceForm.vue";

export default {
  components: {ResourceList, ResourceForm},
  provide() {
    return {
      switchToListView: this.switchToListView
    }
  },
  data() {
    return {
      viewName: 'resource-list',
    }
  },
  computed: {
    setListButtonActive() {
      if (this.viewName === 'resource-list') {
        return null;
      } else {
        return 'flat'
      }
    },
    setFormButtonActive() {
      if (this.viewName === 'resource-form') {
        return null;
      } else {
        return 'flat';
      }
    }
  },
  methods: {
    handleSwitchView(viewName) {
      this.viewName = viewName
    },
    switchToListView() {
      this.handleSwitchView('resource-list');
    }
  }
}
</script>

<template>
  <base-card>
    <div>
      <base-button @click="handleSwitchView('resource-list')" :class="setListButtonActive">Stored Resources</base-button>
      <base-button @click="handleSwitchView('resource-form')" :class="setFormButtonActive">Add Resource</base-button>
    </div>
  </base-card>
  <keep-alive>
    <component :is="viewName"></component>
  </keep-alive>
</template>

<style scoped>
div {
  text-align: center;
}

div button {
  margin: 10px 0;
  font-size: 1em;
}
</style>