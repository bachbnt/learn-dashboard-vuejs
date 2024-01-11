import { cookie, Cookie } from '@/utils/cookie'
import axios, { type AxiosInstance } from 'axios'

const init = (baseURL: string): AxiosInstance => {
  const defaultConfig = {
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const axiosInstance = axios.create(defaultConfig)

  axiosInstance.interceptors.request.use(async (config: any) => {
    const token = cookie.getItem(Cookie.ACCESS_TOKEN)
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  })
  return axiosInstance
}

export const apiClient = init(import.meta.env.VITE_API_URL)
