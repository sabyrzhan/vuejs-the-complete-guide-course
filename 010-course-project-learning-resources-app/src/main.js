import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from "@/components/common/BaseCard.vue";
import BaseButton from "@/components/common/BaseButton.vue";
import ErrorAlert from "@/components/common/ErrorAlert.vue";

const app = createApp(App)
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('error-alert', ErrorAlert)
app.mount('#app')
