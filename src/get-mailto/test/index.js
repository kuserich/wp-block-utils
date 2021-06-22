/**
 * The function to be tested.
 *
 * @ignore
 */
import getMailTo from '../';

describe( 'Returns array with single email address for valid mailto string', () => {
	it.each( [
		[ 'mailto:info@example.com', [ 'info@example.com' ] ],
		[ 'mailto:info@example.com,', [ 'info@example.com' ] ], // Dangling comma
		[ 'mailto:firstname.lastname@sub.domain.com', [ 'firstname.lastname@sub.domain.com' ] ],
		[ 'mailto:mail_with_underscores@domain_with_underscore.com', [ 'mail_with_underscores@domain_with_underscore.com' ] ],
		[ 'mailto:mail-with-dash@domain-with-dash.com', [ 'mail-with-dash@domain-with-dash.com' ] ],
		[ 'mailto:ALLCAPS@EXAMPLE.COM', [ 'ALLCAPS@EXAMPLE.COM' ] ],
		[ 'mailto:info1234@example1234.com', [ 'info1234@example1234.com' ] ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( getMailTo( input ) ).toStrictEqual( expected );
	} );
} );

describe( 'Returns array with all email addresses for valid mailto string with separated email addresses', () => {
	it.each( [
		[ 'mailto:info@example.com,another@example.com', [ 'info@example.com', 'another@example.com' ] ],
		[ 'mailto:info@example.com, another@example.com', [ 'info@example.com', 'another@example.com' ] ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( getMailTo( input ) ).toStrictEqual( expected );
	} );
} );

describe( 'Returns null for invalid mailto string where no substring matches an email pattern', () => {
	it.each( [
		[ 'mailto', null ],
		[ 'mailto:info@example', null ],
		[ 'mailto:info@example.', null ],
		[ 'mailto:@example.com', null ],
		[ 'mailto:example.com', null ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( getMailTo( input ) ).toStrictEqual( expected );
	} );
} );

describe( 'Returns primitive "null" for falseful and empty values', () => {
	it.each( [
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
