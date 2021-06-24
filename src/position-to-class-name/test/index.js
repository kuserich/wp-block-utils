/**
 * The function to be tested.
 *
 * @ignore
 */
import positionToClassName from '../';

describe( 'Should return content-position CSS class name string for string "center" or "center center"', () => {
	it.each( [
		[ 'center', '' ],
		[ 'center center', '' ],
	] )( 'when given %s it returns %s', ( input, expected ) => {
		expect( positionToClassName( input ) ).toBe( expected );
	} );
} );

describe( 'Should return content-position CSS class name string for other defined positions strings', () => {
	it.each( [
		[ 'top left', 'is-position-top-left' ],
		[ 'top center', 'is-position-top-center' ],
		[ 'top right', 'is-position-top-right' ],
		[ 'center left', 'is-position-center-left' ],
		[ 'center right', 'is-position-center-right' ],
		[ 'bottom left', 'is-position-bottom-left' ],
		[ 'bottom center', 'is-position-bottom-center' ],
		[ 'bottom right', 'is-position-bottom-right' ],
	] )( 'when given %s it returns %s', ( input, expected ) => {
		expect( positionToClassName( input ) ).toBe( expected );
	} );
} );

describe( 'Should return primitive "undefined" for invalid string and empty value', () => {
	it.each( [
		[ 'Top left', undefined ],
		[ 'Top  left', undefined ],
		[ 'Top left right', undefined ],
		[ [ '' ], undefined ],
		[ [], undefined ],
		[ {}, undefined ],
		[ true, undefined ],
	] )( 'when given %s it returns %s', ( input, expected ) => {
		expect( positionToClassName( input ) ).toBe( expected );
	} );
} );

describe( 'Should return empty string for falseful value', () => {
	it.each( [
		[ '', '' ],
		[ null, '' ],
		[ false, '' ],
		[ undefined, '' ],
		[ 0, '' ],
		[ -0, '' ],
		[ 0n, '' ],
		[ NaN, '' ],
	] )( 'when given %s it returns %s', ( input, expected ) => {
		expect( positionToClassName( input ) ).toBe( expected );
	} );
} );
