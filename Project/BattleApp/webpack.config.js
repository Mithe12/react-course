const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./app/index.jsx",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "index_bundle.js"
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
    mode: "development",
    plugins:[ new HtmlWebpackPlugin({
        template: "app/index.html"
    })]
}