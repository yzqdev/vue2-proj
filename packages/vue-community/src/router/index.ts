import Vue from "vue";
import Router from "vue-router";
const Home = () => import("@/views/Home.vue");
const content = () => import("@/views/Content.vue");
const user = () => import("@/views/User.vue");
const login = () => import("@/views/Login.vue");
const publish = () => import("@/views/Publish.vue");
const personal = () => import("@/views/Personal.vue");
const message = () => import("@/views/Message.vue");
const test = () => import("@/views/test.vue");
const Error404=() => import('@/views/error/Error404.vue')
Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      console.log(savedPosition);
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "*",
      name: "404",
      meta: { title: "404页面" },
      component: Error404
    },
    {
      path: "/test",
      name: "test",
      component: test
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/content",
      name: "content",
      component: content
    },
    {
      path: "/index",
      name: "index",
      component: content
    },
    {
      path: "/user",
      name: "user",
      component: user
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/publish",
      name: "publish",
      component: publish
    },
    {
      path: "/personal",
      name: "personal",
      component: personal
    },
    {
      path: "/message",
      name: "message",
      component: message
    }
  ]
});
