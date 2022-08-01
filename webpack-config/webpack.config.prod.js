"use strict";

const { merge } = require("webpack-merge");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const cssnano = require("cssnano");

const commonConfig = require("./webpack.config.common");
const helpers = require("./helpers");

module.exports = merge(commonConfig, {
  mode: "production",

  output: {
    path: helpers.root("dist"),
    publicPath: "/",
    filename: "[hash].js",
    chunkFilename: "[id].[hash].chunk.js",
  },

  optimization: {
    noEmitOnErrors: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    runtimeChunk: "single",
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
      }),

      new OptimizeCSSAssetsPlugin({
        cssProcessor: cssnano,
        cssProcessorOptions: {
          discardComments: {
            removeAll: true,
          },
        },
        canPrint: false,
      }),
    ],
  },
});
