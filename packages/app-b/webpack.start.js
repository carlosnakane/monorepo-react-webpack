const path = require('path');
const { merge } = require('webpack-merge');
const devConfig = require('@fta/dev-tools/config/webpack.dev');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const localDevConfig = require('./webpack.dev');

delete localDevConfig.externals;

module.exports = merge(devConfig, localDevConfig, {
  entry: {
    index: './src/index-dev.jsx'
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
