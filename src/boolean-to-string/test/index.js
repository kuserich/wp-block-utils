/**
 * The function to be tested.
 *
 * @ignore
 */
import booleanToString from '../';

describe( "Converts a boolean primitive to a 'yes' or 'no' string", () => {
	test.each( [
		[ true, 'yes' ],
		[ false, 'no' ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( booleanToString( input ) ).toBe( expected );
	} );
} );

describe( "Converts other truthful values to boolean primitive 'true'", () => {
	test.each( [
		[ 'yes', true ],
		[ 'true', true ],
		[ 'TRUE', true ],
		[ '1', true ],
		[ 1, true ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( booleanToString( input ) ).toBe( expected );
	} );
} );

describe( "Converts any other input to boolean primitive 'false'", () => {
	test.each( [
		[ '', false ],
		[ '0', false ],
		[ 'no', false ],
		[ 'false', false ],
		[ 'FALSE', false ],
		[ 0, false ],
		[ 2, false ],
		[ {}, false ],
		[ [], false ],
		[ null, false ],
		[ undefined, false ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( booleanToString( input ) ).toBe( expected );
	} );
} );
