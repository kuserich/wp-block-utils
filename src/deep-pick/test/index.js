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

describe( 'Should return string keyed-value pairs object composed of the picked paths from data collection', () => {
	test.each( [
		[ validCollection, [ 'id' ], { id: 1 } ],
		[ validCollection, [ 'title.label.name' ], { title: 'example' } ],
		[ validCollection, [ 'title.rendered' ], { title: undefined } ],
		[ validCollection, [ 'id', 'title.label.name' ], { id: 1, title: 'example' } ],
	] )( 'when given %p with path %p it returns %p', ( collection, path, expected ) => {
		expect( deepPick( collection, path ) ).toStrictEqual( expected );
	} );
} );

describe( 'Should return string keyed-value pairs object where the value of each key would be `undefined` when the object path given is not resolved', () => {
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

describe( 'Should return an empty object when a non-existent path is given, including but not limited to an array, object, or falsely values', () => {
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
