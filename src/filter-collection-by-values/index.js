/**
 * Utility functions from `Lodash`.
 *
 * @see    https://lodash.com/docs
 * @ignore
 */
import { forEach, find } from 'lodash';

/**
 * Iterates over elements of `values` and returns the matching entry
 * from ´collection´, if there is a match.
 *
 * Notice that this function preserves the order of `values` in the result set
 * and is thus most useful if a collection must be filtered in an order that is
 * specified by another collection.
 *
 * @function
 * @since     1.2.0
 * @param     {Array}     values        The values to search for.
 * @param     {Array}     collection    The collection to search elements in.
 * @param     {string}    field         The field to search for. Defaults to 'id'.
 * @return    {Array}                   All matching entries in collection.
 * @example
 *
 * filterCollectionByValues( [ 1, 3 ], [ { id: 1, content: {} }, { id: 2, content: {} }, { id: 3, content: {} } ] );
 *
 * // => Array [ { id: 1, content: {} }, { id: 3, content: {} } ]
 */
const filterCollectionByValues = ( values, collection, field = 'id' ) => {
	const existing = [];
	forEach( values, ( value ) => {
		const match = find( collection, [ field, value ] );
		if ( Boolean( match ) ) {
			existing.push( match );
		}
	} );
	return existing;
};

export default filterCollectionByValues;
