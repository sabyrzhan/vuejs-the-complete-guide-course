<template>
  <div>
    <h3>Manage Goals</h3>
    <input type="text" ref="textInput" />
    <button @click="handleSaveClick">Save</button>
    <error-alert v-if="isInvalid">
      <h3>Please enter the value</h3>
      <button @click="handleCloseDialog">OK</button>
    </error-alert>
  </div>
</template>

<script>
import ErrorAlert from "@/components/ErrorAlert.vue";
export default {
  components: {
    ErrorAlert
  },
  data() {
    return {
      isInvalid: false
    }
  },
  methods: {
    handleSaveClick() {
      const value = this.$refs.textInput.value
      if (value.trim() === '') {
        this.isInvalid = true
      }
    },
    handleCloseDialog() {
      this.isInvalid = false
    }
  }
}
</script>