import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/app/Home.vue";
import Data from "@/views/data/Data.vue";

Vue.use(Router);

export default new Router({

  routes: [
    {
      path: "/",
      name: "index",
      component: Home,
    },
    {
      path: "/data",
      name: "data-home",
      component: Home,
    },
    {
      path: "/data/:user",
      name: "data",
      component: Data,
    },
  ],
});
