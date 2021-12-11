/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { filter, last, sortBy } from 'lodash';

/**
 * Determines which element has the highest occurrence (mode) in the given array.
 *
 * @function
 * @since      1.1.0
 * @param  	   {Array}     input    The array to process.
 * @return 	   {string}             Mode element.
 * @example
 *
 * pullMode( ['pear', 'apple', 'orange', 'apple'] );
 *
 * // => string "apple"
 */
const pullMode = ( input ) => last( sortBy( input, ( a, b ) => filter( input, ( v ) => v === a ).length - filter( input, ( v ) => v === b ).length ) );

export default pullMode;
