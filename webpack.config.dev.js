'use strict';

var config            = require('./src/config')
var webpack           = require('webpack')
var path              = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var outputDir = path.join(__dirname, 'dist')

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/entry.js'
  ],
  output: {
    path:       path.join(__dirname, 'dist'),
    filename:   config.baseName + '/bundle.js',
  },
  module: {
    loaders: [
      {
        test:   /\.js/,
        loader: 'babel',
        include: __dirname + '/src'
      },
      {
        test:   /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test:   /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    hot: true,
    inline: true,
    contentBase: outputDir,
    historyApiFallback: {
      index: '/'
    },
    stats: {
      chunks: false
    }
  },
};
