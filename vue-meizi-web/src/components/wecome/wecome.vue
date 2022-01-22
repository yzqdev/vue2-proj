<template>
  <div class="wecome">
    <div class="loader-inner pacman">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script>
import { savaToLocal } from "@/common/js/store";
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push({
        name: "welfare"
      });
      savaToLocal("gank", "wecome", true);
    }, 2000);
  }
};
</script>
<style lang="scss">
@import './wecome';
</style>
