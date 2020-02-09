const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FileListPlugin = require('./plugin/FileListPlugin');
const P = require('path');

module.exports = {
  entry: __dirname + '/src/index.js',//已多次提及的唯一入口文件
  output: {
    path: __dirname + '/dist',//打包后的文件存放的地方
    filename: '[name].[hash].js',//打包后输出文件的文件名
  },
  resolve: {
    extensions: ['.js', '.es6', '.jsx', '.json'],
    alias: {
      'src': P.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          }],
      },
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /(\.css|\.less)$/,
        use: [
          {
            loader: process.env.NODE_ENV === 'production'
              ? MiniCssExtractPlugin.loader
              : 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              // modules: true, // 指定启用css modules
              localIdentName: '[name]__[local]--[hash:base64:5]', // 指定css的类名格式
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'less-loader',
          },
        ],
      },
      {
        test: /\.txt$/,
        use: ['./loader/uppercase-loader.js', './loader/reverse-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.tmpl.html',
      filename: './index.html',
      title: 'Webpack4 Sample',
    }),
    new FileListPlugin(),
  ],

};
