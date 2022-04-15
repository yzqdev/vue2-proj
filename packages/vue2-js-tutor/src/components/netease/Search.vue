<template>
  <div>
    /* prefix-icon="el-icon-search"*/
    <el-input v-model="input" placeholder="请输入要查找的歌曲"></el-input>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      input: null,
    };
  },
  props: {},
  methods: {
    searchSongs() {
      axios
        .get(`https://music.163.com/search?keywords= ${this.input}`)
        .then((response) => {})
        .catch((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style scoped></style>
