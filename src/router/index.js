import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import LoginPage from "../views/LoginView.vue";
import Purchase from "../views/PurchaseView.vue"
import Policy from "../views/PolicyView.vue"

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
    {
      path: '/policy',
      component: Policy
    },
  ],
});

export default router;