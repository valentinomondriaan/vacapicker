import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router'
import { createPinia } from 'pinia'
// import "bootstrap-icons/font/bootstrap-icons.css";

createApp(App).use(createPinia()).use(createPinia()).use(router).use(router).mount('#app')
