/**
 * Created by huifenqi on 2017/6/1.
 */
const 	app = require("express")();
const   colors = require("colors");
const   webpack = require("webpack");
const   http = require("http");
const   webpackConfig = process.env.NODE_ENV === "production"?require("./config/prod.config"):require("./config/dev.config");
const   compiler = webpack(webpackConfig);
const   server = http.createServer(app);
const   bodyParser = require('body-parser');
const   cookieParser = require('cookie-parser');

console.log("the current development environment is "+`${process.env.NODE_ENV}`.red)

const hotMiddleware = require("webpack-hot-middleware")(compiler)

compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})
//app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//app.use(router)
//app.use(require("connect-history-api-fallback")())
app.use(require("webpack-dev-middleware")(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
    stats: {
        colors: true
    }
}))

app.use(hotMiddleware)

module.exports = server.listen(8080, (err) => {
        if(err){
            console.log(`${err}`.red)
            return;
        }
        console.log(`success started at port ${process.env.PORT || 8080}!!!`.green)
})
