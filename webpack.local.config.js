const common = require('./webpack.config')
const merge = require("webpack-merge")

const localConfig = merge(
    common,
    {
        mode: "development",
        devServer: {
            contentBase: "./dist",
            hot: true,
            port: 8080
        }
    }
);

module.exports = localConfig;