<template>
  <div>
    <nav>
      <el-menu router :default-active="$route.path" mode="horizontal">
        <el-menu-item route index="/home"> 首页 </el-menu-item>

        <el-submenu route index="/test-vue">
          <template slot="title">vue测试</template
          ><el-menu-item route index="/show-weather"> 天气 </el-menu-item>
          <el-menu-item route index="/usage">用法 </el-menu-item>
          <el-menu-item route index="/title">markdown </el-menu-item>
          <el-menu-item route index="/pictures"> 图片</el-menu-item>
        </el-submenu>
        <el-submenu index="/vuex-demo">
          <template slot="title">vuex</template>
          <el-menu-item route index="/vuex-demo/dogs">dogs</el-menu-item>
          <el-menu-item route index="/vuex-demo/products"
            >products</el-menu-item
          >
          <el-menu-item route index="/vuex-demo/search">search</el-menu-item>
          <el-menu-item route index="/vuex-demo/counter">counter</el-menu-item>
          <el-menu-item route index="/vuex-demo/student-view"
            >student</el-menu-item
          >
          <el-menu-item route index="/vuex-demo/todo">todo</el-menu-item>
        </el-submenu>

        <el-menu-item route index="/about"> 关于 </el-menu-item>
        <el-menu-item route index="/tutor"> 教程 </el-menu-item>
        <el-menu-item route index="/vue"> 教程 </el-menu-item>
      </el-menu>
      <!-- 路由出口 -->
      <!-- 路由匹配到的组件将渲染在这里 -->
      <div class="container"><router-view></router-view></div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Index",
};
</script>

<style scoped></style>
