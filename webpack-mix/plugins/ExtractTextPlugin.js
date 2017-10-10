const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = new ExtractTextPlugin({
	filename: 'css/[name].css',
	disable: false,
	allChunks: true
});