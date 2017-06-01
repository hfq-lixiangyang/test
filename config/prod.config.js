/**
 * Created by huifenqi on 2017/6/1.
 */
const 	merge = require("webpack-merge");
const   webpack = require("webpack");
const   baseWebpackConfig = require("./base.config.js");

module.exports = merge(baseWebpackConfig, {
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: "'production'"
            }
        })
    ]
})
