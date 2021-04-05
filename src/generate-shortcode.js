/**
 * External dependencies
 */
import { snakeCase, forOwn, toLower } from 'lodash';
import { PREFIX } from './constants';

const generateShortcode = ( tag, attrs ) => {
	let shortcode = `[${ snakeCase( PREFIX ) }_${ tag }`;
	forOwn( attrs, ( value, key ) => {
		shortcode += ' ' + toLower( key ) + '="' + value + '"';
	} );
	shortcode += ']';

	return shortcode;
};

export default generateShortcode;
