const appBasePath = '/Jungo'
const distAppPath = '/wwwroot/dist'
// const path = require('path')

module.exports = {
  lintOnSave: true,
  filenameHashing: false,
  publicPath: process.env.NODE_ENV === 'production' ? appBasePath + '/dist/' : '/',
  outputDir: '..' + distAppPath,
  devServer: {
    port: 8081,
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  chainWebpack: config => {
    if (config.plugins.has('extract-css')) {
      const extractCSSPlugin = config.plugin('extract-css')
      extractCSSPlugin && extractCSSPlugin.tap(() => [{
        filename: 'css/[name].css',
        chunkFilename: 'css/[name].css'
      }])
    }
  },
  configureWebpack: {
    devtool: 'source-map',
    output: {
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].js'
    }
  }
}
