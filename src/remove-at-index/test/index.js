/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { map } from 'lodash';

/**
 * The function to be tested.
 *
 * @ignore
 */
import removeAtIndex from '../';

/**
 * Set of falsey and empty values for testing.
 *
 * @ignore
 */
import { falsey, empties } from "../../utils";

describe( 'Should remove item at given index', () => {
	it.each( [
		[ [ 'a', 'b', 'c' ], 0, [ 'b', 'c' ] ],
		[ [ 'a', 'b', 'c' ], 1, [ 'a', 'c' ] ],
		[ [ 'a', 'b', 'c' ], 2, [ 'a', 'b' ] ], // Remove at last index
		[ [ 'a', [ 'x' ], 'c' ], 1, [ 'a', 'c' ] ],
		[ [ [ 'x', [ 'A' ], 'z' ] ], 1, [ [ 'x', [ 'A' ], 'z' ] ] ], // Array of arrays
	] )( 'when given %p with index %p it returns %p', ( input, index, expected ) => {
		expect( removeAtIndex( input, index ) ).toStrictEqual( expected );
	} );
} );

describe( 'Should accept falsey arguments for index', () => {
	const testArray = [ 'a', 'd', 'b' ];
	const cases = map( falsey, ( value ) => [ testArray, value ] );
	it.each( cases )( 'when given %p with index %p', ( input, value ) => {
		expect.anything( removeAtIndex( input, value ) );
	} );
} );

describe( 'Should accept empty arguments for array', () => {
	const testIndex = 0;
	const cases = map( empties, ( value ) => [ value, testIndex ] );
	it.each( cases )( 'when given %p with index %p', ( input, value ) => {
		expect.anything( removeAtIndex( input, value ) );
	} );
} );

describe( 'Should accept negative indexes', () => {
	it( 'returns when given -1 as index', () => {
		expect.anything( removeAtIndex( [ 'a', 'b', 'c' ], -1 ) );
	} );
} );
