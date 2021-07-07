/**
 * The function to be tested.
 *
 * @ignore
 */
import getMailTo from '../';

describe( 'Should return an array with a single email when given a valid `mailto` attribute (string) value', () => {
	it.each( [
		[ 'mailto:info@example.com', [ 'info@example.com' ] ],
		[ 'mailto:info@example.com,', [ 'info@example.com' ] ], // Dangling comma
		[ 'mailto:firstname.lastname@sub.domain.com', [ 'firstname.lastname@sub.domain.com' ] ],
		[ 'mailto:mail_with_underscores@domain_with_underscore.com', [ 'mail_with_underscores@domain_with_underscore.com' ] ],
		[ 'mailto:mail-with-dash@domain-with-dash.com', [ 'mail-with-dash@domain-with-dash.com' ] ],
		[ 'mailto:ALLCAPS@EXAMPLE.COM', [ 'ALLCAPS@EXAMPLE.COM' ] ],
		[ 'mailto:info1234@example1234.com', [ 'info1234@example1234.com' ] ],
	] )( 'when given %s it returns %p', ( input, expected ) => {
		expect( getMailTo( input ) ).toStrictEqual( expected );
	} );
} );

describe( 'Should return an array of valid emails being extracted from the `mailto` attribute (string) value', () => {
	it.each( [
		[ 'mailto:info@example.com,another@example.com', [ 'info@example.com', 'another@example.com' ] ],
		[ 'mailto:info@example.com, another@example.com', [ 'info@example.com', 'another@example.com' ] ],
	] )( 'when given %s it returns %p', ( input, expected ) => {
		expect( getMailTo( input ) ).toStrictEqual( expected );
	} );
} );

describe( 'Should return `null` when given an invalid `mailto` attribute value where no substring matches a valid email pattern', () => {
	it.each( [
		[ 'mailto', null ],
		[ 'mailto:info@example', null ],
		[ 'mailto:info@example.', null ],
		[ 'mailto:@example.com', null ],
		[ 'mailto:example.com', null ],
	] )( 'when given %s it returns %p', ( input, expected ) => {
		expect( getMailTo( input ) ).toBe( expected );
	} );
} );

describe( 'Should return `null` when given falsely argument including but not limited to an array, object, or an empty array', () => {
	it.each( [
		[ [ '' ], null ],
		[ [], null ],
		[ {}, null ],
		[ '', null ],
		[ 0, null ],
		[ -0, null ],
		[ NaN, null ],
		[ 1, null ],
		[ true, null ],
		[ false, null ],
		[ undefined, null ],
		[ null, null ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( getMailTo( input ) ).toBe( expected );
	} );
} );
