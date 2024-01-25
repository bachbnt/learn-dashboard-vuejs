import { apiClient } from '@/api/apiClient'
import { Endpoint } from '@/api/endpoint'
import type { User } from '@/types/User'
import { cookie, Cookie } from '@/utils/cookie'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { toast } from 'vue3-toastify'

export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(false)
  const userProfile = ref<Partial<User>>({})

  const signIn = (email: string, password: string) => {
    return new Promise((resolve, reject) => {
      apiClient
        .post(Endpoint.SIGN_IN, { email, password })
        .then((res) => {
          cookie.setItem(Cookie.ACCESS_TOKEN, res.data.token)
          isLoggedIn.value = true
          toast.success(res.data?.message)
          resolve(res)
        })
        .catch((err) => {
          toast.error(err.response?.data?.message ?? err?.message)
          reject(err)
        })
    })
  }

  const signUp = (email: string, password: string, fullName: string) => {
    return new Promise((resolve, reject) => {
      apiClient
        .post(Endpoint.SIGN_UP, { email, password, fullName })
        .then((res) => {
          toast.success(res.data?.message)
          resolve(res)
        })
        .catch((err) => {
          toast.error(err.response?.data?.message ?? err?.message)
          reject(err)
        })
    })
  }

  const forgotPassword = (email: string) => {
    return new Promise((resolve, reject) => {
      apiClient
        .post(Endpoint.FORGOT_PASSWORD, { email })
        .then((res) => {
          toast.success(res.data?.message)
          resolve(res)
        })
        .catch((err) => {
          toast.error(err.response?.data?.message ?? err?.message)
          reject(err)
        })
    })
  }

  const resetPassword = (token: string, password: string) => {
    return new Promise((resolve, reject) => {
      apiClient
        .post(Endpoint.RESET_PASSWORD, { token, password })
        .then((res) => {
          toast.success(res.data?.message)
          resolve(res)
        })
        .catch((err) => {
          toast.error(err.response?.data?.message ?? err?.message)
          reject(err)
        })
    })
  }

  const changePassword = (oldPassword: string, newPassword: string) => {
    return new Promise((resolve, reject) => {
      apiClient
        .put(Endpoint.CHANGE_PASSWORD, { oldPassword, newPassword })
        .then((res) => {
          toast.success(res.data?.message)
          resolve(res)
        })
        .catch((err) => {
          toast.error(err.response?.data?.message ?? err?.message)
          reject(err)
        })
    })
  }

  const updateProfile = (fullName: string) => {
    return new Promise((resolve, reject) => {
      apiClient
        .put(Endpoint.UPDATE_PASSWORD, { fullName })
        .then((res) => {
          toast.success(res.data?.message)
          resolve(res)
        })
        .catch((err) => {
          toast.error(err.response?.data?.message ?? err?.message)
          reject(err)
        })
    })
  }

  const getProfile = () => {
    return new Promise((resolve, reject) => {
      apiClient
        .get(Endpoint.PROFILE)
        .then((res) => {
          userProfile.value = res.data.user
          resolve(res)
        })
        .catch((err) => {
          toast.error(err.response?.data?.message ?? err?.message)
          reject(err)
        })
    })
  }

  const signOut = () => {
    return new Promise((resolve) => {
      cookie.removeItem(Cookie.ACCESS_TOKEN)
      isLoggedIn.value = false
      resolve(true)
    })
  }

  const checkAuth = () => {
    return isLoggedIn.value
  }

  const bootstrap = () => {
    const accessToken = cookie.getItem(Cookie.ACCESS_TOKEN)
    if (accessToken) {
      isLoggedIn.value = true
      getProfile()
    }
  }

  bootstrap()

  return {
    isLoggedIn,
    userProfile,
    checkAuth,
    signIn,
    signUp,
    forgotPassword,
    resetPassword,
    changePassword,
    updateProfile,
    getProfile,
    signOut
  }
})
