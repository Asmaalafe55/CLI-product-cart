const { defineConfig } = require('@vue/cli-service')

// Project site URL: https://asmaalafe55.github.io/CLI-product-cart/
const repoName = 'CLI-product-cart'

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/'
})
