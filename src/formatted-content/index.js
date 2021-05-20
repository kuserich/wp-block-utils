/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { trim } from 'lodash';

/**
 * HTML entity utilities for WordPress.
 *
 * @see     https://github.com/WordPress/gutenberg/blob/trunk/packages/html-entities/README.md
 * @ignore
 */
import { decodeEntities } from '@wordpress/html-entities';

/**
 * Gets a formatted version of the post content provided.
 *
 * @function
 * @since 	 	1.0.0
 * @author	 	Mahdi Yazdani
 * @copyright	sixa AG
 * @param  	 	{string} content         Post content.
 * @return 	 	{string}                 Formatted post content.
 * @example
 *
 * formattedContent( '<span class=\"amount\"><bdi><span class=\"currency\">&pound;<\/span>11.05<\/bdi><\/span>' );
 *
 * // => string '<span class="amount"><bdi><span class="currency">£</span>11.05</bdi></span>'
 */
const formattedContent = ( content ) => decodeEntities( trim( content ) );

export default formattedContent;
