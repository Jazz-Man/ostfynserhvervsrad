const {proc} = require('../configuration.js');
const webpack = require('webpack');

module.exports = new webpack.EnvironmentPlugin(JSON.parse(JSON.stringify(proc.env)));