let merge = require('webpack-merge');

function config() {
	
	let defaultOptions = {
		cacheDirectory: true,
		presets:        [
			[
				'env',
				{
					'modules': false,
					'targets': {
						'browsers': ['> 2%'],
						uglify:     true
					}
				}
			]
		]
	};
	let options = {};
	
	tap(rootPath('.babelrc'), babelrc => {
		
		if (fileExists(babelrc)) {
			options = JSON.parse(readFile(babelrc));
		}
	});
	
	return merge.smart(defaultOptions, options);
	
}

module.exports = {
	test:    /\.js?$/,
	exclude: /(node_modules|bower_components)/,
	use:     [
		{
			loader:  'babel',
			options: config()
		}
	]
};