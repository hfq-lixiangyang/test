/**
 * Created by huifenqi on 2017/6/1.
 */

const   path = require("path");
const   webpack = require("webpack");
const   htmlWebpackPlugin = require("html-webpack-plugin");
const   ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry:{
        "vendor": ['vue'],
        "main": path.resolve(__dirname, "../src/main.ts"),
    },
    output:{
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].[hash:6].js",
        publicPath: "/"
    },
    resolve:{
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['.js', '.vue', '.ts'],
        alias: {}
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },{
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            },{
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: "vue-loader"
            },{
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({fallback:"style-loader", use:"css-loader!postcss-loader!sass-loader"})
            },{
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: '[name].[hash:7].[ext]'
                }
            },{
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: '[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin("style.css"),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "../template.html")
        }),
        /*new webpack.ProvidePlugin({
            "$": "zepto",
            "Zepto": "zepto",
            "window.Zepto": "zepto"
        }),*/
        new webpack.optimize.CommonsChunkPlugin({
            names: ["vendor", "manifest"],
            minChunks: Infinity,
        })
    ]
}
