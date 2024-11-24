import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/trRender',
      name: 'trRender',
      component: () => import('../views/TestTrRender.vue'),
    },
    {
      path: '/xTable',
      name: 'xTable',
      component: () => import('../views/xPage.vue'),
    },
  ],
})

export default router
