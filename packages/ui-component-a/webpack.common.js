const externals = require('@we/dev-tools/config/externals');

module.exports = {
  output: {
    filename: '[name].js',
  },
  externals: externals
};