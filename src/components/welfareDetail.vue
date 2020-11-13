<template>
  <div style="height: 100%">
    <section>
      <article>
        <span>{{ detailsData.title }}</span>
      </article>
      <article>{{ detailsData.desc }}</article>
    </section>
  </div>
</template>

<script>
import vImg from "@/components/lazyloadImg/lazyimg";
import vDetails from "@/components/details";

export default {
  data() {
    return {
      leftData: [],
      rightData: [],
      busy: false,
      page: 1,
      showLazy: false,
      pageCount: 10,
      detailsData: {},
      time: "",
    };
  },
  mounted() {
    this.loadTop();
  },
  components: {
    vImg,
    vDetails,
  },
  created() {
    let id = this.$route.params.id;
    console.log(id, "来看看扩扩");
    this.$axios.get(`/post/${id}`).then((res) => {
      this.detailsData = res.data.data;
      this.$nextTick(() => {
        this.$store.commit("UPDATE_LOADING", false);
      });
    });
  },
  methods: {
    loadTop() {
      this.$store.commit("UPDATE_LOADING", true);

      console.log(this.$axios.defaults.baseURL, "水电费第三方第三方");
      this.$axios
        .get(
          `/data/category/Girl//type/Girl/page/${this.page}/count/${this.pageCount}`
        )
        .then((res) => {
          console.log(res);
          let left = res.data.data.filter((data, i) => {
            return (i + 1) % 2 === 1;
          });
          let right = res.data.data.filter((data, i) => {
            return (i + 1) % 2 !== 1;
          });
          this.leftData = this.leftData.concat(left);
          this.rightData = this.rightData.concat(right);
          this.busy = false;
          // $nextTick() 在dom 重新渲染完后执行
          this.$nextTick(() => {
            this.$store.commit("UPDATE_LOADING", false);
          });
        });
    },
    loadMore() {
      this.busy = true;
      this.loadTop();
      this.page++;
    },
    selectDetails(id) {
      this.$store.commit("UPDATE_LOADING", true);

      this.$axios.get(`/post/${id}`).then((res) => {
        let data = res.data.data;
        console.log(data, "详细");
        this.detailsData = data;
        this.$refs.details.show();
        this.$nextTick(() => {
          this.$store.commit("UPDATE_LOADING", false);
        });
      });
    },
  },
};
</script>

<style lang="scss">

</style>
