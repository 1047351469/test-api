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
    {
      path: '/list',
      name: 'ListPage',
      component: () => import('../views/ListPage.vue'),
      meta: { keepAlive: true }, // 缓存列表页
    },
    {
      path: '/detail/:id',
      name: 'DetailPage',
      component: () => import('../views/DetailPage.vue'),
      meta: { keepAlive: false }, // 不缓存详情页
    },
    {
      path: '/ts',
      name: 'tsPage',
      component: () => import('../views/tsView.vue'),
      meta: { keepAlive: false }, // 不缓存详情页
    },
  ],
})

export default router
