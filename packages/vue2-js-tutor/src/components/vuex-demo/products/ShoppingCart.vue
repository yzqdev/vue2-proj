<template>
  <div class="cart">
    <h2>购物车</h2>
    <p v-show="!products.length"><i>添加到购物车.</i></p>
    <div v-for="product in products" :key="product.id">
      <el-tag>
        {{ product.title }} - {{ product.price | currency }} x
        {{ product.quantity }}</el-tag
      >
    </div>
    <p>总计: {{ total | currency }}</p>
    <p>
      <el-button
        type="success"
        :disabled="!products.length"
        @click="checkout(products)"
        >清零</el-button
      >
    </p>
    <p v-show="checkoutStatus">清零成功 {{ checkoutStatus }}.</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      checkoutStatus: (state) => state.cart.checkoutStatus,
    }),
    ...mapGetters("cart", {
      products: "cartProducts",
      total: "cartTotalPrice",
    }),
  },
  methods: {
    checkout(products) {
      this.$store.dispatch("cart/checkout", products);
    },
  },
};
</script>
