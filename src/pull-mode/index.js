/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { forEach, head } from 'lodash';

/**
 * Determines which element has the highest occurrence (mode) in the given array.
 *
 * @function
 * @since      1.1.0
 * @param  	   {Array}          input    The array to process.
 * @return 	   {null|string}             Mode element or null.
 * @example
 *
 * pullMode( ['pear', 'apple', 'orange', 'apple'] );
 *
 * // => string "apple"
 */
const pullMode = ( input ) => {
	if ( ! input || ! input.length ) {
		return null;
	}

	let maxItem = head( input );
	const itemCounts = {};

	forEach( input, ( item ) => {
		itemCounts[ item ] = itemCounts[ item ] ? itemCounts[ item ] + 1 : 1;
		if ( itemCounts[ item ] > itemCounts[ maxItem ] ) {
			maxItem = item;
		}
	} );

	return maxItem;
};

export default pullMode;
