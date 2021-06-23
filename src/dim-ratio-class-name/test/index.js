/**
 * The function to be tested.
 *
 * @ignore
 */
import dimRatioClassName from '../';

describe( 'Should return string with valid CSS class name for valid ratio or opacity number input', () => {
	test.each( [
		[ 1, 'has-background-dim-0' ],
		[ 7, 'has-background-dim-10' ],
		[ 30, 'has-background-dim-30' ],
		[ 100, 'has-background-dim-100' ],
	] )( 'when given %i it returns %s', ( input, expected ) => {
		expect( dimRatioClassName( input ) ).toBe( expected );
	} );
} );

describe( 'Should return string with valid rounded CSS class name for valid ratio or opacity number input', () => {
	test.each( [
		[ 65, 'has-background-dim-70' ],
		[ 24.99, 'has-background-dim-20' ],
	] )( 'when given %d it returns %s', ( input, expected ) => {
		expect( dimRatioClassName( input ) ).toBe( expected );
	} );
} );

describe( 'Should return empty string for valid input number "0" or "50"', () => {
	test.each( [
		[ 0, '' ],
		[ 50, '' ],
	] )( 'when given %i it returns %p', ( input, expected ) => {
		expect( dimRatioClassName( input ) ).toBe( expected );
	} );
} );

describe( 'Should return invalid string for unbounded ratio or opacity number input', () => {
	test.each( [
		[ Number.MAX_SAFE_INTEGER, 'has-background-dim-9007199254740990' ],
		[ -1, 'has-background-dim-0' ],
	] )( 'when given %i it returns %s', ( input, expected ) => {
		expect( dimRatioClassName( input ) ).toBe( expected );
	} );
} );

describe( 'Should return empty string for falseful and empty values', () => {
	test.each( [
		[ '', '' ],
		[ null, '' ],
		[ false, '' ],
		[ undefined, '' ],
		[ -0, '' ],
		[ 0n, '' ],
		[ NaN, '' ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( dimRatioClassName( input ) ).toBe( expected );
	} );
} );
