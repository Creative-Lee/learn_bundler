/** @type {import('webpack').Configuration} */

const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
};
