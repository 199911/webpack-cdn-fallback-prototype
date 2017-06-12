var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    main: './app/index.js',
  },
  output: {
    filename: '[name].js',
    // Use an non exist path to test the CDN
    publicPath: '404/',
    path: path.resolve(__dirname, 'dist')
  }
};
