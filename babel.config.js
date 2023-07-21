module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: '3.31.1',
      },
    ],
    ['@babel/preset-react'],
  ],
};
