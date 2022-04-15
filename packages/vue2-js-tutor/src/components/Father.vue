<template>
  <div>
    <Child ref="child" width="400" height="500"></Child>
    <el-button>点击我</el-button>
  </div>
</template>

<script>
import Child from "components/Child";
export default {
  name: "Father",
  components: { Child },
  // 对象
  props: {},

  data() {
    return {
      name: "",
    };
  },
  watch: {},
  mounted() {
    this.function();
  },
  methods: {
    function() {
      console.info("子组件");
      console.log(this.$refs.child);
      console.log(this.$attrs);
    },
  },
};
</script>

<style scoped></style>
