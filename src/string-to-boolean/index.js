/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { isBoolean, isEqual } from 'lodash';

/**
 * Converts a string (e.g. 'yes' or 'no') to a bool.
 *
 * @function
 * @since     1.0.0
 * @param  	  {string|number}    input    String to convert. If a bool is passed it will be returned as-is.
 * @return 	  {boolean}                   Converted value.
 * @example
 *
 * stringToBoolean( 'yes' );
 *
 * // => boolean true
 */
const stringToBoolean = ( input ) =>
	isBoolean( input )
		? input
		: isEqual( 'yes', input ) || isEqual( 1, input ) || isEqual( 'true', input ) || isEqual( 'TRUE', input ) || isEqual( '1', input );

export default stringToBoolean;
