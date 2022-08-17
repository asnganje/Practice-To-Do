const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode : 'development',
    entry: {
        index: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,  
    },
    module: {
      rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
      ],       
    },
    optimization:{
        runtimeChunk: 'single',
    },

};