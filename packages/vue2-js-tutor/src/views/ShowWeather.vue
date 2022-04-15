<template>
  <div>
    <Bigtitle msg="这里是测试啊"></Bigtitle>
    <Weather></Weather>
  </div>
</template>
<script>
import Bigtitle from "@/components/BigTitle";
import Weather from "@/components/Weather";
export default {
  components: { Weather, Bigtitle },
  data() {
    return {
      showModal: false,
    };
  },
  props: [],
};
</script>
