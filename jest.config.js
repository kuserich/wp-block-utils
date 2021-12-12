/**
 * External dependencies
 */
const defaultConfig = require( './node_modules/@wordpress/scripts/config/jest-unit.config.js' );
module.exports = {
	...defaultConfig,
	testMatch: [
		'**/src/**/test/*.js'
	]
}
