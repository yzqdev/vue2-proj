<template>
  <div>
    <DogListOne></DogListOne>
    <DogListTwo></DogListTwo>
  </div>
</template>
<script>
import DogListOne from "components/vuex-demo/dogs/DogListOne.vue";
import DogListTwo from "components/vuex-demo/dogs/DogListTwo.vue";

export default {
  name: "app",
  components: {
    DogListOne,
    DogListTwo,
  },
  data() {
    return {};
  },
};
</script>
