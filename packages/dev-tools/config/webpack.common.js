const path = require('path')
const WebpackBar = require('webpackbar');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

  entry: {
    index: './src/index.tsx'
  },

  // to automatically finds the local tsconfig
  context: process.cwd(),

  resolve: {
    // That's what allow us to leave off the file extension when importing (import { something } from './file')
    extensions: [".ts", ".tsx", ".js"]
  },

  output: {
    path: path.resolve(process.cwd(), 'dist'),
    libraryTarget: 'umd',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },

  plugins: [
    new WebpackBar(),
    new CleanWebpackPlugin()
  ]

};