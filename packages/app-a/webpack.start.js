const path = require('path');
const webpackMerge = require('webpack-merge');
const devConfig = require('@we/dev-tools/config/webpack.dev');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const localDevConfig = require('./webpack.dev');

delete localDevConfig.externals;

module.exports = webpackMerge(devConfig, localDevConfig, {
  entry: {
    index: './src/index-dev.tsx'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.relative(process.cwd(), 'public/index.html'),
    })
  ],
  devServer: {
    open: true,
    hot: true,
    port: 9000
  }
});
