import { createRouter, createWebHistory } from 'vue-router'
import AllCoaches from "@/components/pages/AllCoaches.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AllCoaches
    }
  ]
})

export default router
