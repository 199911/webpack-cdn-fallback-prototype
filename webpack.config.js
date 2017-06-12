var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    main: './app/index.js',
  },
  output: {
    filename: '[name].js',
    publicPath: 'dist/',
    path: path.resolve(__dirname, 'dist')
  }
};
