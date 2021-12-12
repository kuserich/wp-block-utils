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
import pullMode from '../';

/**
 * Set of falsey and empty values for testing.
 *
 * @ignore
 */
import { empties } from '../../utils';

describe( 'pullMode', () => {
	describe( 'Should return the most frequent item from an array', () => {
		it.each( [
			[ [ 'a', 'b', 'b' ], 'b' ],
			[ [ 'a', 'b', 'b', 'c', 'c', 'c' ], 'c' ],
		] )( 'when given %s it returns %s', ( input, expected ) => {
			expect( pullMode( input ) ).toBe( expected );
		} );
	} );

	it( 'Should return the most frequent item from an array when given an array with a single item', () => {
		const input = [ 'a' ];
		const expected = 'a';
		expect( pullMode( input ) ).toBe( expected );
	} );

	it( 'Should return the most frequent item from an array when given an array with a single distinct item', () => {
		const input = [ 'a', 'a', 'a', 'a' ];
		const expected = 'a';
		expect( pullMode( input ) ).toBe( expected );
	} );

	describe( 'Should accept empty arguments', () => {
		const cases = map( empties, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( pullMode( input ) );
		} );
	} );
} );
