import './assets/main.css'

import { createApp } from 'vue'
import App from '@/views/home/home.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router/index.js";

createApp(App).use(ElementPlus).use(router).mount('#app')
