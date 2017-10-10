module.exports = {
	test:    /\.(png|jpe?g|gif)$/,
	loaders: [
		{
			loader:  'file',
			options: {
				name:       path => {
					if (!/node_modules|bower_components/.test(path)) {
						return 'images/[name].[ext]?[hash]';
					}
					
					return 'images/vendor/' + path
						.replace(/\\/g, '/')
						.replace(
							/((.*(node_modules|bower_components))|images|image|img|assets)\//g, ''
						) + '?[hash]';
				},
				publicPath: '/'
			}
		},
		
		{
			loader:  'img',
			options: {
				enabled: true,
				gifsicle: {},
				mozjpeg: {},
				optipng: {},
				svgo: {},
			}
		}
	]
};