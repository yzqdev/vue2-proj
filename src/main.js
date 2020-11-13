import Vue from "vue";
import store from "./store/store";
import App from "./App";
import axios from "./plugins/request/http";
import './plugins/element'
import router from "./router"; // 引入路由配置
import infiniteScroll from "vue-infinite-scroll"; // 引入滑动模块
import VueLazyload from "vue-lazyload"; // 引入图片懒加载模块
import { loadFromlLocal } from "./common/js/store"; // 公共方法：本地缓存
import "./common/css/index.scss"; // 引入公共样式
import vuetify from '@/plugins/vuetify'
// 注册组件
Vue.use(infiniteScroll);
Vue.prototype.$axios=axios

// error，loading是图片路径, 用require引入
Vue.use(VueLazyload, {
  error: require("./assets/404.png"),
  loading: require("./assets/loading.gif"),
  attempt: 1
});
// const routers = new VueRouter({
//   linkActiveClass: "active",
//   router // （缩写）相当于 routes: routes
// });
/**
 * loadFromlLocal()是读取本地缓存数据，具体common/js/store.js 查看
 *
 *
 */
if (!loadFromlLocal("gank", "wecome", false)) {
  router.push("/wecome");
}

/**
 * 创建和挂载根实例。
 * 记得要通过 router 配置参数注入路由，
 * 从而让整个应用都有路由功能
 */
new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
