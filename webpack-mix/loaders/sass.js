const {environment} = require('../configuration.js');

const extractSCSS = require('../plugins/ExtractTextPlugin');


module.exports = {
	test: /\.s[ac]ss$/,
	use: extractSCSS.extract({
		fallback: 'style',
		use: [
			{
				loader: 'css',
				options: {
					minimize: environment === 'production'
				}
			},
			'autoprefixer',
			{
				loader: 'resolve-url',
				options: {
					root: '../',
					keepQuery: true
				}
			},
			{
				loader: 'sass',
				options: {
					sourceMap: true
				}
			}
		]
	})
};