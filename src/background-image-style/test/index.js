/**
 * The function to be tested.
 *
 * @ignore
 */
import backgroundImageStyle from '../';

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

describe( 'Should return an empty object when given falsely argument including but not limited to an array, object, or an empty array', () => {
	it.each( [
		[ '', {} ],
		[ [ '' ], {} ],
		[ [], {} ],
		[ {}, {} ],
		[ true, {} ],
		[ false, {} ],
		[ null, {} ],
		[ undefined, {} ],
		[ 1, {} ],
		[ 0, {} ],
		[ -0, {} ],
		[ 0n, {} ],
		[ NaN, {} ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( backgroundImageStyle( input ) ).toStrictEqual( expected );
	} );
} );
