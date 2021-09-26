const webpack = require('webpack');

module.exports = {
    entry: ['./src/index.jsx'],
    output: {
        path: __dirname,
        filename: 'dist/main.js',
        chunkFilename: 'dist/main.[name].js'
    },
    module: {
        rules: [{
            test: /\.(css|scss)$/,
            loader: ['style-loader', 'css-loader', './scss-loader.js']
        }, {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|jpeg|gif|bmp)$/,
            loader: [{
                loader: "url-loader",
                options: {
                    name: "dist/[name].[ext]",
                    limit: 5000
                }
            }]
        }]
    },
    resolve: {
        alias: {
            'react-lazily-component': require('path').resolve('../dist/react-lazily-component.js')
        }
    },
    devServer: {
        contentBase: './',
        compress: true,
        host: 'localhost',
        port: '20000',
        hot: true,
        inline: true,
        historyApiFallback: true,
        disableHostCheck: true,
        watchOptions: {
            poll: true,
            ignored: /node_modules/,
            aggregateTimeout: 300
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    mode: 'development'
};
