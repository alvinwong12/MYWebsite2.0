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
       port: 8080
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
          },
          {
             test: /\.css$/,
             loaders: ['css?modules']
          }
       ]
    },
    plugins: [HTMLWebpackPluginConfig]
 }
 module.exports = config;