import { createRouter, createWebHistory } from 'vue-router'
import AllCoaches from "@/components/pages/AllCoaches.vue";
import TheCoachDetails from "@/components/pages/TheCoachDetails.vue";
import TheContact from "@/components/pages/TheContact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', component: AllCoaches
    },
    {
      path: '/coaches/:coachId/details', component: TheCoachDetails
    },
    {
      path: '/coaches/:coachId/contact', component: TheContact
    }
  ]
})

export default router
