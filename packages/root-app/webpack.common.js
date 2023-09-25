const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const outModulesPrefix = 'we';
const ourModulePattern = new RegExp(`^@${outModulesPrefix}\/([a-z]+[-[a-z]+]*)$`);

const config = {

  plugins: [
    new HtmlWebpackPlugin({
      template: path.relative(process.cwd(), 'public/index.html')
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
  ],

  output: {
    filename: '[name].[contenthash].js',
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        defaultVendors: false,
        chunks: 'all',
        vendor: {
          name: 'vendor',
          chunks: 'all',
          test: /node_modules/,
          priority: 20,
        },
        common: {
          name: module => `we-${module.rawRequest.match(ourModulePattern)[1]}`,
          minChunks: 1,
          chunks: 'all',
          maxAsyncRequests: Infinity,
          maxInitialRequests: Infinity,
          minSize: 0,
          maxSize: 1,
          test: module => ourModulePattern.test(module.rawRequest),
          priority: 10,
          enforce: true
        }
      }
    }
  }
};

module.exports = config;