<template>
  <div>
    <v-header></v-header>
    <loading :show="getLoadingShow"></loading>
    <router-view></router-view>
  </div>
</template>

<script>
import vMenu from "@/components/menu";
import vHeader from "@/components/Vheader";
import loading from "@/components/loading/loading.vue";
import {mapGetters, mapState} from "vuex";
export default {
  name: "Index",
  components: {
    vMenu,
    vHeader,
    loading
  },
  data() {
    return { firstShow: true, show: false };
  },
  computed: {
    ...mapGetters(['getLoadingShow'])
  },
  methods: {
    isShow() {
      this.show = !this.show;
    },
    hideDetail() {
      this.detailShow = false;
    }
  }
};
</script>

<style scoped></style>
