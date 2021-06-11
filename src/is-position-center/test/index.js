/**
 * The function to be tested.
 *
 * @ignore
 */
import isPositionCenter from '../';

describe( "Returns boolean primitive 'true' for string 'center' or 'center center'", () => {
	test.each( [
		[ 'center', true ],
		[ 'center center', true ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( isPositionCenter( input ) ).toBe( expected );
	} );
} );

describe( "Returns boolean primitive 'true' for falseful value", () => {
	test.each( [
		[ '', true ],
		[ null, true ],
		[ false, true ],
		[ undefined, true ],
		[ 0, true ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( isPositionCenter( input ) ).toBe( expected );
	} );
} );

describe( "Returns boolean primitive 'false' for invalid string or empty value", () => {
	test.each( [
		[ 'Center', false ],
		[ 'center  center', false ],
		[ 'center center center', false ],
		[ [ '' ], false ],
		[ [], false ],
		[ {}, false ],
		[ true, false ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( isPositionCenter( input ) ).toBe( expected );
	} );
} );
