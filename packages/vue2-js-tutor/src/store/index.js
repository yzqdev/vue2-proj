import Vue from "vue";
import Vuex from "vuex";
import { mutations, STORAGE_KEY } from "./mutation-types.js";
import Dogs from "@/store/modules/dogs";
import Todos from "@/store/modules/todos";
import productlist from "@/store/modules/productlist";
import cart from "@/store/modules/cart";
import Counter from "@/store/modules/counter";
import search from "@/store/modules/search";
import SearchGroup from "@/store/modules/searchGroup";
import createLogger from "vuex/dist/logger";

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";
export default new Vuex.Store({
  modules: {
    Dogs,
    Counter,
    Todos,
    productlist,
    cart,
    search,
    SearchGroup,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
