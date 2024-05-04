<template>
  <div>
    <h3>Manage Goals</h3>
    <input type="text" ref="textInput" />
    <button @click="handleSaveClick">Save</button>
    <teleport-to-body>
      <error-alert v-if="isInvalid">
        <h3>Please enter the value</h3>
        <button @click="handleCloseDialog">OK</button>
      </error-alert>
    </teleport-to-body>
  </div>
</template>

<script>
import ErrorAlert from "@/components/ErrorAlert.vue";
import TeleportToBody from "@/components/TeleportToBody.vue";
export default {
  components: {
    ErrorAlert,
    TeleportToBody
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