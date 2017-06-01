/**
 * Created by huifenqi on 2017/6/1.
 */
const hotClient = require("webpack-hot-middleware/client?noInfo=true&reload=true")

hotClient.subscribe(function (event) {
    if (event.action === 'reload') {
        window.location.reload()
    }
})
