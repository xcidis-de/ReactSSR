const path = require('path')
const nodeExternals = require('webpack-node-externals')
const DotEnv = require('dotenv-webpack')

module.exports = {
    entry: path.resolve('./src/server/index.js'),
    output: {
        path: path.resolve('./dist'),
        filename: '[name].node.js',
        libraryTarget: 'commonjs2'
    },
    target: 'node',
    resolve: {
        extensions: ['.jsx', '.js']
    },
    module: {
        rules: [{
            test: /\.(ts|js)x?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
          },
          {
            test: /\.s?css$/,
            use: ['isomorphic-style-loader', { loader: 'postcss-loader' }]
          }] 
    }, 
    externals: [nodeExternals({
        whitelist: []
    }),
    'react-helmet'
    ],
    plugins: [
        new DotEnv({ path: './.env' })
    ]
}