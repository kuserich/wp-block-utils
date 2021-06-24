/**
 * The function to be tested.
 *
 * @ignore
 */
import spaceToNbsp from '../';

describe( 'Should return valid string with empty spaces converted to corresponsding HTML character entity "&nbsp;" for valid input string', () => {
	it.each( [
		[ 'Test', 'Test' ],
		[ ' Test', '&nbsp;Test' ],
		[ 'Test example', 'Test&nbsp;example' ],
	] )( 'when given %s it returns %s', ( input, expected ) => {
		expect( spaceToNbsp( input ) ).toBe( expected );
	} );
} );

describe( 'Should return invalid string for falseful or empty value', () => {
	it.each( [
		[ {}, '[object&nbsp;Object]' ],
		[ false, 'false' ],
		[ true, 'true' ],
		[ 1, '1' ],
		[ 0, '0' ],
		[ -0, '-0' ],
		[ NaN, 'NaN' ],
	] )( 'when given %p it returns %s', ( input, expected ) => {
		expect( spaceToNbsp( input ) ).toBe( expected );
	} );
} );

describe( 'Should return empty string for falseful or empty value', () => {
	it.each( [
		[ '', '' ],
		[ [ '' ], '' ],
		[ [], '' ],
		[ undefined, '' ],
		[ null, '' ],
	] )( 'when given %p it returns %s', ( input, expected ) => {
		expect( spaceToNbsp( input ) ).toBe( expected );
	} );
} );
