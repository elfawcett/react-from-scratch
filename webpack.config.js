"use strict";
exports.__esModule = true;
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var isProduction = process.env.NODE_ENV === 'production';
var config = {
    mode: isProduction ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devtool: isProduction ? false : 'eval-source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                loader: 'source-map-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({ filename: 'app.css' }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
        inline: true,
        port: 3000
    }
};
module.exports = config;
