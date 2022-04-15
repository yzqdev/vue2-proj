<template>
  <div class="container">
    <h1 v-html="msg"></h1>
    <el-input
      v-model="itemNew"
      placeholder="请输入内容"
      class="input-todo"
      size="medium"
      v-on:keyup.enter.native="addNew"
    ></el-input>
    <el-divider></el-divider>
    <div>
      <el-tag
        class="tags"
        @click="turnRed(item)"
        closable
        :class="{ isStudent: item.student }"
        v-for="(item, index) in items"
        :key="index"
        :type="item.type"
        @close="handleClose(item)"
      >
        {{ item.name }}
      </el-tag>
    </div>
  </div>
</template>
<script>
//使用ES6特性引入 localstorage 储存脚本，命名为 Storage
import Storage from "plugins/sessionStorage";

//引入 Hello.vue 组件，命名为 Hello
//ES6语法，相当于
//new Vue({})
export default {
  name: "StudentView", //name属性作为组件名称，全局 ID 自动作为组件的 name
  data() {
    return {
      msg: "输入数据并按下enter键",
      items: Storage.getSession(), //获取存在 storage 里面的键值对
      itemNew: "",
      index: 1,
    };
  },
  components: {
    //在#app元素内，注册组件
    //Hello
  },
  methods: {
    turnRed(item) {
      //逆反布尔值
      item.student = !item.student;
    },
    addNew() {
      let tagTypeObj = [``, `danger`, `success`, `info`, `warning`];
      let randomNum = Math.floor(Math.random() * 4);
      this.items.push({
        index: this.index + 1,
        name: this.itemNew,
        student: false,
        type: tagTypeObj[randomNum],
      });

      //清空文本栏
      this.itemNew = null;
    },
    handleClose(item) {
      this.items.splice(this.items.indexOf(item), 1);
    },
  },
  watch: {
    items: {
      handler(items) {
        Storage.setSession(items); //监控li变化，将新增的值存入 sessionStorage 里
      }, //sessionStorage 里的数据将在页面关闭后删除
      deep: true, //深度监视，只要 items 有一点改变就会触发回调函数handler
    },
  },
};
</script>

<style>
.isStudent {
  background-color: red;
  color: red;
  font-size: 3em;
}

.input-todo {
  width: 400px;
}

.tags {
  margin-right: 30px;
}
</style>
