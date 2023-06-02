const path = require('path');

module.exports = {
  // Webpack fica mais rápido no modo develop.
  mode: 'development',
  entry: './src/A0018-webpack/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist', 'assets', 'js'),
  },
  // Vai mostrar qual linha está dando erro caso aconteça algo.
  devtool: 'source-map',
};
