import Vue from "vue";
import Router from "vue-router";
import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";
Vue.use(Router);

export default new Router({
  mode: "history",
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "main",
      component: AuthLayout,
      children: [
        {
          path: "/",
          name: "default",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Default.vue")
        },
        {
          path: "/register",
          name: "register",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Register.vue")
        }
      ]
    },
    {
      path: "/",
      component: DashboardLayout,
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Dashboard.vue")
        },
        {
          path: "/icons",
          name: "icons",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Icons.vue")
        },
        {
          path: "/profile",
          name: "profile",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/UserProfile.vue")
        },
        {
          path: "/maps",
          name: "maps",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Maps.vue")
        },
        {
          path: "/tables",
          name: "tables",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Tables.vue")
        }
      ]
    }
  ]
});
