const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  function(env, options) {
	const isProduction = env.production === true;
	
	const isOptimized = {
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: 'vendor',
					chunks: 'all',
					minChunks: 2
				}
			}
		}
	}

	const config = {
		entry: {
			app: './src/index.js',
			vendor: [
				'react',
				'react-dom',
				'react-redux',
				'redux'
			]
		},

		mode: isProduction ? 'production' : 'development',
		devtool: isProduction ? 'none' : 'source-map',
		optimization: isOptimized,

		resolve: {
		  extensions: ['.js', '.jsx']
		},

		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['env', 'react'],
							plugins: ['syntax-object-rest-spread'],
						}
					}
				},
				{
					test: /\.scss$/,
					use: [
						"style-loader",
						"css-loader",
						"sass-loader"
					]
				}
			]
		},

		output: {
			filename: '[name].bundle.js',
			path: path.resolve(__dirname, 'dist')
		},

		plugins: [
			new HtmlWebpackPlugin({
				hash: true,
				myPageHeader: 'rmp',
				template: './public/index.html',
				path: path.join(__dirname, 'dist'),
				filename: 'index.html'
			})	
		],

		devServer: {
			contentBase: path.join(__dirname, 'dist'),
			port: 5050,
		}
	}

	return config;
};