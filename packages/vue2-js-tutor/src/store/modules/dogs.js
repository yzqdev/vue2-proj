const state = {
  dogs: [
    { name: "鼠标", price: 20 },
    { name: "键盘", price: 40 },
    { name: "耳机", price: 60 },
    { name: "显示屏", price: 80 },
  ],
};
const getters = {
  saleDogs: (state) => {
    return state.dogs.map((dog) => {
      return {
        name: dog.name,
        price: dog.price / 2,
      };
    });
  },
};
const mutations = {
  minusPrice(state) {
    let newPrice = state.dogs.forEach((dog) => {
      dog.price -= 2;
    });
  },
  plusPrice: (state) => {
    let newPrice = state.dogs.forEach((dog) => {
      dog.price += 2;
    });
  },
};
const actions = {
  minusPriceAsync(context, payload) {
    setTimeout(() => {
      context.commit("minusPrice", payload); //context提交
    }, 2000);
  },
};

export default { state, getters, actions, mutations };
