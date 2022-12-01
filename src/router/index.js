import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import LoginPage from "../views/LoginPage.vue";
import Account from "../views/Account.vue"

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
      path: '/account',
      component: Account
    },
  ],
});

export default router;