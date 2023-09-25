const { merge } = require('webpack-merge');
const prodConfig = require('@fta/dev-tools/config/webpack.prod');
const localCommonConfig = require('./webpack.common');

module.exports = merge(prodConfig, localCommonConfig);
