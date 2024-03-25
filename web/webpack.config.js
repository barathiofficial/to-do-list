const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = (env, argv) => {
	const isDev = argv.mode === 'development'

	return {
		entry: './src/index.jsx',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name].[contenthash].js',
			clean: true,
			publicPath: '/'
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader'
					}
				},
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								modules: isDev ? { localIdentName: '[name]__[local]___[hash:base64:10]' } : true
							}
						},
						'sass-loader'
					]
				},
				{
					test: /\.(png|woff|woff2|eot|ttf|svg)$/,
					loader: 'url-loader',
					options: {
						limit: false
					}
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './public/index.html'
			}),
			new MiniCssExtractPlugin({
				filename: 'styles.css'
			}),
			new Dotenv()
		],
		devServer: {
			static: {
				directory: path.join(__dirname, 'dist')
			},
			compress: true,
			port: 3000,
			historyApiFallback: true,
			open: true
		},
		resolve: {
			extensions: ['.js', '.jsx']
		},
		devtool: isDev ? 'inline-source-map' : false
	}
}
