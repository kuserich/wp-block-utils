/**
 * The function to be tested.
 *
 * @ignore
 */
import slugify from '../';

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

describe( 'Should return empty string when given falsely argument including but not limited to an array, object, or an empty array', () => {
	it.each( [
		[ '', '' ],
		[ [ '' ], '' ],
		[ [], '' ],
		[ {}, '' ],
		[ undefined, '' ],
		[ null, '' ],
		[ false, '' ],
		[ true, '' ],
		[ 1, '' ],
		[ 0, '' ],
		[ -0, '' ],
		[ 0n, '' ],
		[ NaN, '' ],
	] )( 'when given %p it returns %s', ( input, expected ) => {
		expect( slugify( input ) ).toBe( expected );
	} );
} );
