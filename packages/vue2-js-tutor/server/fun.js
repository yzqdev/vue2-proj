let data = {
  price: 5,
  quantity: 3,
};
let p = new Proxy(data, {
  get(target, prop, receiver) {
    return Reflect.get(target, prop);
  },
  set(target, prop, value, receiver) {
    Reflect.set(target, prop, value);
  },
});

data.price = 34;
console.log(data);
