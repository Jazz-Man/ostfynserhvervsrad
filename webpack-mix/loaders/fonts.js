module.exports = {
	
	test:    /\.(woff2?|ttf|eot|svg|otf)$/,
	loader:  'file',
	options: {
		name:       path => {
			if (!/node_modules|bower_components/.test(path)) {
				return 'fonts/[name].[ext]?[hash]';
			}
			
			return 'fonts/vendor/' + path
				.replace(/\\/g, '/')
				.replace(
					/((.*(node_modules|bower_components))|fonts|font|assets)\//g, ''
				) + '?[hash]';
		},
		publicPath: '/'
	}
	
};