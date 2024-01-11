import { apiClient } from '@/api/apiClient'
import { Endpoint } from '@/api/endpoint'
import { cookie, Cookie } from '@/utils/cookie'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { toast } from 'vue3-toastify'

export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(false)

  const bootstrap = () => {
    const accessToken = cookie.getItem(Cookie.ACCESS_TOKEN)
    if (accessToken) {
      isLoggedIn.value = true
    }
  }

  bootstrap()

  const signIn = (email: string, password: string, callback?: Function) => {
    apiClient
      .post(Endpoint.SIGN_IN, { email, password })
      .then((res) => {
        cookie.setItem(Cookie.ACCESS_TOKEN, res.data.token)
        isLoggedIn.value = true
        callback?.()
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }

  const signOut = (callback?: Function) => {
    cookie.removeItem(Cookie.ACCESS_TOKEN)
    isLoggedIn.value = false
    callback?.()
  }

  const checkAuth = () => {
    return isLoggedIn.value
  }

  return {
    isLoggedIn,
    checkAuth,
    signIn,
    signOut
  }
})
