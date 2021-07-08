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
	describe( 'Should return stringified array of objects given an array of object(s)', () => {
		it.each( [
			[ { id: 1 }, '{"id":1}' ],
			[ [ { id: 1, product: '1885' }, { action: 'hook_name' } ], '[{"id":1,"product":"1885"},{"action":"hook_name"}]' ],
		] )( 'when given %o it returns %s', ( input, expected ) => {
			expect( stringify( input ) ).toBe( expected );
		} );
	} );

	describe( 'Should remove unsupported values including but not limited to `undefined`, `Symbol()` or `function(){}` from the output object', () => {
		it.each( [
			[ { id: 1, product: undefined }, '{"id":1}' ],
			[ { id: 1, product: function(){} }, '{"id":1}' ],
			[ { id: 1, product: Symbol() }, '{"id":1}' ],
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
