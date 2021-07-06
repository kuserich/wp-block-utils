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
import isNonEmptyArray from '../';

/**
 * Set of falsey and empty values for testing.
 *
 * @ignore
 */
import { falsey, empties } from '../../utils';

describe( 'isNonEmptyArray', () => {
	describe( 'Should return `true` is classified as a non-empty array object', () => {
		it.each( [
			[ [ '1', 2, true ], true ],
			[ [ { id: 'a' } ], true ],
			[ [ '' ], true ],
		] )( 'when given %p it returns %p', ( input, expected ) => {
			expect( isNonEmptyArray( input ) ).toBe( expected );
		} );
	} );

	describe( 'Should accept falsey arguments', () => {
		const cases = map( falsey, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( isNonEmptyArray( input ) );
		} );
	} );

	describe( 'Should accept empty arguments', () => {
		const cases = map( empties, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( isNonEmptyArray( input ) );
		} );
	} );
} );
