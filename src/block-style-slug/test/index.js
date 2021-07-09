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
import blockStyleSlug from '../';

/**
 * Set of falsey and empty values for testing.
 *
 * @ignore
 */
import { falsey, empties } from '../../utils';

describe( 'blockStyleSlug', () => {
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

	describe( 'Should accept falsey arguments', () => {
		const cases = map( falsey, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( blockStyleSlug( input ) );
		} );
	} );

	describe( 'Should accept empty arguments', () => {
		const cases = map( empties, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( blockStyleSlug( input ) );
		} );
	} );
} );
