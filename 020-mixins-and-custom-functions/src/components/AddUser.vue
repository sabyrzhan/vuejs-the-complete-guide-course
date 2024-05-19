<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with adding a user?</p>
  </user-alert>
  <section>
    <h2>Add a User</h2>
    <button @click="showAlert">Add User</button>
  </section>
</template>

<script>
import UserAlert from './UserAlert.vue';
import alertMixin from '@/mixins/alert.js';

export default {
  mixins: [alertMixin],
  data() {
    return {
      alertIsVisible: true,
      alertTitle: 'Add user?'
    }
  },
  components: {
    UserAlert,
  }
};
</script>