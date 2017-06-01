/**
 * Created by huifenqi on 2017/6/1.
 */
const 	merge = require("webpack-merge");
const   webpack = require("webpack");
const   baseWebpackConfig = require("./base.config.js");

Object.keys(baseWebpackConfig.entry).forEach((key) => {
    baseWebpackConfig.entry[key] = ["./config/dev.client"].concat(baseWebpackConfig.entry[key])
})

module.exports = merge(baseWebpackConfig, {
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: "'development'"
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
})
