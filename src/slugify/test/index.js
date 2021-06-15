/**
 * The function to be tested.
 *
 * @ignore
 */
import slugify from '../';

describe( 'Returns slugified and tag stripped string for valid input string', () => {
	test.each( [
		[ 'lorem ipsum', 'lorem-ipsum' ],
		[ 'lorem $ ipsum', 'lorem-dollar-ipsum' ],
		[ 'lorem *_+~()!?—–−:@^|&#.,;%<>{} ipsum', 'lorem-orandpercent-ipsum' ],
		[ '<a href="https://example.com"> lorem ipsum <strong>dolor</strong> </a>', 'lorem-ipsum-dolor' ],
		[ 'unicode is ♥', 'unicode-is-love' ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( slugify( input ) ).toStrictEqual( expected );
	} );
} );

describe( 'Returns empty string for falseful or empty value', () => {
	test.each( [
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
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( slugify( input ) ).toStrictEqual( expected );
	} );
} );
