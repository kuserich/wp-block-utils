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
import shortcode from '../';

/**
 * Set of falsey and empty values for testing.
 *
 * @ignore
 */
import { falsey, empties } from '../../utils';

describe( 'shortcode', () => {
	describe( 'Should return a valid string shortcode for valid tag name and attributes', () => {
		it.each( [
			[ 'test_tag', { posts: 1 }, '[test_tag posts="1"]' ],
			[ 'Test Tag', { posts: 1 }, '[test_tag posts="1"]' ],
			[ 'test_tag', { posts: [ 1, 2 ] }, '[test_tag posts="1,2"]' ],
			[ 'test_tag', { posts: '1,2' }, '[test_tag posts="1,2"]' ],
			[ 'test_tag', { camelCase: 1 }, '[test_tag camel_case="1"]' ],
		] )( 'when given %s with attributes %o it returns %s', ( tagName, attributes, expected ) => {
			expect( shortcode( tagName, attributes ) ).toBe( expected );
		} );
	} );

	describe( 'Should return an invalid string shortcode for an invalid tag name and valid attribute', () => {
		it.each( [
			[ [ 'test_tag' ], { posts: 1 }, '[test_tag posts="1"]' ],
			[ [ 'test_tag', 'another_tag' ], { posts: 1 }, '[test_tag_another_tag posts="1"]' ],
		] )( 'when given %p with attributes %o it returns %s', ( tagName, attributes, expected ) => {
			expect( shortcode( tagName, attributes ) ).toBe( expected );
		} );
	} );

	describe( 'Should accept falsey arguments for the tag name', () => {
		const testAttribute = { posts: 1 };
		const cases = map( falsey, ( value ) => [ value, testAttribute ] );
		it.each( cases )( 'when given %p with attributes %o', ( input, value ) => {
			expect.anything( shortcode( input, value ) );
		} );
	} );

	describe( 'Should accept empty arguments for the tag name', () => {
		const testAttribute = { posts: 1 };
		const cases = map( empties, ( value ) => [ value, testAttribute ] );
		it.each( cases )( 'when given %p with attributes %o', ( input, value ) => {
			expect.anything( shortcode( input, value ) );
		} );
	} );

	describe( 'Should accept falsey arguments for the attribute', () => {
		const testTagName = 'test_tag';
		const cases = map( falsey, ( value ) => [ testTagName, value ] );
		it.each( cases )( 'when given %s with attributes %p', ( input, value ) => {
			expect.anything( shortcode( input, value ) );
		} );
	} );

	describe( 'Should accept empty arguments for the attribute', () => {
		const testTagName = 'test_tag';
		const cases = map( empties, ( value ) => [ testTagName, value ] );
		it.each( cases )( 'when given %s with attributes %p', ( input, value ) => {
			expect.anything( shortcode( input, value ) );
		} );
	} );
} );
