/**
 * The function to be tested.
 *
 * @ignore
 */
import isPositionCenter from '../';

describe( 'Returns boolean primitive "true" for string "center" or "center center"', () => {
	it.each( [
		[ 'center', true ],
		[ 'center center', true ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( isPositionCenter( input ) ).toBe( expected );
	} );
} );

describe( 'Should return boolean primitive "true" for falseful value', () => {
	it.each( [
		[ '', true ],
		[ null, true ],
		[ false, true ],
		[ undefined, true ],
		[ 0, true ],
		[ -0, true ],
		[ 0n, true ],
		[ NaN, true ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( isPositionCenter( input ) ).toBe( expected );
	} );
} );

describe( 'Should return boolean primitive "false" for invalid string', () => {
	it.each( [
		[ 'Center', false ],
		[ 'center  center', false ],
		[ 'center center center', false ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( isPositionCenter( input ) ).toBe( expected );
	} );
} );

describe( 'Should return boolean primitive "false" for value "true"', () => {
	it.each( [ [ true, false ] ] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( isPositionCenter( input ) ).toBe( expected );
	} );
} );

describe( 'Should return boolean primitive "false" for empty value', () => {
	it.each( [
		[ [], false ],
		[ {}, false ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( isPositionCenter( input ) ).toBe( expected );
	} );
} );
