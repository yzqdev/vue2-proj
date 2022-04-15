<template>
  <div>
    <h2>这里是走马灯</h2>
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="(item, index) in pics" :key="index">
        <img :src="item.url" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pics: [
        { url: require("../assets/庄周.jpg") },
        { url: require("../assets/王昭君.jpg") },
        { url: require("../assets/露娜.jpg") },
      ],
    };
  },
  props: [],
};
</script>
<style scoped></style>
