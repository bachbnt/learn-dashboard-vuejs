import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { RouteName, RoutePath } from './route'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RoutePath.HOME,
      name: RouteName.HOME,
      component: HomeView
    },
    {
      path: RoutePath.SIGN_IN,
      name: RouteName.SIGN_IN,
      component: () => import('../views/SignInView.vue')
    },
    {
      path: RoutePath.SIGN_UP,
      name: RouteName.SIGN_UP,
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: RoutePath.FORGOT_PASSWORD,
      name: RouteName.FORGOT_PASSWORD,
      component: () => import('../views/ForgotPasswordView.vue')
    },
    {
      path: RoutePath.RESET_PASSWORD,
      name: RouteName.RESET_PASSWORD,
      component: () => import('../views/ResetPasswordView.vue')
    },
    {
      path: RoutePath.CHANGE_PASSWORD,
      name: RouteName.CHANGE_PASSWORD,
      component: () => import('../views/ChangePasswordView.vue')
    },
    {
      path: RoutePath.ABOUT,
      name: RouteName.ABOUT,
      component: () => import('../views/AboutView.vue')
    },
    {
      path: RoutePath.CALCULATOR,
      name: RouteName.CALCULATOR,
      component: () => import('../views/CalculatorView.vue')
    },
    {
      path: RoutePath.MANAGEMENT,
      name: RouteName.MANAGEMENT,
      component: () => import('../views/UsersView.vue')
    },
    {
      path: RoutePath.STOCK,
      name: RouteName.STOCK,
      component: () => import('../views/StockView.vue')
    },
    {
      path: RoutePath.CRYPTO,
      name: RouteName.CRYPTO,
      component: () => import('../views/CryptoView.vue')
    },
    {
      path: RoutePath.NOT_FOUND,
      name: RouteName.NOT_FOUND,
      component: () => import('../views/404View.vue')
    }
  ]
})

export default router
