const path = require('path');

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
		  }
		]
	}
};
