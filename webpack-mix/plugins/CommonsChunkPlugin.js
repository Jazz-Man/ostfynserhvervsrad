const webpack = require('webpack');
//const {settings} = require('../configuration.js');


module.exports = new webpack.optimize.CommonsChunkPlugin({
	name: "commons",
	filename: "js/commons.js",
});