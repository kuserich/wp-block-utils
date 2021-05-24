/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { forOwn, snakeCase, toLower } from 'lodash';

/**
 * Generate shortcode.
 *
 * @function
 * @since     1.0.0
 * @param     {string} tagName             Shortcode tag name.
 * @param     {Object} attributes          Shortcode attributes.
 * @return 	  {string}                     Generated shortcode.
 * @example
 *
 * shortcode( 'sixa_teams', { posts: [1, 2], number: 2 } );
 *
 * // => string '[sixa_teams posts="1,2" number="2"]'
 */
const shortcode = ( tagName, attributes ) => {
	let tag = `[${ snakeCase( tagName ) }`;
	forOwn( attributes, ( value, key ) => {
		tag += ` ${ toLower( snakeCase( key ) ) }="${ value }"`;
	} );
	tag += ']';

	return tag;
};

export default shortcode;
