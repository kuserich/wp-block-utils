/**
 * External dependencies
 */
import { snakeCase, forOwn, toLower, isUndefined } from 'lodash-es';
import { PREFIX } from './constants';

/**
 * Generate shortcode.
 *
 * @param  {string} tag 	    Shortcode tag name.
 * @param  {Object} attrs 	    Shortcode attributes.
 * @param  {string} namespace 	Project-specific prefix.
 * @return {string} 			Generated shortcode tag.
 */
const generateShortcode = ( tag, attrs, namespace ) => {
	namespace = isUndefined( namespace ) ? PREFIX : namespace;
	let shortcode = `[${ snakeCase( namespace ) }_${ tag }`;
	forOwn( attrs, ( value, key ) => {
		shortcode += ' ' + toLower( key ) + '="' + value + '"';
	} );
	shortcode += ']';

	return shortcode;
};

export { generateShortcode };
