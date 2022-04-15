import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import MyTitle from "@/views/Edit";
import Usage from "@/views/Usage";
import NeteaseMusic from "@/views/NeteaseMusic";
import Pictures from "@/components/Pictures";
import TestVue from "@/views/Question";
import StudentView from "@/components/StudentsView";
import Dogs from "@/views/vuexView/Dogs";
import Products from "@/views/vuexView/Products";
import SearchView from "@/components/vuex-demo/search/SearchView";
import Index from "@/views/Index";
import TodoView from "@/views/vuexView/TodoView";
import Tabs from "@/components/tutor/Tabs";
import TutorIndex from "@/views/TutorIndex";
import VueTricks from "@/views/VueTricks";

Vue.use(Router);

// 定义动态路由
// 定义动态路由

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,

  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
  routes: [
    {
      path: "/netease",
      name: "netease",
      component: NeteaseMusic,
    },

    {
      path: "/",
      component: Index,
      children: [
        {
          path: "/home",
          name: "home",
          component: Home,
        },
        {
          path: "/vue",
          name: "vue",
          component: VueTricks,
        },
        {
          path: "/about",
          name: "about",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component() {
            return import(/* webpackChunkName: "about" */ "@/views/About.vue");
          },
        },
        {
          path: "/title",
          name: "MyTitle",

          component() {
            return import(/*webpackChunkName:"MyTitle" */ "@/views/Edit.vue");
          },
        },
        {
          path: "/show-weather",
          name: "ShowWeather",

          component() {
            return import(
              /*webpackChunkName:"MyTitle" */ "@/views/ShowWeather.vue"
            );
          },
        },
        {
          path: "/usage",
          name: "Usage",
          component: Usage,
        },
        {
          path: "/tutor",
          name: "tutor",
          component: TutorIndex,
        },
        {
          path: "/pictures",
          name: "Pictures",
          component: Pictures,
        },
        {
          path: "/test-vue",
          name: "TestVue",
          component: TestVue,
        },
        {
          path: "/vuex-demo/student-view",
          name: "StudentView",
          component: StudentView,
        },
        {
          path: "/vuex-demo/todo",
          name: "Todo",
          component: TodoView,
        },
        {
          path: "/vuex-demo/dogs",
          name: "dogs",
          component: Dogs,
        },
        {
          path: "/vuex-demo/products",
          name: "products",
          component: Products,
        },
        {
          path: "/vuex-demo/search",
          name: "search",
          component: SearchView,
        },
      ],
    },
  ],
});
