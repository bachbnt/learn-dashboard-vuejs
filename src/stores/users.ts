import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useAuthStore } from './auth'
import { apiClient } from '@/api/apiClient'
import { Endpoint } from '@/api/endpoint'
import type { User } from '@/types/User'

export const useUsersStore = defineStore('user', () => {
  const users = ref<User[]>([])
  const authStore = useAuthStore()

  const fetchUsers = () => {
    if (!authStore.isLoggedIn) {
      return
    }
    apiClient.get(Endpoint.USERS).then((res) => {
      users.value = res.data
    })
  }

  const updateUser = (id: string, user: Partial<User>) => {
    if (!authStore.isLoggedIn) {
      return
    }
    apiClient.put(Endpoint.USERS + `/${id}`, user).then(fetchUsers)
  }

  const deleteUser = (id: string) => {
    if (!authStore.isLoggedIn) {
      return
    }
    apiClient.delete(Endpoint.USERS + `/${id}`).then(fetchUsers)
  }

  return {
    users,
    fetchUsers,
    updateUser,
    deleteUser
  }
})
