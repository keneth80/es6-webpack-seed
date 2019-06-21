// const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin      = require('html-webpack-plugin');
const BundleAnalyzerPlugin   = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const helpers = require('./helpers');
 
module.exports = {
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({ 
            root: helpers.root(), 
            verbose: true 
        }),

        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),

        new BundleAnalyzerPlugin()
    ]
};
