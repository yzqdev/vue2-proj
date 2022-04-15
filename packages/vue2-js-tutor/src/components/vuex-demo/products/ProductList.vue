<template>
  <div>
    <el-row :gutter="20">
      <div v-for="product in products" :key="product.id">
        <el-col :span="8">
          <el-card>
            {{ product.title }} - {{ product.price | currency }}
            <br />
            <el-button
              type="primary"
              :disabled="!product.inventory"
              @click="addProductToCart(product)"
            >
              添加到购物车
            </el-button></el-card
          >
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: mapState({
    products: (state) => state.productlist.allProducts,
  }),
  methods: mapActions("cart", ["addProductToCart"]),
  created() {
    this.$store.dispatch("productlist/getAllProducts");
  },
};
</script>
