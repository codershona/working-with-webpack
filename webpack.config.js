const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(_dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: ''
	},
	devtool: 'cheap-module-eval-source-map',
	module: {
		rules: [
		{
          test: /\.js$/,
          loader: 'babel-loaders',
          exclude: /node_modules/
		  },
		  {
		  	test: /\.css$/,
		  	exclude: /node_modules/,
		  	use: [
		  	 { loader: 'style-loader' },
		  	 { loader: 'css-loader', 
		  	 options: {
		  	 	importLoaders: 1,
		  	 	modules: {
		  	 		localIdentName: '[name]_[local]_[hash:base64:5]'
		  	 	}
		  	  } 
		  	 },
		  	 { 
		  	 	loader: 'postcss-loader', options: {
		  	 	ident: 'postcss',
		  	 	plugins: () => [autoprefixer()]
		  	   } 
		  	 }
		  	]
		  }
		]
	}
};
