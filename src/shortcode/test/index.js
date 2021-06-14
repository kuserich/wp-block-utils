/**
 * The function to be tested.
 *
 * @ignore
 */
import shortcode from '../';

describe( 'Returns a valid string shortcode for valid tag name and attributes', () => {
	test.each( [
		[ 'test_tag', { posts: 1 }, '[test_tag posts="1"]' ],
		[ 'Test Tag', { posts: 1 }, '[test_tag posts="1"]' ],
		[ 'test_tag', { posts: [ 1, 2 ] }, '[test_tag posts="1,2"]' ],
		[ 'test_tag', { posts: '1,2' }, '[test_tag posts="1,2"]' ],
		[ 'test_tag', { camelCase: 1 }, '[test_tag camel_case="1"]' ],
	] )( 'when given %p with attributes %p it returns %p', ( tagName, attributes, expected ) => {
		expect( shortcode( tagName, attributes ) ).toStrictEqual( expected );
	} );
} );

describe( 'Returns an invalid string shortcode for an invalid tag name and valid attribute', () => {
	test.each( [
		[ [ 'test_tag' ], { posts: 1 }, '[test_tag posts="1"]' ],
		[ [ 'test_tag', 'another_tag' ], { posts: 1 }, '[test_tag_another_tag posts="1"]' ],
		[ {}, { posts: 1 }, '[object_object posts="1"]' ],
		[ false, { posts: 1 }, '[false posts="1"]' ],
		[ true, { posts: 1 }, '[true posts="1"]' ],
	] )( 'when given %p with attributes %p it returns %p', ( tagName, attributes, expected ) => {
		expect( shortcode( tagName, attributes ) ).toStrictEqual( expected );
	} );
} );

describe( 'Returns an invalid string shortcode for an empty or falseful tag name and valid attribute', () => {
	test.each( [
		[ [ '' ], { posts: 1 }, '[ posts="1"]' ],
		[ [], { posts: 1 }, '[ posts="1"]' ],
		[ '', { posts: 1 }, '[ posts="1"]' ],
		[ null, { posts: 1 }, '[ posts="1"]' ],
		[ undefined, { posts: 1 }, '[ posts="1"]' ],
	] )( 'when given %p with attributes %p it returns %p', ( tagName, attributes, expected ) => {
		expect( shortcode( tagName, attributes ) ).toStrictEqual( expected );
	} );
} );

describe( 'Returns an invalid string shortcode for a valid tag name and empty or falseful attribute', () => {
	test.each( [
		[ 'test_tag', [ '' ], '[test_tag 0=""]' ],
		[ 'test_tag', '', '[test_tag]' ],
		[ 'test_tag', {}, '[test_tag]' ],
		[ 'test_tag', [], '[test_tag]' ],
		[ 'test_tag', false, '[test_tag]' ],
		[ 'test_tag', true, '[test_tag]' ],
		[ 'test_tag', undefined, '[test_tag]' ],
		[ 'test_tag', null, '[test_tag]' ],
	] )( 'when given %p with attributes %p it returns %p', ( tagName, attributes, expected ) => {
		expect( shortcode( tagName, attributes ) ).toStrictEqual( expected );
	} );
} );
