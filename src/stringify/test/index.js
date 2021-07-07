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
import stringify from '../';

/**
 * Set of falsey and empty values for testing.
 *
 * @ignore
 */
import { falsey, empties } from '../../utils';

describe( 'stringify', () => {
	describe( 'Should return stringified array of objects given an array of objects with a single key/value pair', () => {
		it.each( [
			[ { id: 1 }, '{"id":1}' ],
			[ [ { id: 1, product: '1885' }, { action: 'hook_name' } ], '[{"id":1,"product":"1885"},{"action":"hook_name"}]' ],
		] )( 'when given %o it returns %s', ( input, expected ) => {
			expect( stringify( input ) ).toBe( expected );
		} );
	} );

	describe( 'Should return a stringified empty object given the array input includes a key/value pair with an unsupported value including but not limited to `undefined` or `Symbol()`', () => {
		it.each( [
			[ { product: undefined }, '{}' ],
			[ { product: Symbol() }, '{}' ],
		] )( 'when given %o it returns %s', ( input, expected ) => {
			expect( stringify( input ) ).toBe( expected );
		} );
	} );

	describe( 'Should accept falsey arguments', () => {
		const cases = map( falsey, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( stringify( input ) );
		} );
	} );

	describe( 'Should accept empty arguments', () => {
		const cases = map( empties, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( stringify( input ) );
		} );
	} );
} );
