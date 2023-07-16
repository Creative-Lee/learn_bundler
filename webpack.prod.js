// webpack.prod.js

const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'static/[contenthash:8].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
});
