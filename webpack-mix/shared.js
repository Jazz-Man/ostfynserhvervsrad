const path = require('path');
const {sync} = require('glob');

const {settings, output, loadersDir, extensionGlob, alias ,plugins} = require('./configuration.js');

const entryPath = path.join(settings.source_path);
const packPaths = sync(path.join(entryPath, extensionGlob));

module.exports = {
	entry: getEntryPoints(packPaths, entryPath),
	
	output: {
		filename:      'js/[name].js',
		chunkFilename: 'js/[id]-[name].chunk.js',
		path:          output.path,
		pathinfo:      true,
	},
	
	module:    {
		rules: getFilesFromDir(loadersDir)
	},
	externals: settings.externals,
	
	plugins: plugins(),
	
	resolve: {
		extensions: settings.extensions,
		modules:    [
			path.resolve(settings.source_path),
			'node_modules'
		],
		alias: alias
	},
	
	resolveLoader: {
		moduleExtensions: ['-loader']
	}
};