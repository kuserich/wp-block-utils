/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { isBoolean, isEqual } from 'lodash';

/**
 * Convert a string (e.g. 'yes' or 'no') to a bool.
 *
 * @ignore
 */
import stringToBoolean from '../string-to-boolean';

/**
 * Converts a bool to a 'yes' or 'no'.
 *
 * @function
 * @since     1.0.0
 * @param  	  {boolean|string} input           Bool to convert. If a string is passed it will first be converted to a bool.
 * @return 	  {string}                         Converted value.
 * @example
 *
 * booleanToString( true );
 *
 * // => string 'yes'
 */
const booleanToString = ( input ) => {
	if ( ! isBoolean( input ) ) {
		return stringToBoolean( input );
	}

	return isEqual( true, input ) ? 'yes' : 'no';
};

export default booleanToString;
