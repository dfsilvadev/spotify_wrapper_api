const webpack = require('webpack');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		filename: './src/Mod#2 - Modules Webpack/app.js'
	},
	output: {
		filename: './build.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [ [ 'es2015', { modules: false } ] ]
				}
			}
		]
	}
	// optimization: {
	// 	minimizer: [
	// 		new UglifyJsPlugin({
	// 			sourceMap: true,
	// 			compress: {
	// 				warnings: false
	// 			},
	// 			output: { comments: false }
	// 		})
	// 	]
	// }
};
