const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PurifyCssWebpack = require('purifycss-webpack')
const glob = require('glob')

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'static/js/[name].[hash].js'
  },
  devServer: {
    // contentBase: path.resolve(__dirname, './dist'),
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
          use: [
            { loader: 'css-loader' },
            { loader: 'postcss-loader' }
          ],
          publicPath: '../../'
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader' },
            { loader: 'less-loader' },
            { loader: 'postcss-loader' }
          ],
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
      title: 'webpack-demo',
    }),
    new ExtractTextPlugin('static/css/style.css'),
    new PurifyCssWebpack({
      paths: glob.sync(path.join(__dirname, './index.html')),
    })
  ]
}