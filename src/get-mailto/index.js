/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { trim } from 'lodash';

/**
 * Extracts email addresses from `mailto` href link.
 *
 * @function
 * @since     1.0.0
 * @param  	  {string} mailto           The href attribute value.
 * @return 	  {Array}                   Extracted email-addresses from the provided href value.
 * @example
 *
 * getMailTo( 'mailto:info@example.com,info@test.com' );
 *
 * // => Array '[ 'info@example.com', 'info@test.com' ]'
 */
const getMailTo = ( mailto ) => trim( mailto ).match( /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi );

export default getMailTo;
