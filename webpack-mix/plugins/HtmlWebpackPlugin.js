const {sync} = require('glob');
const path = require('path');

const {extensionGlob} = require('../configuration.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const entryPath = path.join('app/view/page');
const packPaths = sync(path.join(entryPath, extensionGlob));

const entryPoints = getEntryPoints(packPaths,entryPath);


module.exports = Object.keys(entryPoints).map((page) => {
	return new HtmlWebpackPlugin({
		inject: false,
		mobile: true,
		lang: 'en',
		favicon: false,
		filename: `${page}.html`,
		template: `!!pug-loader!${entryPoints[page]}`,
	})
});