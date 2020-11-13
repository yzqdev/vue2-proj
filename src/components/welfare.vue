<template>
  <div class="welfare-wrapper" ref="wrapper">
    <div class="welfare-center">
      <figure
        v-show="dataList.length > 0"
        v-for="data in dataList"
        @click="selectDetails(data._id)"
      >
        <v-img :imgUrl="data.url"></v-img>
      </figure>
      <v-btn @click="loadMore">惦记我啊</v-btn>
    </div>
  </div>
</template>

<script>
import { objectDate } from "@/common/js/date";
import vImg from "@/components/lazyloadImg/lazyimg";
import vDetails from "@/components/details";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      dataList: [],
      scroll: "",
      busy: false,
      page: 1,
      pageCount: 50,
      detailsData: {},
      time: "",
    };
  },
  mounted() {
    let that=this
    window.onscroll = function () {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      //变量windowHeight是可视区的高度
      var clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      //滚动条到底部的条件
      console.log(scrollTop,clientHeight,scrollHeight)
      if (scrollHeight > clientHeight && scrollTop + clientHeight === scrollHeight) {
console.log('到底了')
        that.loadMore()
      }
    };
    this.loadTop();
  },
  components: {
    vImg,
    vDetails,
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
          console.log(res, "获取列表信息");
          this.dataList.push(...res.data.data);

          this.busy = false;
          // $nextTick() 在dom 重新渲染完后执行
          this.$nextTick(() => {

            this.$store.commit("UPDATE_LOADING", false);
          });
        });
    },
    loadMore() {
      this.page++;
      this.loadTop();

    },
    selectDetails(id) {
      this.$store.commit("UPDATE_LOADING", true);
      this.$router.push("/welfare-detail/" + id);
    },
  },
};
</script>

<style lang="scss">
.welfare-wrapper {
  display: flex;
  overflow: scroll;
  .welfare-center {
    width: 100%;

    max-width: 1100px;
    figure {
      width: 95%;
      background: #fefefe;
      border: 2px solid #fcfcfc;
      box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
      margin: 0 2px 15px;
      display: inline-block;
      z-index: 11;
      img {
        width: 100%;
        height: auto;
      }
      figcaption {
        font-size: 0.9rem;
        color: #444;
        line-height: 1.5;
      }
    }
  }
}
</style>
