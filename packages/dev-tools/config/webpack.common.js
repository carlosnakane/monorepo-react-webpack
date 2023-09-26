const path = require('path')
const WebpackBar = require('webpackbar');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

  entry: {
    index: './src/index.jsx'
  },

  // to automatically finds the local tsconfig
  context: process.cwd(),

  resolve: {
    // That's what allow us to leave off the file extension when importing (import { something } from './file')
    extensions: [".ts", ".tsx", ".js", ".jsx"]
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
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env','@babel/preset-react'] },
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/images',
            },
          },
        ],
      },
    ]
  },

  plugins: [
    new WebpackBar(),
    new CleanWebpackPlugin(),
    /*new CopyPlugin({
      patterns: [
        {
          from: "**!/!*",
          to: "[path][name].[contenthash][ext]",
          context: path.resolve(__dirname, '../../../node_modules/@fta')
        },
      ],
    }),*/

  ]

};