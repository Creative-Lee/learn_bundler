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

  // module: 로더 사용을 위한 객체
  module: {
    rules: [
      {
        test: /\.js$/, // 파일명 or 파일 패턴
        use: [path.resolve('./loader/dobobLoader.js')], // 로더 함수 경로(여러개 가능)
      },
    ],
  },
};
