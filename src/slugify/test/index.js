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
import slugify from '../';

/**
 * Set of falsey and empty values for testing.
 *
 * @ignore
 */
import { falsey, empties } from '../../utils';

describe( 'slugify', () => {
	describe( 'Should return slugified version of the string given by replacing whitespaces with dashes and escaping HTML elements', () => {
		it.each( [
			[ 'lorem ipsum', 'lorem-ipsum' ],
			[ 'lorem 1234', 'lorem-1234' ],
			[ 'LOREM IPSUM', 'lorem-ipsum' ],
			[ 'lorem $ ipsum', 'lorem-dollar-ipsum' ],
			[ 'lorem *_+~()!?—–−:@^|&#.,;%<>{} ipsum', 'lorem-orandpercent-ipsum' ],
			[ '<a href="https://example.com"> lorem ipsum <strong>dolor</strong> </a>', 'lorem-ipsum-dolor' ],
			[ 'unicode is ♥', 'unicode-is-love' ],
			[ 'unicode is ☢', 'unicode-is-☢' ], // Unsupported symbol
		] )( 'when given %s it returns %s', ( input, expected ) => {
			expect( slugify( input ) ).toBe( expected );
		} );
	} );

	describe( 'Should accept falsey arguments', () => {
		const cases = map( falsey, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( slugify( input ) );
		} );
	} );

	describe( 'Should accept empty arguments', () => {
		const cases = map( empties, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( slugify( input ) );
		} );
	} );
} );
