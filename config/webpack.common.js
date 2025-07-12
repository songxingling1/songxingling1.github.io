const path = require('path')
const PATH = require('./path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    entry: path.join(PATH.scripts,'index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].chunk.css'
        }),
        new HtmlWebpackPlugin({
            template: path.join(PATH.pages,'index.html')
        }),
        new CopyWebpackPlugin({
            patterns:[
                { from:'assets',to:'assets' }
            ]
        })
    ],
    resolve: {
        alias: {
            '@': PATH.components
        },
        extensions: ['.vue','.js','.css']
    }
}