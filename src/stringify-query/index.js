/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { join, map, keys, values } from 'lodash';

/**
 * Stringify an array of objects into a query string.
 *
 * @function
 * @since     1.0.0
 * @param  	  {Array}    input    The array of objects to query stringify.
 * @return 	  {string}            Returns a stringified query.
 * @example
 *
 * stringifyQuery( [ { product: '1885' }, { action: 'hook_name' } ] );
 *
 * // => string 'product=1885&action=hook_name'
 */
const stringifyQuery = ( input ) =>
	join(
		map( input, ( item ) => `${ keys( item ) }=${ values( item ) }` ),
		'&'
	);

export default stringifyQuery;
