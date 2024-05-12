import { createRouter, createWebHistory } from "vue-router";
import MasterLayout from "../layouts/Master.vue";
import HomeView from "../views/Home.vue";

const routes = [
  {
    path: "/",
    component: MasterLayout,
    children: [
      {
        path: "/Home",
        component: HomeView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;