/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { join, split, toLower } from 'lodash';

/**
 * Gets a formatted version of the post content provided.
 *
 * @ignore
 */
import formattedContent from './../formatted-content';

/**
 * Converts a given hex-unicode into an Emoji icon.
 *
 * @function
 * @since     1.0.0
 * @param  	  {string} value      Emoji specific hex code.
 * @return 	  {any}               Rendered Emoji.
 * @example
 *
 * hexToEmoji( '1F603' );
 *
 * // => string 😃
 */
const hexToEmoji = ( value ) => formattedContent( `&#x${ join( split( toLower( value ), ' ' ), '&#x' ) };` );

export default hexToEmoji;
