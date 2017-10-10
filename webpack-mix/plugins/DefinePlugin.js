let webpack = require('webpack');

const {proc} = require('../configuration.js');

module.exports = new webpack.DefinePlugin({
	'process.env': {
		'NODE_ENV': JSON.stringify(proc.env.NODE_ENV)
	}
});