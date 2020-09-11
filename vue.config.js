const path = require('path')

const resolve = dir => {
  return path.resolve(__dirname, dir)
}

module.exports = {
  publicPath: '',

  configureWebpack: {
    resolve: {
      extensions: ['js', 'vue', 'styl', 'json'],
      alias: {
        src: resolve('src'),
        components: resolve('src/components'),
        stylus: resolve('src/assets/stylus'),
        css: resolve('src/assets/css'),
        js: resolve('src/assets/js')
      }
    }
  }
}
