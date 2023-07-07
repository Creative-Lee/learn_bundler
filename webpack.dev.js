const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',

  devServer: {
    open: true,
    port: 'auto', // 수신할 포트
    static: path.join(__dirname, './dist'),
    compress: true, // 제공되는 항목에 gzip 압축 적용
  },
});
