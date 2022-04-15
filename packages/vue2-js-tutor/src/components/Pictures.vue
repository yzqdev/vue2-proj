<template>
  <div class="container">
    <el-image v-for="(url, index) in urls" :key="index" :src="url"> </el-image>
  </div>
</template>

<script>
export default {
  name: "Pictures",
  data() {
    return {
      urls: [
        require("../assets/庄周.jpg"),
        require("../assets/王昭君.jpg"),
        require("../assets/露娜.jpg"),
      ],
      srcList: [
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
      ],
      pic1: [
        "../assets/庄周.jpg",
        "../assets/王昭君.jpg",
        "../assets/露娜.jpg",
      ],
    };
  },
};
</script>

<style scoped>
.container {
  margin: 0 100px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
</style>
