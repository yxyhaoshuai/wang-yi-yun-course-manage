const { defineConfig } = require('@vue/cli-service')

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
})