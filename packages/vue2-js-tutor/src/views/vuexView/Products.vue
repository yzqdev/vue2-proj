<template>
  <div id="app">
    <div class="container">
      <h1>vuex 购物车实例</h1>
      <hr />
      <h2>产品</h2>
      <ProductList />
      <hr />
      <ShoppingCart />
    </div>
  </div>
</template>

<script>
import ProductList from "components/vuex-demo/products/ProductList.vue";
import ShoppingCart from "components/vuex-demo/products/ShoppingCart.vue";

export default {
  name: "Products",
  components: { ProductList, ShoppingCart },
};
</script>
<style scoped>
.container {
  margin: 0 5%;
}
</style>
