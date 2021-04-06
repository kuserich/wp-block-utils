/**
 * External dependencies
 */
import { snakeCase, forOwn, toLower, trim } from 'lodash-es';
import { PREFIX } from './constants';

/**
 * WordPress dependencies
 */
const { decodeEntities } = wp.htmlEntities;

/**
 * Generate shortcode.
 *
 * @param  {string} tag 	    Shortcode tag name.
 * @param  {Object} attrs 	    Shortcode attributes.
 * @param  {string} namespace 	Project-specific prefix.
 * @return {string} 			Generated shortcode tag.
 */
const generateShortcode = ( tag, attrs, namespace ) => {
	let shortcode = `[${ snakeCase( namespace || PREFIX ) }_${ tag }`;
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
