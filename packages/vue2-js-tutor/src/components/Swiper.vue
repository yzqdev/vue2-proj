<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img src="../assets/tangxin.jpg" />
    <p>hello 我的名字是{{ nickname }}</p>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    msg: String,
    nickname: {
      type: String,
      default: "糖心",
    },
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: "hello" };
      },
    },
  },
};
</script>

<style scoped></style>
