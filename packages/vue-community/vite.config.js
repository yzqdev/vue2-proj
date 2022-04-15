// vite.config.js
const resolve = path.resolve;
import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";

import { createHtmlPlugin } from 'vite-plugin-html'
import { genScssOptions } from "./config";
import path from "path";
export default defineConfig({
  plugins: [
    createVuePlugin(/*options*/),

  ],
  css: {
    preprocessorOptions: {
      scss: genScssOptions("vite"),
    },
  },
  resolve: {
    //导入时想要省略的扩展名列表。注意，不 建议忽略自定义导入类型的扩展名（例如：.vue），因为它会干扰 IDE 和类型支持。
    alias: [
      { find: "@", replacement: resolve(__dirname, "./src") },
      { find: "@views", replacement: resolve(__dirname, "./src/views") },
      {
        find: "@components",
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
    port: 3600,
    proxy: {
      '/api': {
        // target: 'http://localhost:1500',
        target: 'https://vue-js.com/api/v1/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
});

// 这里的 options 可配置 vueTemplateOptions， jsx
// 详情查看 https://github.com/underfin/vite-plugin-vue2
