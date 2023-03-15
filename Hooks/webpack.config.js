
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    // entry point to the application
    entry: "./app/index.jsx",

    // transformation the loader
    module: {
        rules:[
            {test:/\.svg$/, use:"svg-inline-loader"},
            {test:/\.css$/, use:["style-loader", "css-loader"]},
            {test: /\.(js|jsx)$/, use:"babel-loader"}
        ]
    },

    // output file name and directory name that bundle should be placed.

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index_bundle.js"
    },

    resolve:{
        extensions: [".jsx", "..."] // support jsx and all default behavior
    },

    plugins: [new HtmlWebpackPlugin({template: "app/index.html"})], // will do stuff after the bundle is created. 

    mode: 'development',
};