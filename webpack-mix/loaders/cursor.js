module.exports = {
	test:    /\.(cur|ani)$/,
	loader:  'file',
	options: {
		name:       '[name].[ext]?[hash]',
		publicPath: '/'
	}
	
};