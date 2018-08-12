const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin');

var config = {
  output: {
    path: path.resolve(`${__dirname}/dist/`)
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
        }
      }
    ]
  },
  externals: {
    'vue': 'Vue'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      mangle: true,
      compress: {
        warnings: false
      }
    })
  ]
};

module.exports = [
  merge(config,
  {
    entry: path.resolve(__dirname + '/src/gmap-custom-marker.vue'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'gmap-custom-marker.js',
      libraryTarget: 'umd',
      library: 'vue2-gmap-custom-marker',
    }
  })
];
