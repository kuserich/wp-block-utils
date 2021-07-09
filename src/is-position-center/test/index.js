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
import isPositionCenter from '../';

/**
 * Set of falsey and empty values for testing.
 *
 * @ignore
 */
import { falsey, empties } from '../../utils';

describe( 'isPositionCenter', () => {
	describe( 'Returns boolean primitive "true" for string "center" or "center center"', () => {
		it.each( [
			[ 'center', true ],
			[ 'center center', true ],
		] )( 'when given %p it returns %p', ( input, expected ) => {
			expect( isPositionCenter( input ) ).toBe( expected );
		} );
	} );

	describe( 'Should return boolean primitive "false" for invalid string', () => {
		it.each( [
			[ 'Center', false ],
			[ 'center  center', false ],
			[ 'center center center', false ],
		] )( 'when given %p it returns %p', ( input, expected ) => {
			expect( isPositionCenter( input ) ).toBe( expected );
		} );
	} );

	describe( 'Should accept falsey arguments', () => {
		const cases = map( falsey, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( isPositionCenter( input ) );
		} );
	} );

	describe( 'Should accept empty arguments', () => {
		const cases = map( empties, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( isPositionCenter( input ) );
		} );
	} );
} );
