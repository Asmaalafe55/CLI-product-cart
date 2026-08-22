import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from './i18n'
import { createStore } from './store'

import './assets/styles/app.scss'

const app = createApp(App)
const i18n = createI18n()
const store = createStore()

app.config.globalProperties.$t = i18n.t
app.config.globalProperties.$i18n = i18n
app.config.globalProperties.$store = store

app.provide('i18n', i18n)
app.provide('store', store)

app.use(router)
app.mount('#app')
