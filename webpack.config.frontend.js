var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/index.html',
	filename: 'index.html',
	inject: 'body'
});
var config = {
    entry: './js/main.js',
    output: {
       path: "/build",
       filename: 'index.js',
    },
    devServer: {
       inline: true,
       port: 8080,
       contentBase: [path.join(__dirname, "js"), path.join(__dirname, "build"), path.join(__dirname, "css")]
    },
    module: {
       loaders: [
          {
             test: /\.jsx?$/,
             exclude: ['/node_modules/', '/server.js/', '/animate.js/'],
             loader: 'babel-loader',
             query: {
                presets: ['es2016', 'react']
             }
          }
       ]
    },
    plugins: [HTMLWebpackPluginConfig]
 }
 module.exports = config;