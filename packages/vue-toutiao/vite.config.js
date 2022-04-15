// vite.config.js
const resolve = path.resolve;
import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
const { injectHtml } = require("vite-plugin-html");
import { genScssOptions, genHtmlOptions } from "./config";
import path from "path";
export default defineConfig({
  plugins: [
    createVuePlugin(/*options*/),
    injectHtml({
      injectData: genHtmlOptions("vite"),
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve('src/assets/less/color.less')}";`,
        },
        javascriptEnabled: true,
      }
    }

    // preprocessorOptions: {
    //   scss: genScssOptions("vite"),
    // },
  },
  hmr: { overlay: false },
  resolve: {
    //导入时想要省略的扩展名列表。注意，不 建议忽略自定义导入类型的扩展名（例如：.vue），因为它会干扰 IDE 和类型支持。
    alias: [
      { find: "@", replacement: resolve(__dirname, "./src") },
      { find: "@views", replacement: resolve(__dirname, "./src/views") },
      {
        find: "components",
        replacement: path.resolve(__dirname, "./src/components"),
      },
      { find: "@utils", replacement: path.resolve(__dirname, "./src/utils") },
    ],
  },
  build: {
    // sourcemap: true,
    minify: false,
  },
  server: {
    port: 3500,
  },
});

// 这里的 options 可配置 vueTemplateOptions， jsx
// 详情查看 https://github.com/underfin/vite-plugin-vue2
