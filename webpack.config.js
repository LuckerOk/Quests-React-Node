const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: './public/index.jsx',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'quest-map',
      template: './public/index.html'
    }),
    new CleanWebpackPlugin(['build']),
    new LiveReloadPlugin(),
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify('http://localhost:3000')
    })
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './build',
    historyApiFallback: true
  },
  devtool: 'cheap-module-source-map',
  module: {
    loaders: [
      {
        test: /\.sass$/,
        loader: ['style-loader','css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Public: path.resolve(__dirname, 'public')
    }
  }
};
