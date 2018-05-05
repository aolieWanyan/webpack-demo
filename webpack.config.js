const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: './',
    filename: 'static/js/[name].[hash].js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    host: 'localhost',
    port: 8089,
    hot: true
  },
  module: {
    rules: [
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: './static/img/[name].[hash:7].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'webpack-demo'
    })
  ]
}