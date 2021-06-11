/**
 * The function to be tested.
 *
 * @ignore
 */
import isNonEmptyArray from '../';

describe( "Return boolean primitive 'true' for a non-empty array object", () => {
	test.each( [
		[ [ '1', 2, true ], true ],
		[ [ { id: 'a' } ], true ],
		[ [ '' ], true ],
		[
			[
				[ '1', '2' ],
				[ '3', '4' ],
			],
			true,
		],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( isNonEmptyArray( input ) ).toStrictEqual( expected );
	} );
} );

describe( "Return boolean primitive 'false' for empty or falseful values", () => {
	test.each( [
		[ [], false ],
		[ {}, false ],
		[ 0, false ],
		[ 1, false ],
		[ '', false ],
		[ false, false ],
		[ null, false ],
		[ undefined, false ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( isNonEmptyArray( input ) ).toStrictEqual( expected );
	} );
} );
