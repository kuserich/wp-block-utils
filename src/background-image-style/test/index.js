/**
 * The function to be tested.
 *
 * @ignore
 */
import backgroundImageStyle from '../';

describe( "Returns object with valid 'backgroundImage' CSS style for vaild URL or local path string", () => {
	test.each( [
		[
			'https://interactive-examples.mdn.mozilla.net/media/examples/lizard.png',
			{ backgroundImage: 'url(https://interactive-examples.mdn.mozilla.net/media/examples/lizard.png)' },
		],
		[
			'https://interactive-examples.mdn.mozilla.net/media/examples/lizard.png?test=#123',
			{ backgroundImage: 'url(https://interactive-examples.mdn.mozilla.net/media/examples/lizard.png?test=#123)' },
		],
		[
			'https:// interactive-examples.mdn.mozilla.net/media/examples/lizard.png',
			{ backgroundImage: 'url(https:// interactive-examples.mdn.mozilla.net/media/examples/lizard.png)' },
		],
		[ 'mdn.mozilla.net/media/examples/lizard.png', { backgroundImage: 'url(mdn.mozilla.net/media/examples/lizard.png)' } ],
		[ '/media/image/lizard.png', { backgroundImage: 'url(/media/image/lizard.png)' } ],
		[ './../media/image/lizard.png', { backgroundImage: 'url(./../media/image/lizard.png)' } ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( backgroundImageStyle( input ) ).toStrictEqual( expected );
	} );
} );

describe( "Returns object with invalid 'backgroundImage' CSS style for invaild URL", () => {
	test.each( [
		[ {}, { backgroundImage: 'url([object Object])' } ],
		[ true, { backgroundImage: 'url(true)' } ],
		[ 1, { backgroundImage: 'url(1)' } ],
		[ [ '' ], { backgroundImage: 'url()' } ],
		[ [], { backgroundImage: 'url()' } ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( backgroundImageStyle( input ) ).toStrictEqual( expected );
	} );
} );

describe( 'Returns empty object for falseful inputs', () => {
	test.each( [
		[ '', {} ],
		[ 0, {} ],
		[ null, {} ],
		[ undefined, {} ],
		[ false, {} ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( backgroundImageStyle( input ) ).toStrictEqual( expected );
	} );
} );
