module.exports = {
	presets: [ [ '@babel/preset-env', { modules: false } ], '@babel/preset-react' ],
	minified: true,
	comments: false,
	env: {
		test: {
			plugins: [ '@babel/plugin-transform-modules-commonjs' ],
		},
	},
};
