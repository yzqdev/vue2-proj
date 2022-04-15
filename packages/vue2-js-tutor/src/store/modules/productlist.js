import shop from "@/api/shop";

// initial state
const state = {
  allProducts: [],
};

// getters
const getters = {};

// actions
const actions = {
  getAllProducts({ commit }) {
    shop.getProducts((products) => {
      commit("setProducts", products);
    });
  },
};

// mutations
const mutations = {
  setProducts(state, products) {
    state.allProducts = products;
  },

  decrementProductInventory(state, { id }) {
    const product = state.allProducts.find((product) => product.id === id);
    product.inventory--;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
