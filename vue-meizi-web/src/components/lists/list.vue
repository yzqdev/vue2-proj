<template>
  <div
    class="list"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="100"
  >
    <a v-for="data in datas" :href="data.url" target="view_window">
      <v-card :data="data"></v-card>
    </a>
  </div>
</template>

<script>
import vCard from "../card.vue";
export default {
  name: "v-list",
  props: {
    type: {
      type: String
    }
  },
  data() {
    return {
      datas: [],
      page: 1,
      busy: false
    };
  },
  computed: {},
  methods: {
    loadTop() {
      store.commit("UPDATE_LOADING", true);
      this.$axios
        .get(`/data/category/GanHuo/type/${this.type}/page/${this.page}/count/10`)
        .then(res => {
          this.datas = this.datas.concat(res.data.data);
          this.busy = false;
          this.$nextTick(() => {
            store.commit("UPDATE_LOADING", false);
          });
        });
    },
    loadMore() {
      this.busy = true;
      this.loadTop();
      this.page++;
    }
  },
  components: {
    vCard
  }
};
</script>
<style >
.list {
  padding: 15px;
}
</style>
