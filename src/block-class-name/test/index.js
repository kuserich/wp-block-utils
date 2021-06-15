/**
 * The function to be tested.
 *
 * @ignore
 */
import blockClassName from '../';

describe( 'Return string with single CSS class name for the first match of valid block specific string', () => {
	test.each( [
		[ 'wp-block-sixa-spacer', 'wp-block-sixa-spacer' ],
		[ 'wp-block-sixa-spacer123', 'wp-block-sixa-spacer123' ],
		[ 'wp-block-sixa__spacer', 'wp-block-sixa__spacer' ],
		[ 'test-wp-block-sixa-spacer', 'wp-block-sixa-spacer' ], // Containing prefix
		[ 'wp-block-sixa-spacer test-class-name', 'wp-block-sixa-spacer' ],
		[ 'wp-block-sixa-spacer wp-block-sixa-container', 'wp-block-sixa-spacer' ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( blockClassName( input ) ).toBe( expected );
	} );
} );

describe( "Return primitive 'undefined' for invalid block specific string", () => {
	test.each( [
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
		[ 1, undefined ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( blockClassName( input ) ).toBe( expected );
	} );
} );
