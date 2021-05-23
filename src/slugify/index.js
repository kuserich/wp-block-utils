/**
 * Slugifies every string, even when it contains unicode!
 *
 * @see     https://www.npmjs.com/package/slugify
 * @ignore
 */
import slug from 'slugify';

/**
 * An implementation of PHP's `strip_tags` in Node.js.
 *
 * @see     https://www.npmjs.com/package/striptags
 * @ignore
 */
import striptags from 'striptags';

/**
 * Slugifies every string, even when it contains unicode!
 *
 * @function
 * @since     1.0.0
 * @param  	  {string} input            The value to slugify.
 * @return 	  {string}                  Converted value to slug.
 * @example
 *
 * slugify( 'unicode is ♥' );
 *
 * // => string 'unicode-is-love'
 */
const slugify = ( input ) =>
	slug( striptags( input ), {
		replacement: '-',
		remove: /[*_+~()'"!?\/\-—–−:@^|&#.,;%<>{}]/g,
		lower: true,
	} );

export default slugify;
