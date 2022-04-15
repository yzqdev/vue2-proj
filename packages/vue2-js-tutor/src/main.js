import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import currency from "./utils/currency";
import axios from "./plugins/request/http";
Vue.prototype.$axios = axios;
Vue.filter("currency", currency);
import "./plugins/element.js";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
