const eslintConfig = {
	root: true,
	extends: [ 'plugin:@wordpress/eslint-plugin/recommended' ],
	rules: {
		'@wordpress/no-unsafe-wp-apis': 'off',
	},
};

module.exports = eslintConfig;
