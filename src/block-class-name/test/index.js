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
import blockClassName from '../';

/**
 * Set of falsey and empty values for testing.
 *
 * @ignore
 */
import { falsey, empties } from '../../utils';

describe( 'blockClassName', () => {
	describe( 'Should return the block-specific generated CSS class name when given a string argument containing the class name(s)', () => {
		it.each( [
			[ 'wp-block-sixa-spacer', 'wp-block-sixa-spacer' ],
			[ 'wp-block-sixa-spacer123', 'wp-block-sixa-spacer123' ],
			[ 'wp-block-sixa__spacer', 'wp-block-sixa__spacer' ],
			[ 'test-wp-block-sixa-spacer', 'wp-block-sixa-spacer' ], // Containing prefix
			[ 'wp-block-sixa-spacer test-class-name', 'wp-block-sixa-spacer' ],
		] )( 'when given %s it returns %s', ( input, expected ) => {
			expect( blockClassName( input ) ).toBe( expected );
		} );
	} );

	it( 'Should return the first block-specific generated CSS class name when given a string argument containing multiple candidates', () => {
		expect( blockClassName( 'wp-block-sixa-spacer wp-block-sixa-container' ) ).toBe( 'wp-block-sixa-spacer' );
	} );

	describe( 'Should accept falsey arguments', () => {
		const cases = map( falsey, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( blockClassName( input ) );
		} );
	} );

	describe( 'Should accept empty arguments', () => {
		const cases = map( empties, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( blockClassName( input ) );
		} );
	} );
} );
