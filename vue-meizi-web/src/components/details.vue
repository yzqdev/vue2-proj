<template>
  <div>
    <transition name="fade">
      <div v-show="showFlag" class="details">
        <div>
          <header class="header">
            <header class="bar bar-nav" @click="hide">
              <div class="pull-left">
                <span class="iconfont icon-left"></span>
              </div>
              <div class="title">
                {{ detailsData.publishedAt || time | formatDate }}
              </div>
            </header>
          </header>
          <v-day :data="detailsData" ref="day"></v-day>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { formatDate } from "@/common/js/date";
import BScroll from "better-scroll";
import vDay from "@/components/day";
export default {
  name: "v-details",
  props: {
    time: {
      type: String,
    },
    detailsData: {
      type: Object,
    },
  },
  data() {
    return {
      showFlag: false,
    };
  },
  created() {},
  methods: {
    show() {
      this.showFlag = true;
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$el, {
            click: true,
          });
        } else {
          this.scroll.refresh();
        }
        this.$refs.day.clearStyle();
      });
    },
    hide() {
      this.showFlag = false;
    },
  },
  filters: {
    formatDate(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
  components: {
    vDay,
  },
};
</script>

<style lang="scss">
.details {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 30;
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.details.fade-enter-active,
.details.fade-leave-active {
  transition: all 0.2s linear;
  transform: translate3d(0, 0, 0);
}
.details.fade-enter,
.details.fade-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
</style>
