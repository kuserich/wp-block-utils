/**
 * The function to be tested.
 *
 * @ignore
 */
import blockClassName from '../';

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

describe( 'Should return the first block-specific generated CSS class name when given a string argument containing multiple candidates', () => {
	it.each( [ [ 'wp-block-sixa-spacer wp-block-sixa-container', 'wp-block-sixa-spacer' ] ] )( 'when given %s it returns %s', ( input, expected ) => {
		expect( blockClassName( input ) ).toBe( expected );
	} );
} );

describe( 'Should return `undefined` when the given argument doesn’t contain a valid string of CSS class name(s)', () => {
	it.each( [
		[ 'wp--block-sixa-spacer', undefined ],
		[ [ '' ], undefined ],
		[ '', undefined ],
		[ [], undefined ],
		[ {}, undefined ],
		[ null, undefined ],
		[ undefined, undefined ],
		[ false, undefined ],
		[ true, undefined ],
		[ 0, undefined ],
		[ -0, undefined ],
		[ 0n, undefined ],
		[ 1, undefined ],
		[ NaN, undefined ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( blockClassName( input ) ).toBe( expected );
	} );
} );
