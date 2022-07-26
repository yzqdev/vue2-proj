import Vue from "vue";
import App from "./App.vue";
import router from "@/router";

import './plugins/vant'


import {Dialog} from 'vant'
Vue.use(Dialog)
import axios from './plugins/request/http'

Vue.config.productionTip = false;
Vue.prototype.$axios=axios
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
