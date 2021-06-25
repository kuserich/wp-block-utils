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

describe( 'Should return an invalid inline style object for backgroundImage with an invalid URL', () => {
	it.each( [
		[ {}, { backgroundImage: 'url([object Object])' } ],
		[ true, { backgroundImage: 'url(true)' } ],
		[ 1, { backgroundImage: 'url(1)' } ],
		[ [ '' ], { backgroundImage: 'url()' } ],
		[ [], { backgroundImage: 'url()' } ],
	] )( 'when given %p it returns %o', ( input, expected ) => {
		expect( backgroundImageStyle( input ) ).toStrictEqual( expected );
	} );
} );

describe( 'Should return an empty object for falseful inputs', () => {
	it.each( [
		[ false, {} ],
		[ null, {} ],
		[ undefined, {} ],
		[ 0, {} ],
		[ -0, {} ],
		[ 0n, {} ],
		[ NaN, {} ],
		[ '', {} ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( backgroundImageStyle( input ) ).toStrictEqual( expected );
	} );
} );
