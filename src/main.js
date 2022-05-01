import { createApp } from 'vue'
import { createPinia } from 'pinia'
import components from '@/plugins/components.js'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(components)
app.mount('#app')
