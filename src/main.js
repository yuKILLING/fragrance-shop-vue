import './assets/main.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'   
import App from './App.vue'
import router from '@/router/index.js';
import PrimeVue from 'primevue/config';
const app = createApp(App)

app
.use(autoAnimatePlugin)
.use(PrimeVue)
.use(router)
.mount('#app')
