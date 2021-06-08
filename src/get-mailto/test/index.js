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
	// Dangling special character
	[ 'mailto:info@example.com#', [ 'info@example.com' ] ],
	// Single Back slash
	// prettier-ignore
	[ 'mailto:ex\ample@example.com', [ 'example@example.com' ] ],
	// Escape sequence
	[ 'mailto:in\fo@example.com', [ 'o@example.com' ] ],
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
	// Missing comma separator
	[ 'mailto:info@example.cominfo@test.com', [ 'info@example.cominfo' ] ],
	// Missing separator
	[ 'mailto:infoexample.com,test@example.com', [ 'test@example.com' ] ],
	// Missing mailto
	[ 'info@example.com,info@test.com', [ 'info@example.com', 'info@test.com' ] ],
	// Multiple '@' signs
	[ 'mailto:info@@example.com,info@info.com', [ 'info@info.com' ] ],
	// Double Backslash character before separator
	[ 'mailto:ex\\ample@example.com,test\\@info.com', [ 'ample@example.com' ] ],
	// Forward slash before separator
	[ 'mailto:exam/ple@example.com,test/@example.com', [ 'ple@example.com' ] ],
	// Space separated
	[ 'mailto:in fo@example.com,te st@example.com', [ 'fo@example.com', 'st@example.com' ] ],
	// Dangling comma
	[ 'mailto:info@example.com,info@test.com,', [ 'info@example.com', 'info@test.com' ] ],
	// Special characters instead of comma separator
	[ 'mailto:info@example.com?test@info.com', [ 'info@example.com', 'test@info.com' ] ],
];

/**
 * Variations containing special characters ('"', '#', '[]' etc.)
 *
 * @ignore
 */
const malformedAddresses = [
	// Comma used as separator
	[ 'mailto:info@example,com', null ],
	// Using quotes
	[ 'mailto:"test"@example.com', null ],
	// Using brackets
	[ 'mailto:test@[123.123.123.123]', null ],
	// Heavily malformed
	[ 'mailto:#@%^%#$@#$@#.com', null ],
	// Non-latin characters
	[ 'mailto:あいうえお@example.com', null ],
	// Forward slash before separator
	[ 'mailto:example/@example.com', null ],
	// Missing comma separator
	[ 'mailto:info@examplecom', null ],
	// Escape sequence before separator
	[ 'mailto:info@exampl\n.com', null ],
	// Incomplete address
	[ 'mailto:test@example.', null ],
	// Missing address
	[ 'mailto', null ],
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

describe( 'Match RegEx pattern against sets of inputs', () => {
	describe( 'against single valid addresses', () => {
		test.each( singleValidAddress )( 'when given %p it returns %p', ( input, expected ) => {
			expect( getMailTo( input ) ).toStrictEqual( expected );
		} );
	} );

	describe( 'against single invalid addresses', () => {
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
