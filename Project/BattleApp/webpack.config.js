const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./app/index.jsx",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "index_bundle.js",
        publicPath: "/",

    },
    module:{
        rules: [
            {test: /\.(js|jsx)$/, use: "babel-loader"},
            {test: /\.css$/, use: ["style-loader", "css-loader"]} // style loader, will load css content in the <head> tag
        ],
    },
    // we need to tell webpack, whatever we import without extension will be js or jsx.
    resolve:{
        extensions: [".jsx", "..."] // support jsx and all default behavior
    },
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    plugins:[ new HtmlWebpackPlugin({
        template: "app/index.html"
    })],
    devServer: {
        historyApiFallback: true,
    },
}