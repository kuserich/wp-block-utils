/**
 * External dependencies
 */
import { snakeCase, forOwn, toLower } from 'lodash-es';
import { PREFIX } from './constants';

/**
 * Generate shortcode.
 *
 * @param  {string} tag 	    Shortcode tag name.
 * @param  {Object} attrs 	    Shortcode attributes.
 * @return {string} 			Generated shortcode tag.
 */
const generateShortcode = ( tag, attrs ) => {
	let shortcode = `[${ snakeCase( PREFIX ) }_${ tag }`;
	forOwn( attrs, ( value, key ) => {
		shortcode += ' ' + toLower( key ) + '="' + value + '"';
	} );
	shortcode += ']';

	return shortcode;
};

export { generateShortcode };
