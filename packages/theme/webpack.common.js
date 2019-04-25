const externals = require('@we/dev-tools/config/externals');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  output: {
    filename: '[name].js',
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),],
  externals: externals
};