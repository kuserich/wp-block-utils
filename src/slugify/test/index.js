/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { map } from 'lodash';

/**
 * The function to be tested.
 *
 * @ignore
 */
import slugify from '../';

/**
 * Set of falsey and empty values for testing.
 *
 * @ignore
 */
import { falsey, empties } from '../../utils';

describe( 'slugify', () => {
	it( 'Should replace whitespaces between words with dashes', () => {
		const input = 'my slug';
		const expected = 'my-slug';
		expect( slugify( input ) ).toBe( expected );
	} );

	it( 'Should remove trailing and leading whitespaces', () => {
		const input = ' my slug ';
		const expected = 'my-slug';
		expect( slugify( input ) ).toBe( expected );
	} );

	it( 'Should lowercase capital letters', () => {
		const input = 'My Slug';
		const expected = 'my-slug';
		expect( slugify( input ) ).toBe( expected );
	} );

	describe( 'Should replace symbols', () => {
		// These cases are only a tiny subset of all symbols that
		// are replaced. For a list of all symbols, please refer
		// to the test cases of the slugify NPM package.
		// @see https://github.com/simov/slugify/blob/master/test/slugify.js
		it.each( [
			[ 'my $ slug', 'my-dollar-slug' ],
			[ 'my > slug', 'my-greater-slug' ],
			[ 'unicode is ♥', 'unicode-is-love' ],
			[ 'unicode is ☢', 'unicode-is-☢' ],
		] )( 'when given %s it returns %s', ( input, expected ) => {
			expect( slugify( input ) ).toBe( expected );
		} );
	} );

	describe( 'Should strip all HTML tags including script and style', () => {
		it.each( [
			[ '<a href="https://example.com">lorem ipsum<strong>dolor</strong></a>', 'lorem-ipsumdolor' ],
			[ '<style>html { color: red; }</style>', 'html-color-red' ],
			[ '<script>alert("hello world");</script>', 'alerthello-world' ],
		] )( 'when given %s it returns %s', ( input, expected ) => {
			expect( slugify( input ) ).toBe( expected );
		} );
	} );

	describe( 'Should accept falsey arguments', () => {
		const cases = map( falsey, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( slugify( input ) );
		} );
	} );
} );
