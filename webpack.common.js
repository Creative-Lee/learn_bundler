/** @type {import('webpack').Configuration} */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 이전 출력들을 삭제하고 새로 만들어주세요
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // 로더는 역순으로 실행된다.
        exclude: /node_modules/,
      },
      {
        test: /(\.jpg|\.png|\.svg)$/,
        type: 'asset', //  8kb 미만은 asset/inline: data uri 형식으로 번들에 포함, 이상은 asset/resource: 별도의 파일로 내보냄 + 경로 설정

        // generator.filename: 특정 디렉터리에 애셋을 내보낼때 출력 파일명 사용자 정의 - asset, assets/resource 모듈에만 적용가능
        generator: {
          filename: 'assets/image/[name][hash][ext]',
        },
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin({})],
};
