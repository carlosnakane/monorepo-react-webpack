const webpackMerge = require('webpack-merge');
const common = require('./webpack.common');

const dev = {
  mode: 'development',
  devtool: 'cheap-source-map',
};

module.exports = webpackMerge(common, dev);