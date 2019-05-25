const resolve = require('path').resolve;
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
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
      rules: [
          {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
          },
          {
            test: /\.(png|svg|jpg|gif|JPG)$/,
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