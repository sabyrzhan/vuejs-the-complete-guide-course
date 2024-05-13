import { createRouter, createWebHistory } from 'vue-router'
import AllCoaches from "@/components/pages/AllCoaches.vue";
import TheCoachDetails from "@/components/pages/TheCoachDetails.vue";
import TheContact from "@/components/pages/TheContact.vue";
import TheRequests from "@/components/pages/TheRequests.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', redirect: '/coaches'
    },
    {
      path: '/requests', component: TheRequests
    },
    {
      path: '/coaches', component: AllCoaches, children: [
        {
          path: ':coachId/details', component: TheCoachDetails
        },
        {
          path: ':coachId/contact', component: TheContact
        }
      ]
    },
  ]
})

export default router
