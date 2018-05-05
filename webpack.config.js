const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './js/[name].bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    host: 'localhost',
    port: 8089,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'webpack-demo'
    })
  ]
}