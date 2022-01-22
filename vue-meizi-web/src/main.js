 import {createApp} from "vue";
 import store from "./store/store";
import App from "./App";
import axios from "./plugins/request/http";
import router from "./router"; // 引入路由配置
  // 引入图片懒加载模块
import { loadFromlLocal } from "./common/js/store"; // 公共方法：本地缓存
import "./common/css/index.scss"; // 引入公共样式
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
 const app=createApp(App)
// 注册组件
app.config.globalProperties.$axios=axios

 app.use(Vuetify)
if (!loadFromlLocal("gank", "wecome", false)) {
  router.push("/wecome");
}
app.use(router)
/**
 * 创建和挂载根实例。
 * 记得要通过 router 配置参数注入路由，
 * 从而让整个应用都有路由功能
 */
 app.mount("#app")
