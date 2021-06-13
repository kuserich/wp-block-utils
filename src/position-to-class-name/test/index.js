/**
 * The function to be tested.
 *
 * @ignore
 */
import positionToClassName from '../';

describe( "Returns content-position CSS class name string for string 'center' or 'center center'", () => {
	test.each( [
		[ 'center', '' ],
		[ 'center center', '' ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( positionToClassName( input ) ).toStrictEqual( expected );
	} );
} );

describe( 'Returns content-position CSS class name string for other defined positions strings', () => {
	test.each( [
		[ 'top left', 'is-position-top-left' ],
		[ 'top center', 'is-position-top-center' ],
		[ 'top right', 'is-position-top-right' ],
		[ 'center left', 'is-position-center-left' ],
		[ 'center right', 'is-position-center-right' ],
		[ 'bottom left', 'is-position-bottom-left' ],
		[ 'bottom center', 'is-position-bottom-center' ],
		[ 'bottom right', 'is-position-bottom-right' ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( positionToClassName( input ) ).toStrictEqual( expected );
	} );
} );

describe( "Returns primitive 'undefined' for invalid string and empty value", () => {
	test.each( [
		[ 'Top left', undefined ],
		[ 'Top  left', undefined ],
		[ 'Top left right', undefined ],
		[ [ '' ], undefined ],
		[ [], undefined ],
		[ {}, undefined ],
		[ true, undefined ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( positionToClassName( input ) ).toBe( expected );
	} );
} );

describe( 'Returns empty string for falseful value', () => {
	test.each( [
		[ '', '' ],
		[ null, '' ],
		[ false, '' ],
		[ undefined, '' ],
		[ 0, '' ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( positionToClassName( input ) ).toBe( expected );
	} );
} );
