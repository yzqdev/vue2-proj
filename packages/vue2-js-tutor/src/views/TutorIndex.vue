<template>
  <div><Tabs></Tabs><ShopsList></ShopsList><TodoTList></TodoTList></div>
</template>

<script>
import Tabs from "@/components/tutor/Tabs";
import ShopsList from "@/components/tutor/ShopsList";
import TodoTList from "components/tutor/TodoTList";
export default {
  name: "TutorIndex",
  components: { TodoTList, ShopsList, Tabs },
  props: [],
  data() {
    return {
      name: "",
    };
  },
  mounted() {
    this.function();
  },
  methods: {
    function() {},
  },
};
</script>

<style scoped></style>
