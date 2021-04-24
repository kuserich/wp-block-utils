/**
 * External dependencies
 */
import { snakeCase, forOwn, toLower, trim } from 'lodash-es';
import { PREFIX } from './constants';

/**
 * WordPress dependencies
 */
import { decodeEntities } from '@wordpress/html-entities';

/**
 * Generate shortcode.
 *
 * @param  {string} tag 	    Shortcode tag name.
 * @param  {Object} attrs 	    Shortcode attributes.
 * @param  {string} namespace 	Project-specific prefix.
 * @return {string} 			Generated shortcode tag.
 */
const generateShortcode = ( tag, attrs, namespace = PREFIX ) => {
	let shortcode = `[${ snakeCase( namespace ) }_${ tag }`;
	forOwn( attrs, ( value, key ) => {
		shortcode += ' ' + toLower( key ) + '="' + value + '"';
	} );
	shortcode += ']';

	return shortcode;
};

/**
 * Generate formatted content.
 *
 * @param  {string} content 	Post content.
 * @return {string} 			Formatted post content.
 */
const generateFormattedContent = ( content ) => decodeEntities( trim( content ) );

export { generateShortcode, generateFormattedContent };
