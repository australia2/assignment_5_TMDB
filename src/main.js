import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router/index.js';
const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount('#app');
app.use(router).mount('#mount');