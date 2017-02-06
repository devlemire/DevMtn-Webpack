var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './public/src/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'./public/src/app.js'
	],
	module: {
		loaders: [
			{ test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' }
		]
	},
	output: {
		filename: 'bundle.js',
		path: './public/dist'
	},
	plugins: [HTMLWebpackPluginConfig]
}