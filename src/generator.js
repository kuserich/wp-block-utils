/**
 * External dependencies
 */
import { snakeCase, forOwn, toLower, trim, reduce } from 'lodash-es';
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

/**
 * Generate a minified CSS string from selector and key/value pair.
 *
 * The selector variable must be a valid CSS selector string like .my-class
 * or #my-id.
 *
 * The styles variable must be an object and the keys must be
 * valid CSS properties like 'background-color' and not 'backgroundColor'.
 *
 * Example:
 *
 * generateCSSString( '.my-selector', { 'line-height': '12px', 'color': 'red' } )
 *
 * Returns: .my-selector{line-height:12px;color:red;}
 *
 * @param  {string} selector	Any valid CSS selector.
 * @param  {Object} styles		Object where the keys are CSS properties and the value their corresponding value.
 */
const generateCSS = ( selector, styles ) => {
	const rules = reduce( styles, ( concatenatedCSSString, value, key ) => concatenatedCSSString.concat( key, ':', value, ';' ), '' );
	return selector.concat( '{', rules, '}' );
};

export { generateShortcode, generateFormattedContent, generateCSS };
