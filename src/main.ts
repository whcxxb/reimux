import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'
// import '@unocss/reset/tailwind-compat.css'
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
