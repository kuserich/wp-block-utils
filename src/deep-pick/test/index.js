/**
 * The function to be tested.
 *
 * @ignore
 */
import deepPick from '../';

/**
 * Valid collection object.
 *
 * @ignore
 */
const validCollection = { id: 1, title: { value: 100, label: { name: 'example' } } };

describe( 'Should return object with valid key/value pair for valid collection object with array path', () => {
	test.each( [
		[ validCollection, [ 'id' ], { id: 1 } ],
		[ validCollection, [ 'title.label.name' ], { title: 'example' } ],
		[ validCollection, [ 'title.rendered' ], { title: undefined } ],
		[ validCollection, [ 'id', 'title.label.name' ], { id: 1, title: 'example' } ],
	] )( 'when given %p with path %p it returns %p', ( collection, path, expected ) => {
		expect( deepPick( collection, path ) ).toStrictEqual( expected );
	} );
} );

describe( 'Should return object with value "undefined" for empty or falseful collection object', () => {
	test.each( [
		[ {}, [ 'id' ], { id: undefined } ],
		[ [], [ 'id' ], { id: undefined } ],
		[ false, [ 'id' ], { id: undefined } ],
		[ true, [ 'id' ], { id: undefined } ],
		[ undefined, [ 'id' ], { id: undefined } ],
		[ null, [ 'id' ], { id: undefined } ],
		[ 0, [ 'id' ], { id: undefined } ],
	] )( 'when given %p with path %p it returns %p', ( collection, path, expected ) => {
		expect( deepPick( collection, path ) ).toStrictEqual( expected );
	} );
} );

describe( 'Should return an empty object for empty or falseful array path', () => {
	test.each( [
		[ { id: 1 }, [], {} ],
		[ { id: 1 }, {}, {} ],
		[ { id: 1 }, undefined, {} ],
		[ { id: 1 }, false, {} ],
		[ { id: 1 }, true, {} ],
		[ { id: 1 }, null, {} ],
		[ { id: 1 }, 0, {} ],
	] )( 'when given %p with path %p it returns %p', ( collection, path, expected ) => {
		expect( deepPick( collection, path ) ).toStrictEqual( expected );
	} );
} );
