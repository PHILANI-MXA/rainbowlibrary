import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    // route level code-splitting
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUpView.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
