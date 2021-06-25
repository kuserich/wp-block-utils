/**
 * The function to be tested.
 *
 * @ignore
 */
import isNonEmptyArray from '../';

describe( 'Should return `true` for a non-empty array object', () => {
	it.each( [
		[ [ '1', 2, true ], true ],
		[ [ { id: 'a' } ], true ],
		[ [ '' ], true ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( isNonEmptyArray( input ) ).toBe( expected );
	} );
} );

describe( 'Should return `false` for empty or non-arrays', () => {
	it.each( [
		[ [], false ],
		[ {}, false ],
		[ 0, false ],
		[ -0, false ],
		[ 0n, false ],
		[ NaN, false ],
		[ 1, false ],
		[ '', false ],
		[ false, false ],
		[ null, false ],
		[ undefined, false ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( isNonEmptyArray( input ) ).toBe( expected );
	} );
} );
