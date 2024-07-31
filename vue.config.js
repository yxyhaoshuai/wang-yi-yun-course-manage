const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        // 使用 `additionalData` 替代 `prependData`
        additionalData: `@import "@/style/theme.less";`
      }
    }
  },
  devServer: {
    port: 3002, // 端口号
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(true) // 或者 false, 取决于你需要的配置
      })
    ]
  }
});
