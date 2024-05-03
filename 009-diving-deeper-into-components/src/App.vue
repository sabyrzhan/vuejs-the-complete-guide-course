<template>
  <div>
    <the-header></the-header>
    <button @click="selectComponent('active-goals')">Active Goals</button>
    <button @click="selectComponent('manage-goals')">Manage Goals</button>
    <component :is="selectedComponent"></component>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import ActiveGoals from "@/components/ActiveGoals.vue";
import ManageGoals from "@/components/ManageGoals.vue";
export default {
  components: {
    'the-header': TheHeader,
    'active-goals': ActiveGoals,
    'manage-goals': ManageGoals
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    selectComponent(cmp) {
      this.selectedComponent = cmp
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>