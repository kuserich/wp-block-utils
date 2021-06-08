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
		[ 'yes', true ],
		[ 'true', true ],
		[ 'TRUE', true ],
		[ '1', true ],
		[ 1, true ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( booleanToString( input ) ).toBe( expected );
	} );
} );

describe( "Converts any other input to a 'no' string", () => {
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
