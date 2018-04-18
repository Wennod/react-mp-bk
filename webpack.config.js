const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './index.js',

	devtool: 'inline-source-map',
	
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react'],
						plugins: ['syntax-object-rest-spread'],
					}
				}
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			myPageHeader: 'rmp',
			template: './index.html',
			path: path.join(__dirname, "dist"),
			filename: 'index.html' 
		})	
	],
	
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 5500,
	}
};