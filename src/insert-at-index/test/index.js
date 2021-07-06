/**
 * The function to be tested.
 *
 * @ignore
 */
import insertAtIndex from '../';

/**
 * Example function used as replacement value.
 *
 * @return {string}          Returns example string.
 * @ignore
 */
const exampleValueFunction = () => {
	return 'b';
};

describe( 'Should return a valid array for a valid input with a valid value to insert and index', () => {
	it.each( [
		[ [ 'a', 'd', 'c' ], 'b', 1, [ 'a', 'b', 'c' ] ],
		[ [ 'a', 'd', 'c' ], 'b', 0, [ 'b', 'd', 'c' ] ],
		[ [ 'a', 'd', 'c' ], 'b', Array.length - 1, [ 'b', 'd', 'c' ] ],
		[ [ 'a', 'd', 'c' ], 'b', Array.length, [ 'a', 'b', 'c' ] ],
		[ [ 'a', 'd', 'c' ], [ 'b' ], 1, [ 'a', 'b', 'c' ] ],
		[ [ 'a', 'd', 'c' ], [ [ 'b' ] ], 1, [ 'a', [ 'b' ], 'c' ] ],
		[ [ 'a', 'd', 'c' ], { id: 'b' }, 1, [ 'a', { id: 'b' }, 'c' ] ],
		[ [ 'a', 'd', 'c' ], exampleValueFunction(), 1, [ 'a', 'b', 'c' ] ],
		[ [ 'a', 'd', 'c' ], 'b', [ 1 ], [ 'a', 'b', 'c' ] ], // Array type index
	] )( 'when given %p with value %p and index %p it returns %p', ( input, value, index, expected ) => {
		expect( insertAtIndex( input, value, index ) ).toStrictEqual( expected );
	} );
} );

describe( 'Should return a valid array for an invalid input with a valid value to insert and index', () => {
	it.each( [
		[ [], 'a', 1, [ 'a' ] ],
		[ {}, 'a', 1, [ 'a' ] ],
		[ null, 'a', 1, [ 'a' ] ],
		[ undefined, 'a', 1, [ 'a' ] ],
		[ false, 'a', 1, [ 'a' ] ],
		[ 0, 'a', 1, [ 'a' ] ],
		[ -0, 'a', 1, [ 'a' ] ],
		[ 0n, 'a', 1, [ 'a' ] ],
		[ NaN, 'a', 1, [ 'a' ] ],
	] )( 'when given %p with value %p and index %p it returns %p', ( input, value, index, expected ) => {
		expect( insertAtIndex( input, value, index ) ).toStrictEqual( expected );
	} );
} );

describe( 'Should return an invalid array for a valid input and value to insert with invalid index', () => {
	it.each( [
		[ [ 'a', 'd', 'c' ], 'b', 5, [ 'a', 'd', 'c', 'b' ] ],
		[ [ 'a', 'd', 'c' ], 'b', -1, [ 'a', 'd', 'b', 'a', 'd', 'c' ] ],
		[ [ 'a', 'd', 'c' ], 'b', '1', [ 'a', 'b' ] ],
		[ [ 'a', 'd', 'c' ], 'b', '', [ 'b', 'd', 'c' ] ],
	] )( 'when given %p with value %p and index %p it returns %p', ( input, value, index, expected ) => {
		expect( insertAtIndex( input, value, index ) ).toStrictEqual( expected );
	} );
} );

describe( 'Should return an invalid array for a valid input and value to insert with falseful or empty index', () => {
	it.each( [
		[ [ 'a', 'd', 'c' ], 'b', [], [ 'b', 'd', 'c' ] ],
		[ [ 'a', 'd', 'c' ], 'b', {}, [ 'b', 'a', 'd', 'c' ] ],
		[ [ 'a', 'd', 'c' ], 'b', null, [ 'b', 'd', 'c' ] ],
		[ [ 'a', 'd', 'c' ], 'b', undefined, [ 'a', 'd', 'c', 'b', 'd', 'c' ] ],
		[ [ 'a', 'd', 'c' ], 'b', false, [ 'b', 'd', 'c' ] ],
		[ [ 'a', 'd', 'c' ], 'b', true, [ 'a', 'b', 'c' ] ],
		[ [ 'a', 'd', 'c' ], 'b', -0, [ 'b', 'd', 'c' ] ],
		[ [ 'a', 'd', 'c' ], 'b', NaN, [ 'b', 'a', 'd', 'c' ] ],
	] )( 'when given %p with value %p and index %p it returns %p', ( input, value, index, expected ) => {
		expect( insertAtIndex( input, value, index ) ).toStrictEqual( expected );
	} );
} );
