import {defineConfig} from 'vite'
import createVuePlugin from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      vue: '@vue/compat',
      "@":'src'
    },
    extensions:['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json',".vue"]
  },

  plugins: [
    createVuePlugin({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 2
          }
        }
      }
    })
  ]
})
