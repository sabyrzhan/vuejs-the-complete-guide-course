import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from '@/components/teams/TeamsList.vue';
import UsersList from '@/components/users/UsersList.vue';
import TeamMembers from '@/components/teams/TeamMembers.vue';
import NotFound from '@/components/nav/NotFound.vue';
import TeamsFooter from '@/components/nav/TeamsFooter.vue';
import UsersFooter from '@/components/teams/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams'},
    { path: '/teams', components: { default: TeamsList, footer: TeamsFooter}, children: [
      { path: ':teamId', name: 'team-members', component: TeamMembers, props: true },
      ] },
    { path: '/users', components: { default: UsersList, footer: UsersFooter }},
    { path: '/:notFound(.*)', component: NotFound}
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition != null) {
      return savedPosition;
    }
    return {top: 0, left: 0};
  }
})

router.beforeEach((to, from, next) => {
  // if (to.name === 'team-members') {
  //   next({ path: '/not-found' })
  // } else {
  //   next(true)
  // }
  next(true);
})

const app = createApp(App)

app.use(router)

app.mount('#app');
