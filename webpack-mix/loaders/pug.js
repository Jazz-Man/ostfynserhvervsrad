module.exports = {
	test:    /\.pug$/,
	exclude: /node_modules/,
	use:     [
		{
			loader:  'pug',
			options: {
				pretty: true
			}
		}
	]
};