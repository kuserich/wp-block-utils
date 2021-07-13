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
import getMailTo from '../';

/**
 * Set of falsey and empty values for testing.
 *
 * @ignore
 */
import { falsey, empties } from '../../utils';

describe( 'getMailTo', () => {
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

	describe( 'Should accept falsey arguments', () => {
		const cases = map( falsey, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( getMailTo( input ) );
		} );
	} );

	describe( 'Should accept empty arguments', () => {
		const cases = map( empties, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( getMailTo( input ) );
		} );
	} );
} );
