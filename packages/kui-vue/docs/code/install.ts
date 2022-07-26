let code = {}

code.install = `$ npm install kui-vue --save`

code.import = `<!-- import Vue.js -->
<script src="//vuejs.org/js/vue.min.js"><\/script>
<!-- import stylesheet -->
<link rel="stylesheet" href="//unpkg.com/kui-vue/dist/k-ui.css">
<!-- import kui -->
<script src="//unpkg.com/kui-vue/dist/k-ui.js"><\/script>`

code.demo = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>kui example</title>
  <link rel="stylesheet" type="text/css" href="http://unpkg.com/kui-vue/dist/k-ui.css">
  <script type="text/javascript" src="http://vuejs.org/js/vue.min.js"><\/script>
  <script type="text/javascript" src="http://unpkg.com/kui-vue/dist/k-ui.js"><\/script>
</head>
<body>
<div id="app">
  <k-button @click="show">Click me!</k-button>
  <Modal v-model="visible" title="Welcome">Welcome to use kui</Modal>
</div>
<script>
  new Vue({
    el: '#app',
    data: {
      visible: false
    },
    methods: {
      show: function () {
        this.visible = true;
      }
    }
  })
  <\/script>
</body>
</html>`

export default code