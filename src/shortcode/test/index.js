/**
 * The function to be tested.
 *
 * @ignore
 */
import shortcode from '../';

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
		[ {}, { posts: 1 }, '[object_object posts="1"]' ],
		[ false, { posts: 1 }, '[false posts="1"]' ],
		[ true, { posts: 1 }, '[true posts="1"]' ],
	] )( 'when given %p with attributes %o it returns %s', ( tagName, attributes, expected ) => {
		expect( shortcode( tagName, attributes ) ).toBe( expected );
	} );
} );

describe( 'Should return an invalid string shortcode for an empty or falseful tag name and valid attribute', () => {
	it.each( [
		[ [ '' ], { posts: 1 }, '[ posts="1"]' ],
		[ [], { posts: 1 }, '[ posts="1"]' ],
		[ '', { posts: 1 }, '[ posts="1"]' ],
		[ null, { posts: 1 }, '[ posts="1"]' ],
		[ undefined, { posts: 1 }, '[ posts="1"]' ],
		[ 0, { posts: 1 }, '[0 posts="1"]' ],
		[ -0, { posts: 1 }, '[0 posts="1"]' ],
		[ NaN, { posts: 1 }, '[na_n posts="1"]' ],
	] )( 'when given %p with attributes %o it returns %s', ( tagName, attributes, expected ) => {
		expect( shortcode( tagName, attributes ) ).toBe( expected );
	} );
} );

describe( 'Should return an invalid string shortcode for a valid tag name and empty or falseful attribute', () => {
	it.each( [
		[ 'test_tag', [ '' ], '[test_tag 0=""]' ],
		[ 'test_tag', '', '[test_tag]' ],
		[ 'test_tag', {}, '[test_tag]' ],
		[ 'test_tag', [], '[test_tag]' ],
		[ 'test_tag', false, '[test_tag]' ],
		[ 'test_tag', true, '[test_tag]' ],
		[ 'test_tag', undefined, '[test_tag]' ],
		[ 'test_tag', null, '[test_tag]' ],
		[ 'test_tag', 0, '[test_tag]' ],
		[ 'test_tag', -0, '[test_tag]' ],
		[ 'test_tag', 0n, '[test_tag]' ],
		[ 'test_tag', NaN, '[test_tag]' ],
	] )( 'when given %s with attributes %p it returns %s', ( tagName, attributes, expected ) => {
		expect( shortcode( tagName, attributes ) ).toBe( expected );
	} );
} );
