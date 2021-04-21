/**
 * vite总配置文件
 */
import { resolve } from "path"
// const path = require('path')
// import type { UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue'

//
const viteConfig = {
  // const viteConfig: UserConfig = {
  // 端口号(默认3000)
  // port: 3001,
  // 是否自动打开浏览器(默认false)
  // open: true,
  // 是否开启 https
  // https: false,
  // 服务端渲染
  // ssr: false,
  // 引入第三方的配置
  // optimizeDeps: {
  //     include: ["moment", "echarts", "axios", "mockjs"]
  // },
  // 生产环境路径，类似webpack的assetsPath
  // base: './',
  // 打包后目录,默认dist
  // outDir: 'www',
  // 别名配置
  resolve: {
    alias: {
      // 键必须以斜线开始和结束
      "@": resolve(__dirname, "src"),
      comps: resolve(__dirname, "src/components"),
    },
  },
  plugins: [vue()],
  // 代理配置
  server: {
    // host:'localhost',
    host: '0.0.0.0',
    port: 3000,
    open: true,
    https: false,
    proxy: {
      // '/xx': 'http://10.192.195.96:8087',
  
      "/api": {
        target: "http://172.16.100.30:80/",
        // target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  }
};

export default viteConfig;















// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import path from 'path'
// // https://vitejs.dev/config/
// export default defineConfig({
//   alias: {
//     "@": path.resolve(__dirname, "src"),
//     "comps": path.resolve(__dirname, "src/components"),
//   },
//   plugins: [vue()],
//   // devServer: {
//   //   open: false,
//   //   host: 'localhost',
//   //   port: 8080,
//   //   https: false,
//   //   hotOnly: false,
//   //   proxy: {
//   //       '/api': {
//   //           target: 'http://localhost:8083/api/',
//   //           ws: true,
//   //           changeOrigin: true,
//   //           pathRewrite: {
//   //               '^/api': ''
//   //           }
//   //       }
//   //   },
//   //   before: app => {}
//   // }
// })
