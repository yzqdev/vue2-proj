<template>
  <div class="product-list-one">
    <h2>Dog List One</h2>
    <ul>
      <li v-for="dog in dogs">
        <span class="name">{{ dog.name }}</span>
        <span class="price">${{ dog.price }}</span>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      dogs: this.$store.state.Dogs.dogs, //获取store中state的数据
    };
  },
  computed: {},
  created() {
    console.info("这里是", this.$store.state);
  },
};
</script>

<style scoped>
.product-list-one {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  padding: 10px 20px;
}
.product-list-one ul {
  padding: 0;
}
.product-list-one li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: .e8800c;
}
</style>
