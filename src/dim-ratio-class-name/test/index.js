/**
 * The function to be tested.
 *
 * @ignore
 */
import dimRatioClassName from '../';

describe( 'Should return a string CSS class name given an integer dim ratio', () => {
	it.each( [
		[ 1, 'has-background-dim-0' ],
		[ 7, 'has-background-dim-10' ],
		[ 30, 'has-background-dim-30' ],
		[ 100, 'has-background-dim-100' ],
	] )( 'when given %i it returns %s', ( input, expected ) => {
		expect( dimRatioClassName( input ) ).toBe( expected );
	} );
} );

describe( 'Should return a string CSS class name with rounded value given an integer or decimal dim ratio', () => {
	it.each( [
		[ 65, 'has-background-dim-70' ],
		[ 24.99, 'has-background-dim-20' ],
	] )( 'when given %d it returns %s', ( input, expected ) => {
		expect( dimRatioClassName( input ) ).toBe( expected );
	} );
} );

describe( 'Should return empty string given integer "0" or "50"', () => {
	it.each( [
		[ 0, '' ],
		[ 50, '' ],
	] )( 'when given %i it returns %p', ( input, expected ) => {
		expect( dimRatioClassName( input ) ).toBe( expected );
	} );
} );

describe( 'Should return empty string for falseful and empty values', () => {
	it.each( [
		[ '', '' ],
		[ null, '' ],
		[ false, '' ],
		[ undefined, '' ],
		[ -0, '' ],
		[ 0n, '' ],
		[ NaN, '' ],
	] )( 'when given %p it returns %s', ( input, expected ) => {
		expect( dimRatioClassName( input ) ).toBe( expected );
	} );
} );
