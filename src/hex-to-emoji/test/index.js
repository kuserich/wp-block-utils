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
import hexToEmoji from '../';

/**
 * Set of falsey and empty values for testing.
 *
 * @ignore
 */
import { falsey, empties } from '../../utils';

/**
 * RegExp pattern for removing unicode control and zero-width characters.
 *
 * @ignore
 */
const removeInvalidUnicodeChars = /[\u0000-\u001F\u007F-\u009F\u200B-\u200D\u200C\u200E\u200F\uFEFF]/g;

describe( 'hexToEmoji', () => {
	it( 'Should render single Emoji icon for a valid hex-unicode', () => {
		expect( hexToEmoji( '1f603' ) ).toStrictEqual( '😃' );
	} );

	it( 'Should render multiple Emoji icons for multiple valid hex-unicodes', () => {
		expect( hexToEmoji( '1f60a 1f603' ) ).toStrictEqual( '😊😃' );
	} );

	it( 'Should return invalid string for an untrimmed hex-unicode', () => {
		expect( hexToEmoji( ' 1f603 ' ) ).toStrictEqual( '&#x😃&#x;' );
	} );

	it( 'Should return invalid string for multiple hex-unicodes multi-space separated', () => {
		expect( hexToEmoji( '1f60a  1f603' ) ).toStrictEqual( '😊&#x😃' );
	} );

	it( 'Should return invalid string for a non-existent hex-unicode', () => {
		expect( hexToEmoji( '1fz99' ).replace( removeInvalidUnicodeChars, '' ) ).toStrictEqual( 'z99;' );
	} );

	it( 'Should return invalid string for an invalid hex-unicode', () => {
		expect( hexToEmoji( 'test123' ).replace( removeInvalidUnicodeChars, '' ) ).toStrictEqual( '&#xtest123;' );
	} );

	describe( 'Should accept falsey arguments', () => {
		const cases = map( falsey, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( hexToEmoji( input ) );
		} );
	} );

	describe( 'Should accept empty arguments', () => {
		const cases = map( empties, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( hexToEmoji( input ) );
		} );
	} );
} );
