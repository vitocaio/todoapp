const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// configurações do meu webpack
module.exports = {
    // input de dados && output de dados
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    // web server port: 8080
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    // resolve as extenções utilizadas do projeto
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    // arquivo gerado atrasves do parse de CSS
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    module: {
        // resolve problemas de exteções como por exp: js, jsx, .svg, etc.
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
        }]
    }
}
