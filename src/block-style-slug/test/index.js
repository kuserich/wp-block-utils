/**
 * The function to be tested.
 *
 * @ignore
 */
import blockStyleSlug from '../';

describe( 'Should extract a valid block style name from a given string of CSS class name(s)', () => {
	test.each( [
		[ 'is-style-fancy', 'fancy' ],
		[ 'is-style-fancy123', 'fancy123' ],
		[ 'is-style-ALLCAPS', 'ALLCAPS' ],
		[ 'is-style-special_char', 'special_char' ],
		[ 'test-class-name is-style-fancy', 'fancy' ],
		[ 'class-nameis-style-fancy', 'fancy' ],
	] )( 'when given %s it returns %s', ( input, expected ) => {
		expect( blockStyleSlug( input ) ).toBe( expected );
	} );
} );

describe( 'Should return an empty string when none of the given string argument of CSS class name(s) includes block style class name', () => {
	test.each( [
		[ 'IS-style-fancy', '' ],
		[ 'test-class-name', '' ],
	] )( 'when given %s it returns %s', ( input, expected ) => {
		expect( blockStyleSlug( input ) ).toBe( expected );
	} );
} );

describe( 'Should return empty string for falseful and empty values', () => {
	test.each( [
		[ false, '' ],
		[ true, '' ],
		[ null, '' ],
		[ undefined, '' ],
		[ 0, '' ],
		[ -0, '' ],
		[ 0n, '' ],
		[ NaN, '' ],
		[ 1, '' ],
		[ '', '' ],
		[ [], '' ],
		[ {}, '' ],
	] )( 'when given %p it returns %s', ( input, expected ) => {
		expect( blockStyleSlug( input ) ).toBe( expected );
	} );
} );
