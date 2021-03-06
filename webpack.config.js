'use strict';

var webpack           = require('webpack');
var path              = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

var outputDir = path.join(__dirname, 'dist')

module.exports = {
  devtool: 'source-map',
  entry: [ './src/entry.js' ],
  output: {
    path:     path.join(__dirname, 'dist'),
    filename: 'js/bundle-[hash].js',
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
        test: /\.(jpe?g|gif|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};
