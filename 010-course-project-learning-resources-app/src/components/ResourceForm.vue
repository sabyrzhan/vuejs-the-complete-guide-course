<script>
import ErrorAlert from "@/components/common/ErrorAlert.vue";

export default {
  components: {ErrorAlert},
  inject: ['addResourceHandler', 'switchToListView'],
  data() {
    return {
      isValid: true,
      title: '',
      description: '',
      link: ''
    }
  },
  methods: {
    addResource() {
      if (this.title.trim() === '' || this.description.trim() === '' || this.link.trim() === '') {
        this.isValid = false
        return false
      }
      const data = {
        id: Date.now(),
        name: this.title,
        description: this.description,
        link: this.link,
      }
      this.title = ''
      this.description = ''
      this.link = ''
      this.addResourceHandler(data)
      this.switchToListView()
    },
    handleCloseDialog() {
      this.isValid = true
    }
  }
}
</script>

<template>
  <base-card>
    <div class="container">
      <div class="control">
        <label for="title">Title:</label>
        <input id="title" key="title" type="text" v-model="title" />
      </div>

      <div class="control">
        <label for="description">Description:</label>
        <textarea id="description" key="description" v-model="description"></textarea>
      </div>

      <div class="control">
        <label for="link">Link:</label>
        <input type="text" id="link" key="link" v-model="link" />
      </div>

      <div class="control">
        <base-button @click="addResource">Add Resource</base-button>
      </div>
    </div>
  </base-card>
  <error-alert v-if="!isValid">
    <template #buttons>
      <button @click="handleCloseDialog">Ok</button>
    </template>
  </error-alert>
</template>

<style scoped>
div.container {
  margin: 20px;
}
div.control {
  margin: 0 0 20px 0;
}
label {
  display: block;
}
input[type=text] {
  width: 100%;
  height: 20px;
}

textarea {
  width: 100%;
  height: 50px;
}
</style>