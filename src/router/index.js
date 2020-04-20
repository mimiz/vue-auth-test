import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/examples",
    name: "Examples",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Examples.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Admin.vue"),
    meta: {
      requiresAuth: true,
      requiresAdmin: true
    }
  },
  {
    path: "/profile",
    name: "Profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Profile.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/error/:type",
    name: "error",
    component: () => import("../views/Error.vue"),
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters["authentication/isLogged"]) {
      if (to.matched.some(record => record.meta.requiresAdmin)) {
        if (store.getters["authentication/isAdmin"]) {
          next();
        } else {
          next({
            name: "error",
            params: { message: "forbidden" }
          });
        }
      } else {
        next();
      }
    } else {
      const loginUrl = router.app.$keycloak.createLoginUrl();
      window.location.replace(loginUrl);
    }
  } else {
    next();
  }
});

export default router;
