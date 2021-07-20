/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { concat, slice, add } from 'lodash';

/**
 * Removes an item from the array at a specific index.
 *
 * @function
 * @since      1.0.0
 * @param  	   {Array}     input    The array to remove from.
 * @param  	   {number}    index    Given array index to remove the value from.
 * @return 	   {Array}              Returns the new updated array.
 * @example
 *
 * removeAtIndex( [ 'a', 'd', 'b' ], 1 );
 *
 * // => Array [ 'a', 'b' ]
 */
const removeAtIndex = ( input, index ) => concat( slice( input, 0, index ), slice( input, add( index, 1 ) ) );

export default removeAtIndex;
