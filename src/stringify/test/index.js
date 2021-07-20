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
	describe( 'Should return a JSON string given a JavaScript object.', () => {
		it.each( [
			[ { id: 1 }, '{"id":1}' ],
			[ [ { id: 1, product: '1885' }, { action: 'hook_name' } ], '[{"id":1,"product":"1885"},{"action":"hook_name"}]' ],
		] )( 'when given %o it returns %s', ( input, expected ) => {
			expect( stringify( input ) ).toBe( expected );
		} );
	} );

	describe( 'Should remove unsupported values from the output', () => {
		it.each( [
			[ { id: 1, product: undefined }, '{"id":1}' ],
			[ { id: 1, cb: () => {} }, '{"id":1}' ],
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
