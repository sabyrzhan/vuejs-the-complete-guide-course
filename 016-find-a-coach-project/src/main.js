import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/store/index.js";
import TheBaseCard from "@/components/ui/TheBaseCard.vue";
import TheBadge from "@/components/ui/TheBadge.vue";
import TheButton from "@/components/ui/TheButton.vue";

const app = createApp(App)

app.use(router)
app.use(store)

app.component('the-base-card', TheBaseCard)
app.component('the-button', TheButton)
app.component('the-badge', TheBadge)

router.isReady().then(() => {
    app.mount('#app')
})
