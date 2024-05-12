import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import RoutePage1 from '@/components/RoutePage1.vue';
import RoutePage2 from '@/components/RoutePage2.vue';

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/page1' },
    { path: '/page1', component: RoutePage1 },
    { path: '/page2', component: RoutePage2 },
  ]
})

app.component('base-modal', BaseModal);
app.use(router)
router.isReady().then(() => {
  app.mount('#app');
})
