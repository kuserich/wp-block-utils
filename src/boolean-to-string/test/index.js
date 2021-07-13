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
import booleanToString from '../';

/**
 * Set of falsey and empty values for testing.
 *
 * @ignore
 */
import { falsey, empties } from '../../utils';

describe( 'booleanToString', () => {
	describe( 'Should convert a boolean primitive to a "yes" or "no" string', () => {
		it.each( [
			[ true, 'yes' ],
			[ false, 'no' ],
		] )( 'when given %p it returns %s', ( input, expected ) => {
			expect( booleanToString( input ) ).toBe( expected );
		} );
	} );

	describe( 'Should convert other truthful values to boolean primitive "true"', () => {
		it.each( [
			[ 'yes', true ],
			[ 'true', true ],
			[ 'TRUE', true ],
			[ '1', true ],
		] )( 'when given %s it returns %p', ( input, expected ) => {
			expect( booleanToString( input ) ).toBe( expected );
		} );
	} );

	describe( 'Should accept falsey arguments', () => {
		const cases = map( falsey, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( booleanToString( input ) );
		} );
	} );

	describe( 'Should accept empty arguments', () => {
		const cases = map( empties, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( booleanToString( input ) );
		} );
	} );
} );
