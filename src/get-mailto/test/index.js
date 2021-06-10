/**
 * The function to be tested.
 *
 * @ignore
 */
import getMailTo from '../';

describe( 'Returns array with single email address for valid mailto string', () => {
	test.each( [
		[ 'mailto:info@example.com', [ 'info@example.com' ] ],
		[ 'mailto:info@example.com,', [ 'info@example.com' ] ], // Dangling comma
		[ 'mailto:firstname.lastname@sub.domain.com', [ 'firstname.lastname@sub.domain.com' ] ],
		[ 'mailto:mail_with_underscores@domain_with_underscore.com', [ 'mail_with_underscores@domain_with_underscore.com' ] ],
		[ 'mailto:mail-with-dash@domain-with-dash.com', [ 'mail-with-dash@domain-with-dash.com' ] ],
		[ 'mailto:ALLCAPS@EXAMPLE.COM', [ 'ALLCAPS@EXAMPLE.COM' ] ],
		[ 'mailto:info1234@example1234.com', [ 'info1234@example1234.com' ] ],
		[ 'info@example.com,', [ 'info@example.com' ] ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( getMailTo( input ) ).toStrictEqual( expected );
	} );
} );

describe( 'Returns array with all email addresses for valid mailto string with separated email addresses', () => {
	test.each( [
		[ 'mailto:info@example.com,another@example.com', [ 'info@example.com', 'another@example.com' ] ],
		[ 'mailto:info@example.com, another@example.com', [ 'info@example.com', 'another@example.com' ] ],
		[ 'mailto:info@example.com another@example.com', [ 'info@example.com', 'another@example.com' ] ],
		[ 'mailto:info@example.com,another@example.com, onemore@example.com', [ 'info@example.com', 'another@example.com', 'onemore@example.com' ] ], // Mixed separation
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( getMailTo( input ) ).toStrictEqual( expected );
	} );
} );

describe( 'Returns array with single truncated email address for invalid mailto string with separated email addresses', () => {
	test.each( [
		[ 'mailto:forward/slash@example.com,test/@example.com', [ 'slash@example.com' ] ], // Forward slash before separator
		[ 'mailto:special|character@example.com', [ 'character@example.com' ] ], // Special character
		[ 'mailto:info@example.cominfo@test.com', [ 'info@example.cominfo' ] ], // Missing comma separator
		[ 'mailto:infoexample.com,test@example.com', [ 'test@example.com' ] ], // Missing email separator
		[ 'mailto:info@@example.com,info@info.com', [ 'info@info.com' ] ], // Multiple '@' signs
		[ 'mailto:in fo@example.com', [ 'fo@example.com' ] ], // Space separated
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( getMailTo( input ) ).toStrictEqual( expected );
	} );
} );

describe( "Returns primitive 'null' for invalid mailto string", () => {
	test.each( [
		[ 'mailto:info@exampl\n.com', null ], // Escape sequence before separator
		[ 'mailto:info@example,com', null ], // Comma used as separator
		[ 'mailto:"test"@example.com', null ], // Using quotes
		[ 'mailto:test@[123.123.123.123]', null ], // Using brackets
		[ 'mailto:#@%^%#$@#$@#.com', null ], // Heavily malformed
		[ 'mailto:あいうえお@example.com', null ], // Non-latin characters
		[ 'mailto:info@examplecom', null ], // Missing email separator
		[ 'mailto:test@example.', null ], // Incomplete address
		[ 'mailto', null ], // Missing address
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( getMailTo( input ) ).toStrictEqual( expected );
	} );
} );

describe( "Returns primitive 'null' for falseful values", () => {
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
