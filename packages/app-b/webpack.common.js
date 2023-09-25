const externals = require('@fta/dev-tools/config/externals');

module.exports = {
  output: {
    filename: '[name].js',
  },
  externals: externals
};