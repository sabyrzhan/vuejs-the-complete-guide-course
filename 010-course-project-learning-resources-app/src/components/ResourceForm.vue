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
      <div class="form-control">
        <label for="title">Title:</label>
        <input id="title" key="title" type="text" v-model="title" />
      </div>

      <div class="form-control">
        <label for="description">Description:</label>
        <textarea id="description" key="description" v-model="description"></textarea>
      </div>

      <div class="form-control">
        <label for="link">Link:</label>
        <input type="text" id="link" key="link" v-model="link" />
      </div>

      <div class="form-control">
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
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>