/**
 * The function to be tested.
 *
 * @ignore
 */
import blockStyleSlug from '../';

describe( 'Should extract a valid block style name from a given string of CSS class name(s)', () => {
	it.each( [
		[ 'is-style-fancy', 'fancy' ],
		[ 'is-style-fancy123', 'fancy123' ],
		[ 'test-class-name is-style-fancy', 'fancy' ],
		[ 'class-nameis-style-fancy', 'fancy' ],
	] )( 'when given %s it returns %s', ( input, expected ) => {
		expect( blockStyleSlug( input ) ).toBe( expected );
	} );
} );

describe( 'Should return an empty string if the given string argument does not include a block style class name', () => {
	it.each( [
		[ 'IS-style-fancy', '' ],
		[ 'test-class-name', '' ],
	] )( 'when given %s it returns %s', ( input, expected ) => {
		expect( blockStyleSlug( input ) ).toBe( expected );
	} );
} );

describe( 'Should return an empty string when given falsely argument', () => {
	it.each( [
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
