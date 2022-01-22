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

<script setup>
import vImg from "@/components/lazyloadImg/lazyimg";
import vDetails from "@/components/details";
import {nextTick, onBeforeMount, onMounted, reactive, toRefs} from "vue";

let state=reactive({
  leftData: [],
  rightData: [],
  busy: false,
  page: 1,
  showLazy: false,
  pageCount: 10,
  detailsData: {},
  time: ""
})
let {leftData,rightData,busy,page,showLazy,pageCount,detailsData,time}=toRefs(state)

function loadTop() {
  store.commit("UPDATE_LOADING", true);

  this.$axios
      .get(
          `/data/category/Girl//type/Girl/page/${state.page}/count/${state.pageCount}`
      )
      .then((res) => {
        console.log(res);
        let left = res.data.data.filter((data, i) => {
          return (i + 1) % 2 === 1;
        });
        let right = res.data.data.filter((data, i) => {
          return (i + 1) % 2 !== 1;
        });
        state.leftData = state.leftData.concat(left);
        state.rightData = state.rightData.concat(right);
        state.busy = false;
        // $nextTick() 在dom 重新渲染完后执行
         nextTick(() => {
          store.commit("UPDATE_LOADING", false);
        });
      });
}
function loadMore() {
  state.busy = true;
   loadTop();
  state.page++;
}
function selectDetails(id) {
  store.commit("UPDATE_LOADING", true);

  this.$axios.get(`/post/${id}`).then((res) => {
    let data = res.data.data;
    console.log(data, "详细");
    state.detailsData = data;
    this.$refs.details.show();
     nextTick(() => {
      store.commit("UPDATE_LOADING", false);
    });
  });
}
onBeforeMount(() => {
  let id = this.$route.params.id;
  console.log(id, "来看看扩扩");
  this.$axios.get(`/post/${id}`).then((res) => {
    state.detailsData = res.data.data;
     nextTick(() => {
      store.commit("UPDATE_LOADING", false);
    });
  });
})
onMounted(() => {
  loadTop()
})
</script>

<style lang="scss">

</style>
