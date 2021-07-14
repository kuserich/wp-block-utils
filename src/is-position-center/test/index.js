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
	describe( 'Should return "true" when given either "center" or "center center" position values', () => {
		it.each( [
			[ 'center', true ],
			[ 'center center', true ],
		] )( 'when given %p it returns %p', ( input, expected ) => {
			expect( isPositionCenter( input ) ).toBe( expected );
		} );
	} );

	describe( 'Should return "false" when given position value is not assumed to be center.', () => {
		it.each( [
			[ 'top', false ],
			[ '25% 75%', false ],
			[ 'left right', false ],
			[ 'bottom 50px right 100px', false ],
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
