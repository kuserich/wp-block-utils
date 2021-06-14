/**
 * The function to be tested.
 *
 * @ignore
 */
import removeAtIndex from '../';

describe( 'Returns a valid array for a valid input array with a valid index', () => {
	test.each( [
		[ [ 'a', 'd', 'b' ], 1, [ 'a', 'b' ] ],
		[ [ 'a', [ 'd' ], 'b' ], 1, [ 'a', 'b' ] ],
		// [ [ [ 'a', [ 'd' ], 'b' ] ], 1, [ [ 'a', [ 'd' ], 'b' ] ] ], // Array of arrays
		[ [ 'a', 'd', 'b' ], [ 1 ], [ 'a', 'b' ] ],
	] )( 'when given %p with index %p it returns %p', ( input, index, expected ) => {
		expect( removeAtIndex( input, index ) ).toStrictEqual( expected );
	} );
} );

describe( 'Returns an invalid array for an invalid input array with a valid index', () => {
	test.each( [
		[ [], 1, [] ],
		[ {}, 1, [] ],
		[ null, 1, [] ],
		[ undefined, 1, [] ],
	] )( 'when given %p with index %p it returns %p', ( input, index, expected ) => {
		expect( removeAtIndex( input, index ) ).toStrictEqual( expected );
	} );
} );

describe( 'Returns an invalid array for a valid input array with invalid index', () => {
	test.each( [
		[ [ 'a', 'd', 'b' ], 3, [ 'a', 'd', 'b' ] ],
		[ [ 'a', 'd', 'b' ], -1, [ 'a', 'd', 'a', 'd', 'b' ] ],
		[ [ 'a', 'd', 'b' ], '1', [ 'a' ] ],
		[ [ 'a', 'd', 'b' ], '', [ 'd', 'b' ] ],
	] )( 'when given %p with index %p it returns %p', ( input, index, expected ) => {
		expect( removeAtIndex( input, index ) ).toStrictEqual( expected );
	} );
} );

describe( 'Returns an invalid array for a valid input array with falseful or empty index', () => {
	test.each( [
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
