'use strict';

var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './app/entry.js'
  ],
  output: {
    path:     __dirname + '/dist/js',
    filename: "bundle.js",
    publicPath: '/js/'
  },
  module: {
    loaders: [
      {
        test:   /\.js/,
        loader: 'babel',
        include: __dirname + '/app',
      },
      {
        test:   /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.(jpe?g|gif|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url'
      }

    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
    inline: true,
    contentBase: './dist/',
  },
};
