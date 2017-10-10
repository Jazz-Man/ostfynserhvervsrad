
const merge = require('webpack-merge');
const {environment} = require('./webpack-mix/configuration.js');


const config = require(`./webpack-mix/${environment}`);

module.exports = merge(config);

