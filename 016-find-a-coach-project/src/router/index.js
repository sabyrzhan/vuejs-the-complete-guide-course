import { createRouter, createWebHistory } from 'vue-router'
import AllCoaches from "@/components/pages/AllCoaches.vue";
import TheCoachDetails from "@/components/pages/TheCoachDetails.vue";
import TheContact from "@/components/pages/TheContact.vue";
import TheRequests from "@/components/pages/TheRequests.vue";
import NotFound from "@/components/pages/NotFound.vue";

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
      path: '/coaches', component: AllCoaches, name: "coaches", children: [
        {
          path: ':coachId/details', component: TheCoachDetails
        },
        {
          path: ':coachId/contact', component: TheContact
        }
      ]
    },
    {
      path: '/:notFound(.*)', component: NotFound, name: "notFound"
    }
  ]
})

export default router
