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
import dimRatioClassName from '../';

/**
 * Set of falsey and empty values for testing.
 *
 * @ignore
 */
import { falsey, empties } from '../../utils';

describe( 'dimRatioClassName', () => {
	describe( 'Should return a string CSS class name given an integer dim ratio', () => {
		it.each( [
			[ 30, 'has-background-dim-30' ],
			[ 100, 'has-background-dim-100' ],
		] )( 'when given %i it returns %s', ( input, expected ) => {
			expect( dimRatioClassName( input ) ).toBe( expected );
		} );
	} );

	describe( 'Should return a string CSS class name given a numeric dim ratio rounded to precision', () => {
		it.each( [
			[ 65, 'has-background-dim-70' ],
			[ 24.99, 'has-background-dim-20' ],
		] )( 'when given %d it returns %s', ( input, expected ) => {
			expect( dimRatioClassName( input ) ).toBe( expected );
		} );
	} );

	describe( 'Should return an empty string given `0` or `50` as dim ratio', () => {
		it.each( [
			[ 0, '' ],
			[ 50, '' ],
		] )( 'when given %i it returns %p', ( input, expected ) => {
			expect( dimRatioClassName( input ) ).toBe( expected );
		} );
	} );

	describe( 'Should accept falsey arguments', () => {
		const cases = map( falsey, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( dimRatioClassName( input ) );
		} );
	} );

	describe( 'Should accept empty arguments', () => {
		const cases = map( empties, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( dimRatioClassName( input ) );
		} );
	} );
} );
