import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home/index.vue"
import OrderTracking from "@/views/OrderTracking/index.vue"
import Test from "@/views/Test/index.vue"
import Page404 from "@/views/404.vue"

const routes = [
  {
    path: "",
    name: "Home",
    component: Home,
  },
  {
    path: "/track/:orderId(\\w+)",
    name: "OrderTracking",
    component: OrderTracking,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
  {
    path: "/404",
    name: 'PageNotExist',
    component: Page404,
    hidden: true,
  },
  { path: "/:catchAll(.*)", redirect: "/404", hidden: true },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
