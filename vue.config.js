const path = require("path");
const nodeEnv = process.env.NODE_ENV;
const resolve = dir => path.join(__dirname, dir);
// const FileManagerPlugin = require("filemanager-webpack-plugin");
const isProduction = nodeEnv === "production";
let distFolder = new Map([["development", "/"], ["production", "/meititu"]]);
module.exports = {
  // 项目部署的基础路径
  // 我们默认假设你的应用将会部署在域名的根部，
  // 比如 https://www.my-app.com/
  // 如果你的应用时部署在一个子路径下，那么你需要在这里
  // 指定子路径。比如，如果你的应用部署在
  // https://www.foobar.com/my-app/
  // 那么将这个值改为 `/my-app/`
  // publicPath: process.env.NODE_ENV === `production` ? `/` : `/dist/`,
  publicPath: distFolder.get(nodeEnv),

  // 将构建好的文件输出到哪里
  outputDir: "dist",
  // outputDir: resolve("./dist"),

  // 放置静态资源的地方 (js/css/img/font/...)
  assetsDir: "static",
  // 默认起始页文件
  indexPath: "index.html",

  // 默认在生成的静态资源文件名中包含hash以控制缓存
  filenameHashing: true,
  crossorigin: "use-credentials",
  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  // 有效的值：`ture` | `false` | `"error"`
  // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
  lintOnSave: false,

  // 使用带有浏览器内编译器的完整构建版本
  // 查阅 https://cn.vuejs.org/v2/guide/installation.html#运行时-编译器-vs-只包含运行时
  // compiler: false,

  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,

  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/webpack.md
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("components", resolve("src/components"))
      .set("assets", resolve("src/assets"))
      .set("api", resolve("src/$axios/api"))
      .set("plugins", resolve("src/plugins"));
    // .set("utils", resolve("src/utils"))
    // .set("store", resolve("src/store"))
    // .set("views", resolve("src/views"))
    // 移除 prefetch 插件
    config.plugins.delete("prefetch");
    // 移除 preload 插件
    config.plugins.delete("preload");
    config.output.chunkFilename(`js/[name].[chunkhash:8].js`);
  },
  configureWebpack: config => {
    console.log("node环境", nodeEnv);
    if (isProduction) {
      // 为生产环境修改配置...

      // config.plugins.push(
      //   new FileManagerPlugin({
      //     //初始化 filemanager-webpack-plugin 插件实例
      //     onEnd: {
      //       delete: [
      //         //首先需要删除项目根目录下的dist.zip
      //         "./dist.zip"
      //       ],
      //       archive: [
      //         //然后我们选择dist文件夹将之打包成dist.zip并放在根目录
      //         { source: "./dist", destination: "./dist.zip" }
      //       ]
      //     }
      //   })
      // );

      console.log("生产环境");
      // return {
      //   externals: {
      //     'vue': 'Vue',
      //     'vue-router': 'VueRouter',
      //     'vuex': 'vuex'
      //   }
      // }
    } else if (nodeEnv === "development") {
      // 为开发环境修改配置...
      console.log("开发环境");
    } else if (nodeEnv === "test") {
      // 为测试环境修改配置...
      console.log("测试环境");
    }
  },

  // CSS 相关选项
  css: {
    // 是否开启 CSS source map？
    sourceMap: isProduction,

    // 为预处理器的 loader 传递自定义选项。比如传递给
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    },

    // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // 这个选项不会影响 `*.vue` 文件。
    // requireModuleExtension: false
  },

  // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
  // 在多核机器下会默认开启。
  parallel: require("os").cpus().length > 1,

  // 配置 webpack-dev-server 行为。
  devServer: {
    port: 2550,
    https: false,
    hotOnly: false,
    overlay: {
      warnings: false,
      errors: false
    },
    open: true,
    proxy: {
      "/api": {
        target: "http://gank.io/api/v2/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }

  // 第三方插件的选项
  // pluginOptions: {
  //   env: {
  //     TEST: "vue.config.js-->pluginOptions.env:TEST Global Parameters"
  //   },
  //   "style-resources-loader": {
  //     preProcessor: "less",
  //     patterns: [path.resolve(__dirname, "./src/assets/less/settings.less")]
  //   }
  // }
};
