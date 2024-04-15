import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Pets from "./views/Pets.vue";
import PetsDetails from "./views/PetsDetails.vue";
import MyProfile from "./views/My-profile.vue";
import Auth from "./views/Auth.vue";

import Dashboard from "./views/Admin/Dashboard.vue";
import { usePetsStore } from "../src/data.js";

const routes = [
   {
      path: "/auth",
      name: "Auth",
      component: Auth,
   },
   {
      path: "/",
      name: "Home",
      component: Home,
   },
   {
      path: "/pets",
      name: "Pets",
      component: Pets,
   },
   {
      path: "/pets/:id",
      name: "PetsDetails",
      component: PetsDetails,
      props: true,
   },
   {
      path: "/myProfile",
      name: "MyProfile",
      component: MyProfile,
      meta: { requiresAuth: true },
   },
   {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      meta: { requiresAuth: true },
   },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});
// Navigation guard to check if route requires authentication
router.beforeEach((to, from, next) => {
   const petsStore = usePetsStore();

   if (to.meta.requiresAuth && !petsStore.isAuthenticated) {
      // Redirect to login page if user is not authenticated
      next("/auth");
   } else {
      // Proceed to the next route
      next();
   }
});
export default router;
