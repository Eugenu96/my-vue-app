import { createApp } from 'vue'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/scss/bootstrap.scss'
import './style.css'
import App from './App.vue'

import router from './router'
import { createPinia } from 'pinia'
import axios from 'axios'

const pinia = createPinia();

axios.defaults.baseURL = 'http://127.0.0.1:8000'

createApp(App).use(router, axios, pinia).mount('#app')
