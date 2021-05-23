/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { isArray } from 'lodash';

/**
 * Check if value is classified as an array object and is not empty.
 *
 * @function
 * @since     1.0.0
 * @param  	  {Array} value         The value to check.
 * @return 	  {boolean}             Whether the argument provided is a non-empty array.
 * @example
 *
 * ifArray( [] );
 *
 * // => boolean false
 */
const ifArray = ( value ) => isArray( value ) && !! value.length;

export default ifArray;
