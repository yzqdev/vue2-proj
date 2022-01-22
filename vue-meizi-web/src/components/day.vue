<template>
  <div class="day bounceInRight" rel="dom">
    <h1>{{ data.title }}</h1>
    <div v-html="data.content"></div>
    <img class="day-img" :src="data.url" />

    <article>
      <span>发布日期:{{data.publishedAt}}</span>
    </article>
  </div>
</template>

<script>
import vImg from "@/components/lazyloadImg/lazyimg";
export default {
  name: "v-day",
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      content: false,
    };
  },
  components: {
    vImg,
  },
  created() {
    this.clearStyle();
  },
  methods: {
    clearStyle() {
      this.$nextTick(() => {
        var tags = this.$el.getElementsByTagName("img");
        for (let i = 0; i < tags.length; i++) {
          tags[i].removeAttribute("style");
        }
      });
    },
  },
};
</script>
<style lang="scss">
.day {
  padding: 50px 10px 20px 10px;
.day-img{
  width: 100%;
}
  ul img,
  h2,
  p:nth-last-child(2),
  p:nth-last-child(1),
  [target="_blank"] img,
  embed {
    display: none;
  }
  h1 {
    text-align: left;
    font-weight: 700;
    font-size: 16px;
    line-height: 32px;
    margin: 10px 0;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: normal !important;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  h3 {
    color: #000;
    text-align: left;
    padding: 10px 0;
    font-size: 16px;
    font-weight: 700;
  }
  ul {
    color: #000;
    text-align: left;
    padding-left: 10px;
    font-size: 14px;
    font-weight: 400;
    li {
      line-height: 20px;
      padding: 5px 0;
      -webkit-animation-name: bounceInRight;
      animation-name: bounceInRight;
    }
  }
  p {
    font-size: 0;
    img {
      width: 100%;
    }
  }
}


</style>
