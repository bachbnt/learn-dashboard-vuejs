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
        toast.success(res.data?.message)
      })
      .catch((err) => {
        toast.error(err.response?.data?.message ?? err?.message)
      })
  }

  const signUp = (email: string, password: string, fullName: string) => {
    apiClient
      .post(Endpoint.SIGN_UP, { email, password, fullName })
      .then((res) => {
        toast.success(res.data?.message)
      })
      .catch((err) => {
        toast.error(err.response?.data?.message ?? err?.message)
      })
  }

  const forgotPassword = (email: string) => {
    apiClient
      .post(Endpoint.FORGOT_PASSWORD, { email })
      .then((res) => {
        toast.success(res.data?.message)
      })
      .catch((err) => {
        toast.error(err.response?.data?.message ?? err?.message)
      })
  }

  const resetPassword = (token: string, password: string) => {
    apiClient
      .post(Endpoint.RESET_PASSWORD, { token, password })
      .then((res) => {
        toast.success(res.data?.message)
      })
      .catch((err) => {
        toast.error(err.response?.data?.message ?? err?.message)
      })
  }

  const changePassword = (oldPassword: string, newPassword: string) => {
    apiClient
      .post(Endpoint.CHANGE_PASSWORD, { oldPassword, newPassword })
      .then((res) => {
        toast.success(res.data?.message)
      })
      .catch((err) => {
        toast.error(err.response?.data?.message ?? err?.message)
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
    signUp,
    forgotPassword,
    resetPassword,
    changePassword,
    signOut
  }
})
