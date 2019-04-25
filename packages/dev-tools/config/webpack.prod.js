const webpackMerge = require('webpack-merge');
const common = require('./webpack.common');

const prod = {
  mode: 'production',
  devtool: 'source-map',
};

module.exports = webpackMerge(common, prod);