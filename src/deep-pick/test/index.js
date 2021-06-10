/**
 * The function to be tested.
 *
 * @ignore
 */
import deepPick from '../';

/**
 * Example function used as object value.
 *
 * @return {string}          Returns example string.
 * @ignore
 */
const exampleFunction = () => {
	return 'Hello World!';
};

describe( 'Returns object with valid key/value pair for valid collection object with array path', () => {
	test.each( [
		[ { '': 1 }, [ '' ], { '': 1 } ],
		[ { id: 1 }, [ 'id' ], { id: 1 } ],
		[ { id: true }, [ 'id' ], { id: true } ],
		[ { id: exampleFunction() }, [ 'id' ], { id: 'Hello World!' } ],
		[ { id: 1, title: { value: 'Example' } }, [ 'title.value' ], { title: 'Example' } ],
		[ { id: 1, title: { value: { name: 'Example' } } }, [ 'title.value.name' ], { title: 'Example' } ],
		[ { id: 1, title: { value: 'Example' } }, [ 'title.rendered' ], { title: undefined } ],
	] )( 'when given %p with path %p it returns %p', ( collection, path, expected ) => {
		expect( deepPick( collection, path ) ).toStrictEqual( expected );
	} );
} );

describe( "Returns object with value 'undefined' for empty or falseful collection object", () => {
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

describe( 'Returns an empty object for empty or falseful array path', () => {
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
