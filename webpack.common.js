module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
