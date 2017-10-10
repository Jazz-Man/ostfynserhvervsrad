const merge = require('webpack-merge');
const sharedConfig = require('./shared.js');
const {settings, output} = require('./configuration.js');

module.exports = merge(sharedConfig, {
	
	
	entry: {
		
		vendor:settings.vendor
	},
	
	stats: {
		assets: true,
		assetsSort: "field",
		cached: true,
		cachedAssets: true,
		children: true,
		chunks: true,
		chunkModules: true,
		chunkOrigins: true,
		chunksSort: "field",
		colors: true,
		depth: true,
		entrypoints: true,
		errorDetails: true,
		hash: true,
		modulesSort: "field",
		moduleTrace: true,
		performance: true,
		providedExports: true,
		publicPath: true,
		reasons: true,
		source: true,
		timings: true,
		usedExports: true,
		version: true,
		warnings: true,
	},
	
	devServer: {
		clientLogLevel: 'none',
		https:          settings.dev_server.https,
		host:           settings.dev_server.host,
		port:           settings.dev_server.port,
		contentBase:    output.path,
		publicPath:     output.publicPath,
		historyApiFallback: true,
		watchContentBase: true,
		compress:       true,
		headers:        {'Access-Control-Allow-Origin': '*'},
		watchOptions:   {
			ignored: /node_modules/
		}
	}
});