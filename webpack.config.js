const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
  entry: './src/index.js',
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        title: 'NH Urban Sport',
        filename: "index.html",
        template: "template.html"
    })
  ],
  output: {
    filename: 'nh-urban-sport.js',
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
          {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              query:{
                  presets: ["@babel/react"]
              },
              loader: "babel-loader"
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

module.exports = config;