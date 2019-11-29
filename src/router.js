import Vue from "vue";
import Router from "vue-router";

import Layout from "./pages/Layout";
import Main from "./pages/Main";
import About from "./pages/About";
import Project from "./pages/Project";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        component: Main
      },
      {
        path: "/about",
        component: About
      },
      {
        path: "/project/:id",
        component: Project
      }
    ]
  }
];

const router = new Router({
  // mode:'history',
  routes
});

export default router;
