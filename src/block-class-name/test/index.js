/**
 * The function to be tested.
 *
 * @ignore
 */
import blockClassName from '../';

describe( 'Matching RegEx pattern against a valid input string and return first match', () => {
	test.each( [
		[ 'wp-block-sixa-spacer', 'wp-block-sixa-spacer' ],
		[ 'wp-block-sixa-spacer123', 'wp-block-sixa-spacer123' ],
		[ 'wp-block-sixa-spacer__123', 'wp-block-sixa-spacer__123' ],
		[ 'test-wp-block-sixa-spacer', 'wp-block-sixa-spacer' ], // Containing prefix
		[ 'wp-block-sixa-spacer#', 'wp-block-sixa-spacer#' ], // Containing special character
		[ 'wp-block-sixa-spacer test-class-name', 'wp-block-sixa-spacer' ],
		[ 'wp-block-sixa-spacer wp-block-sixa-container', 'wp-block-sixa-spacer' ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( blockClassName( input ) ).toBe( expected );
	} );
} );

describe( 'Matching RegEx pattern against an invalid input', () => {
	test.each( [
		[ 'wp--block-sixa-spacer', undefined ],
		[ 'wp-\block-sixa-spacer', undefined ],
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
