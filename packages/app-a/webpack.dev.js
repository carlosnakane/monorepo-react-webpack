const webpackMerge = require('webpack-merge');
const devConfig = require('@we/dev-tools/config/webpack.dev');
const localCommonConfig = require('./webpack.common');

module.exports = webpackMerge(devConfig, localCommonConfig);
