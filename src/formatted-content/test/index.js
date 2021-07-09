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
import formattedContent from '../';

/**
 * Set of falsey and empty values for testing.
 *
 * @ignore
 */
import { falsey, empties } from '../../utils';

describe( 'formattedContent', () => {
	it( 'Should not change html with no entities', () => {
		const html = '<h1>A noble tag embiggens the smallest text.</h1>';
		const expected = '<h1>A noble tag embiggens the smallest text.</h1>';
		expect( formattedContent( html ) ).toEqual( expected );
	} );

	describe( 'Should return decoded HTML entities from the given input', () => {
		it.each( [
			[
				'<span class="amount"><bdi><span class="currency">&pound;</span>11.05</bdi></span>',
				'<span class="amount"><bdi><span class="currency">£</span>11.05</bdi></span>',
			],
			[ '&lt;h1&gt;This post&#8217;s title.&lt;/h1&gt;', '<h1>This post’s title.</h1>' ],
		] )( 'when given %p it returns %p', ( input, expected ) => {
			expect( formattedContent( input ) ).toBe( expected );
		} );
	} );

	it( 'Should trim leading and trailing spaces', () => {
		const html = ' <h1>A noble tag embiggens the smallest text.</h1> ';
		const expected = '<h1>A noble tag embiggens the smallest text.</h1>';
		expect( formattedContent( html ) ).toEqual( expected );
	} );

	describe( 'Should accept falsey arguments', () => {
		const cases = map( falsey, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( formattedContent( input ) );
		} );
	} );

	describe( 'Should accept empty arguments', () => {
		const cases = map( empties, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( formattedContent( input ) );
		} );
	} );
} );
