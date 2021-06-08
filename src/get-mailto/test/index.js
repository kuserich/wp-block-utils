/**
 * The function to be tested.
 *
 * @ignore
 */
import getMailTo from '../';

/**
 * Variations of single valid addresses
 *
 * @ignore
 */
const singleValidAddress = [
	[ 'mailto:info@example.com', [ 'info@example.com' ] ],
	[ 'mailto:test@info.com_-', [ 'test@info.com_-' ] ],
	[ 'mailto:Test-123_@_info.com', [ 'Test-123_@_info.com' ] ],
	[ 'mailto:in_fo@exa-mple.com', [ 'in_fo@exa-mple.com' ] ],
];

/**
 * Variations of single invalid addresses
 *
 * @ignore
 */
const singleInvalidAddress = [
	[ 'mailto:info@example.com#', [ 'info@example.com' ] ], // Dangling special character
	// prettier-ignore
	[ 'mailto:ex\ample@example.com', [ 'example@example.com' ] ], // Single backslash
	[ 'mailto:in\fo@example.com', [ 'o@example.com' ] ], // Escape sequence
];

/**
 * Variations of multiple valid addresses
 *
 * @ignore
 */
const multipleValidAddresses = [
	[ 'mailto:info@example.com,info@test.com', [ 'info@example.com', 'info@test.com' ] ],
	[ 'mailto:in_fo@example.com,INFO-123@test.com', [ 'in_fo@example.com', 'INFO-123@test.com' ] ],
	[ 'mailto:test@_example.c-o-m,info@test-123.com', [ 'test@_example.c-o-m', 'info@test-123.com' ] ],
];

/**
 * Variations of multiple invalid addresses
 *
 * @ignore
 */
const multipleInvalidAddresses = [
	[ 'mailto:info@example.cominfo@test.com', [ 'info@example.cominfo' ] ], // Missing comma separator
	[ 'mailto:infoexample.com,test@example.com', [ 'test@example.com' ] ], // Missing separator
	[ 'info@example.com,info@test.com', [ 'info@example.com', 'info@test.com' ] ], // Missing mailto
	[ 'mailto:info@@example.com,info@info.com', [ 'info@info.com' ] ], // Multiple '@' signs
	[ 'mailto:ex\\ample@example.com,test\\@info.com', [ 'ample@example.com' ] ], // Double backslash character before separator
	[ 'mailto:exam/ple@example.com,test/@example.com', [ 'ple@example.com' ] ], // Forward slash before separator
	[ 'mailto:in fo@example.com,te st@example.com', [ 'fo@example.com', 'st@example.com' ] ], // Space separated
	[ 'mailto:info@example.com,info@test.com,', [ 'info@example.com', 'info@test.com' ] ], // Dangling comma
	[ 'mailto:info@example.com?test@info.com', [ 'info@example.com', 'test@info.com' ] ], // Special characters instead of comma separator
];

/**
 * Variations containing special characters ('"', '#', '[]' etc.)
 *
 * @ignore
 */
const malformedAddresses = [
	[ 'mailto:info@example,com', null ], // Comma used as separator
	[ 'mailto:"test"@example.com', null ], // Using quotes
	[ 'mailto:test@[123.123.123.123]', null ], // Using brackets
	[ 'mailto:#@%^%#$@#$@#.com', null ], // Heavily malformed
	[ 'mailto:あいうえお@example.com', null ], // Non-latin characters
	[ 'mailto:example/@example.com', null ], // Forward slash before separator
	[ 'mailto:info@examplecom', null ], // Missing comma separator
	[ 'mailto:info@exampl\n.com', null ], // Escape sequence before separator
	[ 'mailto:test@example.', null ], // Incomplete address
	[ 'mailto', null ], // Missing address
];

/**
 * Variations containing falseful values
 *
 * @ignore
 */
const falsefulValues = [
	[ [ '' ], null ],
	[ [], null ],
	[ {}, null ],
	[ '', null ],
	[ undefined, null ],
	[ null, null ],
	[ false, null ],
];

describe( 'Match RegEx pattern against an input string', () => {
	describe( 'against a single valid address', () => {
		test.each( singleValidAddress )( 'when given %p it returns %p', ( input, expected ) => {
			expect( getMailTo( input ) ).toStrictEqual( expected );
		} );
	} );

	describe( 'against a single invalid address', () => {
		test.each( singleInvalidAddress )( 'when given %p it returns %p', ( input, expected ) => {
			expect( getMailTo( input ) ).toStrictEqual( expected );
		} );
	} );

	describe( 'against multiple valid addresses', () => {
		test.each( multipleValidAddresses )( 'when given %p it returns %p', ( input, expected ) => {
			expect( getMailTo( input ) ).toStrictEqual( expected );
		} );
	} );

	describe( 'against multiple invalid addresses', () => {
		test.each( multipleInvalidAddresses )( 'when given %p it returns %p', ( input, expected ) => {
			expect( getMailTo( input ) ).toStrictEqual( expected );
		} );
	} );

	describe( 'against malformed addresses', () => {
		test.each( malformedAddresses )( 'when given %p it returns %p', ( input, expected ) => {
			expect( getMailTo( input ) ).toStrictEqual( expected );
		} );
	} );

	describe( 'against empty or falseful inputs', () => {
		test.each( falsefulValues )( 'when given %p it returns %p', ( input, expected ) => {
			expect( getMailTo( input ) ).toStrictEqual( expected );
		} );
	} );
} );
