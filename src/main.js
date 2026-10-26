import { createMemoryHistory, createRouter } from "vue-router"
import { createApp } from 'vue'
import App from './App.vue'
import Home from "./pages/home/home.vue";
import Details from "./pages/details/details.vue";
import './global.css'

const routes = [
  {path: "/", component: Home},
  {path: "/details", component: Details}
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes
});

createApp(App).use(router).mount('#app');
