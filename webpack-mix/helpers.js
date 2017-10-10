let objectValues = require('lodash').values;

const extname = require('path-complete-extname');
const path = require('path');
const {sync} = require('glob');
const fs = require('fs');
const appRoot = require('app-root-path');

/**
 * Generic tap function.
 *
 * @param {mixed}    val
 * @param {Function} callback
 */
global.tap = (val, callback) => {
	callback(val);
	
	return val;
};

/**
 * Flatten the given array.
 *
 * @param {Array} arr
 */
global.flatten = arr => [].concat.apply(
	[], objectValues(arr)
);

global.getFilesFromDir = dir => sync(path.join(dir, '*.js')).map(loader => require(loader));

global.getEntryPoints = (packPaths, entryPath) => packPaths.reduce(
	(map, entry) => {
		const localMap = map;
		const namespace = path.relative(path.join(entryPath), path.dirname(entry));
		const basename = path.basename(entry, extname(entry));
		
		localMap[path.join(namespace, basename)] = path.resolve(entry);
		
		return localMap
	}, {}
);

global.fileExists = file => fs.existsSync(file);

global.rootPath = (append = '') => path.resolve(appRoot.path, append);

global.readFile = path => fs.readFileSync(path, {
	encoding: 'utf-8'
});
