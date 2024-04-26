const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  devServer:{
    port:8100,
    proxy: {
      //配置跨域
      "/api": { //url识别符
        target: "http://localhost:8080", // server地址
        changOrigin: true, //允许跨域
        pathRewrite: {
          /* 重写路径，当我们在浏览器中(f12->network中)看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时
            实际上访问的地址是：http://23.43.222.12:8080/core/getData/userInfo,因为重写了 /api
           */
          "^/api": "",
        },
      },
    },
  }

})

