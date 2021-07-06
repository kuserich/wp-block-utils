/**
 * The function to be tested.
 *
 * @ignore
 */
import booleanToString from '../';

describe( 'Should convert a boolean primitive to a "yes" or "no" string', () => {
	it.each( [
		[ true, 'yes' ],
		[ false, 'no' ],
	] )( 'when given %p it returns %s', ( input, expected ) => {
		expect( booleanToString( input ) ).toBe( expected );
	} );
} );

describe( 'Should convert other truthful values to boolean primitive "true"', () => {
	it.each( [
		[ 'yes', true ],
		[ 'true', true ],
		[ 'TRUE', true ],
		[ '1', true ],
	] )( 'when given %s it returns %p', ( input, expected ) => {
		expect( booleanToString( input ) ).toBe( expected );
	} );
} );

describe( 'Should convert any other input to boolean primitive "false"', () => {
	it.each( [
		[ '', false ],
		[ '0', false ],
		[ 'no', false ],
		[ 'false', false ],
		[ 'FALSE', false ],
		[ 2, false ],
		[ {}, false ],
		[ [], false ],
		[ null, false ],
		[ undefined, false ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( booleanToString( input ) ).toBe( expected );
	} );
} );
