const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const baseWebpackConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const P = require('path');

module.exports = merge(baseWebpackConfig, {
  output: {
    path: __dirname + "/dist",//打包后的文件存放的地方
    filename: "[name].[chunkhash].js"//打包后输出文件的文件名
  },
  devtool: 'null',
  module: {
    rules: []
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].css"
    }),
    new CleanWebpackPlugin('dist/*.*', {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new OptimizeCSSPlugin()
  ]
});
