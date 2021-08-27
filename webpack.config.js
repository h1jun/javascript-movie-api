const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index: "./src/js/index.js",
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: './index.html',
            chunks:['index'] 
        })
    ],
}