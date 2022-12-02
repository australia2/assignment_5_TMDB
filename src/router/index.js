import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import LoginPage from "../views/LoginPage.vue";
import Purchase from "../views/Purchase.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/loginPage',
      component: LoginPage
    },
    {
      path: '/purchase',
      component: Purchase
    },
  ],
});

export default router;