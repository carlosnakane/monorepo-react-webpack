const { merge } = require('webpack-merge');
const devConfig = require('@fta/dev-tools/config/webpack.dev');
const localCommonConfig = require('./webpack.common');

module.exports = merge(devConfig, localCommonConfig);
