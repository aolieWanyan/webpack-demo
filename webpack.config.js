const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: './src/main.js',
    app2: './src/main2.js'
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
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
          publicPath: '../../'
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            outputPath: 'static/img',
            name: '[name].[hash:7].[ext]'
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
      filename: 'index.html',
      title: 'webpack-demo',
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      template: './index2.html',
      filename: 'index2.html',
      title: 'webpack-demo2',
      chunks: ['app2']
    }),
    new ExtractTextPlugin('static/css/style.css')
  ]
}