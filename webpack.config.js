const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        title: 'NH Urban Sport'
    })
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules: [
          {
              test: /\.css$/,
              use:[
                  'style-loader',
                  'css-loader'
              ]
          },
          {
              test: /\.(png|svg|jpg|gif)$/,
              use: [
                  'file-loader'
              ]
          },
          //I may not need this in the end - check after
          //Anything else in the project that should be loaded should be looked at within this configuration
          {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: [
                  'file-loader'
              ]
          }
      ]
  }
};