require('./helpers');

const path = require('path');
const proc = require('process');
const forEach = require('lodash/forEach');

let environment = process.env.NODE_ENV;

let packageJson = require.resolve(path.join(process.cwd(),'package.json'));

const configPath = rootPath('webpack-mix');
const loadersDir = path.join(configPath, 'loaders');
const pluginsDir = path.join(configPath, 'plugins');

const settings = require(packageJson).webpack;

const output = {
	path: path.resolve(settings.public_output_path),
};
const alias = settings.alias !== undefined ? settings.alias : {};

const extensionGlob = `**/*{${settings.extensions.join(',')}}*`;

const plugins = () => {
	let allPlugins = getFilesFromDir(pluginsDir);
	
	let plugins = [];
	
	forEach(allPlugins, function (plug) {
		
		if (Array.isArray(plug)) {
			forEach(plug, function (e) {
				plugins.push(e)
			});
		}
		else {
			plugins.push(plug)
		}
	});
	
	return plugins;
};


module.exports = {
	settings,
	proc,
	loadersDir,
	pluginsDir,
	plugins,
	alias,
	output,
	environment,
	extensionGlob
};