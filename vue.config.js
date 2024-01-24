const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/final-task/'
    : '/'
};
module.exports = { 
  css: { 
    loaderOptions: { 
      scss: { 
        additionalData: `@import "~@/styles/_vars.scss";` 
      }, 

    } 
  } 
}
