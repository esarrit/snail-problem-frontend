import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

/**
 * This is the entry point for the Vue app. It initializes the main component 
 * and specifies the router for the app. 
 */

const app = createApp(App)

app.use(router)

app.mount('#app')
