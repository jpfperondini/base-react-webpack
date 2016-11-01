var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/main.jsx',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new CopyWebpackPlugin([{ from: 'index.html' }])
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      }
    ]
  },
};
