module.exports = {
	test:    /\.html$/,
	use: [ {
		loader: 'html',
		options: {
			minimize: true,
			removeComments: false,
			collapseWhitespace: false
		}
	}],
	
};