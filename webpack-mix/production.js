const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const sharedConfig = require('./shared.js');

const {settings} = require('./configuration.js');

const uglify = new UglifyJSPlugin({
	minimize: false,
	sourceMap: true,
	
	compress: {
		warnings: false
	},
	
	output: {
		comments: false
	}
});


module.exports = merge(sharedConfig, {
	
	entry: {
		vendor:settings.vendor
	},
	
	plugins:[
		uglify
	],
	devtool: 'source-map',
	stats: 'normal',
});