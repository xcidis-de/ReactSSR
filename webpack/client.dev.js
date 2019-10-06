const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const fs = require('fs')

module.exports = {
    entry: "./src/client/index.jsx",
    output: {
        filename: 'bundle.js',
        path: path.resolve('./dist/public')
    },
    target: 'web',
    module: {
        rules: [
            {
              test: /\.(sa|sc|c)ss$/,
              use: [
                'css-hot-loader',
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    hmr: process.env.NODE_ENV === 'development',
                  },
                },
                'css-loader',
                'postcss-loader',
                'sass-loader',
              ],
            },
            {
              test: /jsx?$/,
              exclude: /(node_modules)/,
              loader: "babel-loader",
              query: { presets: ["@babel/preset-react"] }
            }
          ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.css', '.scss']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebPackPlugin({
          filename: path.resolve('./dist/public/index.html'),
          inject: true,
          template: path.resolve('./src/client/index.html')
        })
    ],
    optimization: {
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.s?css$/,
              chunks: 'all',
              enforce: true,
            },
          },
        },
      },
}