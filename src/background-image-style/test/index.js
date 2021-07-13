/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { map } from 'lodash';

/** The function to be tested.
 *
 * @ignore
 */
import backgroundImageStyle from '../';

/**
 * Set of falsey and empty values for testing.
 *
 * @ignore
 */
import { falsey, empties } from '../../utils';

describe( 'backgroundImageStyle', () => {
	describe( 'Should return a valid inline style object for backgroundImage with a valid URL', () => {
		it.each( [
			[
				'https://interactive-examples.mdn.mozilla.net/media/examples/lizard.png',
				{ backgroundImage: 'url(https://interactive-examples.mdn.mozilla.net/media/examples/lizard.png)' },
			],
			[
				'https://interactive-examples.mdn.mozilla.net/media/examples/lizard.png?test=#123',
				{ backgroundImage: 'url(https://interactive-examples.mdn.mozilla.net/media/examples/lizard.png?test=#123)' },
			],
			[ 'mdn.mozilla.net/media/examples/lizard.png', { backgroundImage: 'url(mdn.mozilla.net/media/examples/lizard.png)' } ],
			[ '/media/image/lizard.png', { backgroundImage: 'url(/media/image/lizard.png)' } ],
			[ './../media/image/lizard.png', { backgroundImage: 'url(./../media/image/lizard.png)' } ],
		] )( 'when given %s it returns %o', ( input, expected ) => {
			expect( backgroundImageStyle( input ) ).toStrictEqual( expected );
		} );
	} );

	it( 'Should reject URLs without an image file extension', () => {
		const input = 'https://example.com';
		const expected = {};
		expect( backgroundImageStyle( input ) ).toStrictEqual( expected );
	} );

	describe( 'Should accept falsey arguments', () => {
		const cases = map( falsey, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( backgroundImageStyle( input ) );
		} );
	} );

	describe( 'Should accept empty arguments', () => {
		const cases = map( empties, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( backgroundImageStyle( input ) );
		} );
	} );
} );
