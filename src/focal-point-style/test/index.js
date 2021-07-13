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
import focalPointStyle from '../';

/**
 * Set of falsey and empty values for testing.
 *
 * @ignore
 */
import { falsey, empties } from '../../utils';

describe( 'focalPointStyle', () => {
	describe( 'Should return a valid x/y coordinate percentage of the given background image’s position', () => {
		it.each( [
			[ { x: 1, y: 0 }, '100% 0%' ],
			[ { x: 0.67, y: 0.65 }, '67% 65%' ],
		] )( 'when given %o it returns %s', ( input, expected ) => {
			expect( focalPointStyle( input ) ).toBe( expected );
		} );
	} );

	describe( 'Should return a valid x/y coordinate percentage of the given empty or incomplete background image’s position', () => {
		it.each( [
			[ {}, '100% 100%' ],
			[ { x: 0.25 }, '25% 100%' ],
			[ { y: 0.45 }, '100% 45%' ],
		] )( 'when given %o it returns %s', ( input, expected ) => {
			expect( focalPointStyle( input ) ).toBe( expected );
		} );
	} );

	describe( 'Should return a valid x/y coordinate percentage, neither floored nor ceiled, of the given background image’s position', () => {
		it.each( [
			[ { x: 1.5, y: 2.7 }, '150% 270%' ],
			[ { x: -1, y: -3.141 }, '-100% -314%' ],
		] )( 'when given %o it returns %s', ( input, expected ) => {
			expect( focalPointStyle( input ) ).toBe( expected );
		} );
	} );

	describe( 'Should accept falsey arguments', () => {
		const cases = map( falsey, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( focalPointStyle( input ) );
		} );
	} );

	describe( 'Should accept empty arguments', () => {
		const cases = map( empties, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( focalPointStyle( input ) );
		} );
	} );
} );
