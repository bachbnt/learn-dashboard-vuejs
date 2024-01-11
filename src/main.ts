import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import 'vue3-toastify/dist/index.css'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(Vue3Toastify, {
  autoClose: 3000
} as ToastContainerOptions)

app.mount('#app')
