/**
 * The function to be tested.
 *
 * @ignore
 */
import removeAtIndex from '../';

describe( 'Should remove item at given index', () => {
	it.each( [
		[ [ 'a', 'd', 'b' ], 0, [ 'd', 'b' ] ],
		[ [ 'a', 'd', 'b' ], 1, [ 'a', 'b' ] ],
		[ [ 'a', 'd', 'b' ], 2, [ 'a', 'd' ] ], // Remove at last index
		[ [ 'a', [ 'd' ], 'b' ], 1, [ 'a', 'b' ] ],
		[ [ 'a', 'd', 'b' ], [ 1 ], [ 'a', 'b' ] ],
		[ [ [ 'a', [ 'd' ], 'b' ] ], 1, [ [ 'a', [ 'd' ], 'b' ] ] ], // Array of arrays
	] )( 'when given %p with index %p it returns %p', ( input, index, expected ) => {
		expect( removeAtIndex( input, index ) ).toStrictEqual( expected );
	} );
} );

describe( 'Should return an empty array given falseful or empty value', () => {
	it.each( [
		[ [], 1, [] ],
		[ {}, 1, [] ],
		[ null, 1, [] ],
		[ undefined, 1, [] ],
		[ 0, 1, [] ],
		[ -0, 1, [] ],
		[ 0n, 1, [] ],
		[ NaN, 1, [] ],
	] )( 'when given %p with index %p it returns %p', ( input, index, expected ) => {
		expect( removeAtIndex( input, index ) ).toStrictEqual( expected );
	} );
} );

describe( 'Should return an invalid array given a numerically invalid index', () => {
	it.each( [
		[ [ 'a', 'd', 'b' ], 3, [ 'a', 'd', 'b' ] ],
		[ [ 'a', 'd', 'b' ], -1, [ 'a', 'd', 'a', 'd', 'b' ] ],
		[ [ 'a', 'd', 'b' ], '1', [ 'a' ] ],
		[ [ 'a', 'd', 'b' ], '', [ 'd', 'b' ] ],
		[ [ 'a', 'd', 'b' ], 0, [ 'd', 'b' ] ],
		[ [ 'a', 'd', 'b' ], -0, [ 'd', 'b' ] ],
		[ [ 'a', 'd', 'b' ], NaN, [ 'a', 'd', 'b' ] ],
	] )( 'when given %p with index %p it returns %p', ( input, index, expected ) => {
		expect( removeAtIndex( input, index ) ).toStrictEqual( expected );
	} );
} );

describe( 'Should return an invalid array given a falseful or empty index', () => {
	it.each( [
		[ [ 'a', 'd', 'b' ], [], [ 'd', 'b' ] ],
		[ [ 'a', 'd', 'b' ], {}, [ 'a', 'd', 'b' ] ],
		[ [ 'a', 'd', 'b' ], null, [ 'd', 'b' ] ],
		[ [ 'a', 'd', 'b' ], undefined, [ 'a', 'd', 'b', 'd', 'b' ] ],
		[ [ 'a', 'd', 'b' ], false, [ 'd', 'b' ] ],
		[ [ 'a', 'd', 'b' ], true, [ 'a', 'b' ] ],
	] )( 'when given %p with index %p it returns %p', ( input, index, expected ) => {
		expect( removeAtIndex( input, index ) ).toStrictEqual( expected );
	} );
} );
