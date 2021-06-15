/**
 * The function to be tested.
 *
 * @ignore
 */
import blockStyleSlug from '../';

describe( 'Returns string with slug for valid style string', () => {
	test.each( [
		[ 'is-style-fancy', 'fancy' ],
		[ 'is-style-fancy123', 'fancy123' ],
		[ 'is-style-ALLCAPS', 'ALLCAPS' ],
		[ 'is-style-special_char', 'special_char' ],
		[ 'test-is-style-with-prefix', 'with-prefix' ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( blockStyleSlug( input ) ).toStrictEqual( expected );
	} );
} );

describe( 'Returns string with slug for valid style string with separated class names', () => {
	test.each( [
		[ 'test-class-name is-style-fancy', 'fancy' ],
		[ 'class-nameis-style-fancy', 'fancy' ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( blockStyleSlug( input ) ).toStrictEqual( expected );
	} );
} );

describe( 'Returns empty string for invalid style string', () => {
	test.each( [
		[ 'IS-style-fancy', '' ],
		[ 'test-class-name', '' ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( blockStyleSlug( input ) ).toStrictEqual( expected );
	} );
} );

describe( 'Returns empty string for falseful and empty values', () => {
	test.each( [
		[ '', '' ],
		[ [], '' ],
		[ {}, '' ],
		[ null, '' ],
		[ undefined, '' ],
		[ false, '' ],
		[ true, '' ],
		[ 0, '' ],
		[ 1, '' ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( blockStyleSlug( input ) ).toStrictEqual( expected );
	} );
} );
