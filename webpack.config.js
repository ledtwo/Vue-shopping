const path = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: path.join(__dirname, "./src/main.js"),
    output: {
        path: path.join(__dirname, './dist'),
        filename: "bundle.js"
    },
    devServer: {
        open: true,
        port: 3000,
        // host: '0.0.0.0',
        // contentBase: "src",
        hot: true
    },
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, // 处理 less 文件的 loader
            { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: "url-loader" },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: "url-loader" },
            { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },//配置babel来转换高级语法
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    },
    // 
    plugins: [
        new webpack.HotModuleReplacementPlugin,
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: "index.html"
        })
    ]

}