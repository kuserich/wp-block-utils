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
import stringifyQuery from '../';

/**
 * Set of falsey and empty values for testing.
 *
 * @ignore
 */
import { falsey, empties } from '../../utils';

describe( 'stringifyQuery', () => {
	describe( 'Should return stringified array of objects given an array of objects with a single key/value pair', () => {
		it.each( [ [ [ { product: '1885' }, { action: 'hook_name' } ], 'product=1885&action=hook_name' ] ] )(
			'when given %o it returns %s',
			( input, expected ) => {
				expect( stringifyQuery( input ) ).toBe( expected );
			}
		);
	} );

	describe( 'Should return an invalid string if the given array input does not include a valid array of objects with a single key/value pair', () => {
		it.each( [
			[ [ { product: '1885', action: 'hook_name' } ], 'product,action=1885,hook_name' ],
		] )( 'when given %o it returns %s', ( input, expected ) => {
			expect( stringifyQuery( input ) ).toBe( expected );
		} );
	} );

	describe( 'Should accept falsey arguments', () => {
		const cases = map( falsey, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( stringifyQuery( input ) );
		} );
	} );

	describe( 'Should accept empty arguments', () => {
		const cases = map( empties, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( stringifyQuery( input ) );
		} );
	} );
} );
