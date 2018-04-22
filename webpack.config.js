var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/index.html',
	filename: 'index.html',
	inject: 'body'
});
var config = {
   entry: __dirname + '/js/main.js',
   output: {
      path: __dirname + "/build",
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
            exclude: ['/node_modules/' , '/server.js/', '/animate.js/'],
            loader: 'babel-loader'
         },
         {
            test: /\.html$/,
            loader: 'html-loader'
        }
      ]
   },
   plugins: [HTMLWebpackPluginConfig]
}
module.exports = config;