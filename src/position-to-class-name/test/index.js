/**
 * The function to be tested.
 *
 * @ignore
 */
import positionToClassName from '../';

describe( 'Should return an empty string when given `center` or `center center` keyword(s) for x/y coordinates', () => {
	it.each( [
		[ 'center', '' ],
		[ 'center center', '' ],
	] )( 'when given %s it returns %s', ( input, expected ) => {
		expect( positionToClassName( input ) ).toBe( expected );
	} );
} );

describe( 'Should return a valid CSS class name when given valid position keyword values', () => {
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

describe( 'Should return `undefined` when given unsupported position keyword(s) by CSS.', () => {
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

describe( 'Should return an empty string when given falsely argument', () => {
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
