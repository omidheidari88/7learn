const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode: 'development',
	//entry: path.join(__dirname, 'app', 'index'), <----- default khodesh
	entry: path.join(__dirname, 'app/index.js'),
	// watch ro barmidarim ke code harbar ba har taghir compile nashe
	// watch: true,
	output: {
		path: path.join(__dirname, 'public/dist'),
		// publicPath bedarde zamani mikhore ke ma betunn code haro dar samte browser bebinim,tozihate bishtar  ro khodet barresi kon
		publicPath: '/public/dist/',
		filename: 'bundle.js',
		//baraye zamani ke chanta file voroodi o khorooji darim
		chunkFilename: '[name].js',
	},
	module: {
		rules: [
			{
				// alamat soal ke RegEx ast yani harfe ghablesh bud ya nabud moshkeli nadarad.yani ham file js va ham jsx o beshnas
				test: /.jsx?$/,
				include: [path.resolve(__dirname, 'app')],
				exclude: [path.resolve(__dirname, 'node_modules')],
				loader: 'babel-loader',
				query: {
					presets: [
						[
							'@babel/env',
							{
								targets: {
									browsers: 'last 2 chrome versions',
								},
							},
						],
					],
				},
			},
		],
	},
	resolve: {
		extensions: ['.json', '.js', '.jsx'],
	},
	plugins: [
		new htmlWebpackPlugin({
			title: 'Webpack App',
			filename: path.join(__dirname, 'public/index.html'),
		}),
	],
	devtool: 'source-map',
	devServer: {
		// addressi ke bayad be un negah kone az roosh bekhunne
		// yani un code haye js ke bundle shodan ro miyad tazrigh mikone be soorate html tu in directory
		// code html ro be soorate dasti neminevisim
		// az plugin html-webpack-plugin estefade mikonim
		// contentBase: path.join(__dirname, '/dist/'), <----- default khodesh
		contentBase: path.join(__dirname, 'public'),
		inline: true,
		host: 'localhost',
		port: 3000,
	},
};
