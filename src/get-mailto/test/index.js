/**
 * The function to be tested.
 *
 * @ignore
 */
import getMailTo from '../';

describe( 'Matching RegEx pattern against a single valid address should return a single item array', () => {
	test.each( [
		[ 'mailto:info@example.com', [ 'info@example.com' ] ],
		[ 'mailto:test@info.com_-', [ 'test@info.com_-' ] ],
		[ 'mailto:Test-123_@_info.com', [ 'Test-123_@_info.com' ] ],
		[ 'mailto:in_fo@exa-mple.com', [ 'in_fo@exa-mple.com' ] ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( getMailTo( input ) ).toStrictEqual( expected );
	} );
} );

describe( 'Matching RegEx pattern against multiple valid addresses should return a multiple item array', () => {
	test.each( [
		[ 'mailto:info@example.com,info@test.com', [ 'info@example.com', 'info@test.com' ] ],
		[ 'mailto:in_fo@example.com,INFO-123@test.com', [ 'in_fo@example.com', 'INFO-123@test.com' ] ],
		[ 'mailto:test@_example.c-o-m,info@test-123.com', [ 'test@_example.c-o-m', 'info@test-123.com' ] ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( getMailTo( input ) ).toStrictEqual( expected );
	} );
} );

describe( 'Matching RegEx pattern against multiple valid and invalid addresses should return a single or multiple item array', () => {
	test.each( [
		[ 'mailto:info@example.cominfo@test.com', [ 'info@example.cominfo' ] ], // Missing comma separator
		[ 'mailto:infoexample.com,test@example.com', [ 'test@example.com' ] ], // Missing separator
		[ 'info@example.com,info@test.com', [ 'info@example.com', 'info@test.com' ] ], // Missing mailto
		[ 'mailto:info@@example.com,info@info.com', [ 'info@info.com' ] ], // Multiple '@' signs
		[ 'mailto:ex\\ample@example.com,test\\@info.com', [ 'ample@example.com' ] ], // Double backslash character before separator
		[ 'mailto:exam/ple@example.com,test/@example.com', [ 'ple@example.com' ] ], // Forward slash before separator
		[ 'mailto:in fo@example.com,te st@example.com', [ 'fo@example.com', 'st@example.com' ] ], // Space separated
		[ 'mailto:info@example.com,info@test.com,', [ 'info@example.com', 'info@test.com' ] ], // Dangling comma
		[ 'mailto:info@example.com?test@info.com', [ 'info@example.com', 'test@info.com' ] ], // Special characters instead of comma separator
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( getMailTo( input ) ).toStrictEqual( expected );
	} );
} );

describe( "Matching RegEx pattern against a single invalid address should return primitive 'null'", () => {
	test.each( [
		[ 'mailto:info@exampl\n.com', null ], // Escape sequence before separator
		[ 'mailto:info@example,com', null ], // Comma used as separator
		[ 'mailto:"test"@example.com', null ], // Using quotes
		[ 'mailto:test@[123.123.123.123]', null ], // Using brackets
		[ 'mailto:#@%^%#$@#$@#.com', null ], // Heavily malformed
		[ 'mailto:あいうえお@example.com', null ], // Non-latin characters
		[ 'mailto:example/@example.com', null ], // Forward slash before separator
		[ 'mailto:info@examplecom', null ], // Missing comma separator
		[ 'mailto:test@example.', null ], // Incomplete address
		[ 'mailto', null ], // Missing address
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( getMailTo( input ) ).toStrictEqual( expected );
	} );
} );

describe( "Matching RegEx pattern against any other input should return primitive 'null'", () => {
	test.each( [
		[ [ '' ], null ],
		[ [], null ],
		[ {}, null ],
		[ '', null ],
		[ 0, null ],
		[ 1, null ],
		[ true, null ],
		[ false, null ],
		[ undefined, null ],
		[ null, null ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( getMailTo( input ) ).toStrictEqual( expected );
	} );
} );
