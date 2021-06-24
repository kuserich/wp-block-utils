/**
 * The function to be tested.
 *
 * @ignore
 */
import hexToEmoji from '../';

/**
 * RegExp pattern for removing unicode control and zero-width characters.
 *
 * @ignore
 */
const removeInvalidUnicodeChars = /[\u0000-\u001F\u007F-\u009F\u200B-\u200D\u200C\u200E\u200F\uFEFF]/g;

describe( 'Should return rendered Emoji icon for a hex-unicode', () => {
	test( 'should render single Emoji icon for a valid hex-unicode', () => {
		expect( hexToEmoji( '1f603' ) ).toStrictEqual( '😃' );
	} );

	test( 'should render multiple Emoji icons for multiple valid hex-unicodes', () => {
		expect( hexToEmoji( '1f60a 1f603' ) ).toStrictEqual( '😊😃' );
	} );
} );

describe( 'Should return invalid string for an untrimmed or multi-space separated hex-unicode', () => {
	test( 'should return invalid string for an untrimmed hex-unicode', () => {
		expect( hexToEmoji( ' 1f603 ' ) ).toStrictEqual( '&#x😃&#x;' );
	} );

	test( 'should return invalid string for multiple hex-unicodes multi-space separated', () => {
		expect( hexToEmoji( '1f60a  1f603' ) ).toStrictEqual( '😊&#x😃' );
	} );
} );

describe( 'Should return invalid string for an invalid or non-existent hex-unicode', () => {
	test( 'should return invalid string for a non-existent hex-unicode', () => {
		expect( hexToEmoji( '1fz99' ).replace( removeInvalidUnicodeChars, '' ) ).toStrictEqual( 'z99;' );
	} );

	test( 'should return invalid string for an invalid hex-unicode', () => {
		expect( hexToEmoji( 'test123' ).replace( removeInvalidUnicodeChars, '' ) ).toStrictEqual( '&#xtest123;' );
	} );
} );

describe( 'Should return invalid string for falseful or empty value', () => {
	test.each( [
		[ [], '&#x;' ],
		[ {}, '&#x[object&#xobject];' ],
		[ 0, '�' ], // Returns replacement character, which replaces an invalid or unrecognizable character.
		[ 1, '' ],
		[ '', '&#x;' ],
		[ false, 'úlse;' ], // Returns unicode character `ú`, UTF-16 encoded as 0x00FA.
		[ null, '&#x;' ],
		[ undefined, '&#x;' ],
	] )( 'when given %p it returns %s', ( input, expected ) => {
		expect( hexToEmoji( input ).replace( removeInvalidUnicodeChars, '' ) ).toStrictEqual( expected );
	} );
} );
