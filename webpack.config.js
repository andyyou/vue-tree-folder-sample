var path = require('path')
var merge = require('webpack-merge')

var config = {
  entry: path.join(__dirname, 'src', 'main'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
}

if (process.env.npm_lifecycle_event === 'dev') {
  config = merge(config, {
    devServer: {
      historyApiFallback: true,
      hot: false,
      inline: true,
      progress: true,
      stats: 'minimal',
      port: 3000
    }
  })
}

module.exports = config
