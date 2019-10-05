const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const DotEnv = require('dotenv-webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const rules = [
    {
      test: /\.(ts|js)x?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
          presets: ['@babel/preset-react']
      }
    },
    {
      test: /\.html$/,
      loader: 'html-loader',
      exclude: /node_modules/,
    }
];

module.exports = [{
    entry: path.resolve('src/client/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve('./dist/public')
    },
    target: 'web',
    resolve: {
        extensions: ['.jsx', '.js']
    },
    module: {
        rules: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  hmr: process.env.NODE_ENV === 'development',
                },
            }
        ].push(...rules)
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            template: "./src/client/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
    optimization: {
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.css$/,
              chunks: 'all',
              enforce: true,
            },
          },
        },
      },
},
{
    entry: path.resolve(__dirname, 'src/server/index.js'),
    output: {
        path: path.resolve('./dist'),
        filename: '[name].node.js'
    },
    target: 'node',
    resolve: {
        extensions: ['.jsx', '.js']
    },
    module: {
        rules 
    }, 
    externals: [nodeExternals({
        whitelist: []
    })],
    plugins: [
        new DotEnv({ path: './.env' })
    ]
}]