var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'./src/app.js'
	],
	module: {
		loaders: [
			{ test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' }
		]
	},
	output: {
		filename: 'bundle.js',
		path: __dirname + '/public'
	},
	plugins: [HTMLWebpackPluginConfig]
}