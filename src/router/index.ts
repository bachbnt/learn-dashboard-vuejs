import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: () => import('../views/CalculatorView.vue')
    },
    {
      path: '/stock',
      name: 'stock',
      component: () => import('../views/StockView.vue')
    },
    {
      path: '/crypto',
      name: 'crypto',
      component: () => import('../views/CryptoView.vue')
    }
  ]
})

export default router
