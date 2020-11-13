<template>
  <div></div>
</template>

<script>
export default {
  name: "Today",
  props: [],
  data() {
    return {
      name: ""
    };
  },
  watch() {},
  mounted() {
    this.getToday();
  },
  methods: {
    getToday() {
      this.$axios.get("/today").then(res => {
        console.log(res.data);
      });
    }
  }
};
</script>

<style scoped></style>
