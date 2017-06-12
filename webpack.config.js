var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    main: './app/index.js',
    vendor: './app/lodashLoader.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor' // Specify the common bundle's name.
    })
  ]
};
