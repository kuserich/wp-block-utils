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
import insertAtIndex from '../';

/**
 * Set of falsey and empty values for testing.
 *
 * @ignore
 */
import { falsey, empties } from '../../utils';

describe( 'insertAtIndex', () => {
	describe( 'Should return a valid array for a valid input with a valid value to insert and index', () => {
		it.each( [
			[ [ 'a', 'b', 'c' ], 'x', 1, [ 'a', 'x', 'c' ] ],
			[ [ 'a', 'b', 'c' ], 'x', 0, [ 'x', 'b', 'c' ] ],
			[ [ 'a', 'b', 'c' ], 'x', Array.length - 1, [ 'x', 'b', 'c' ] ],
			[ [ 'a', 'b', 'c' ], 'x', Array.length, [ 'a', 'x', 'c' ] ],
			[ [ 'a', 'b', 'c' ], [ 'x' ], 1, [ 'a', 'x', 'c' ] ],
			[ [ 'a', 'b', 'c' ], [ [ 'x' ] ], 1, [ 'a', [ 'x' ], 'c' ] ],
			[ [ 'a', 'b', 'c' ], { id: 'x' }, 1, [ 'a', { id: 'x' }, 'c' ] ],
		] )( 'when given %p with value %p and index %p it returns %p', ( input, value, index, expected ) => {
			expect( insertAtIndex( input, value, index ) ).toStrictEqual( expected );
		} );
	} );

	describe( 'Should accept falsey arguments for input array', () => {
		const testValue = 'a';
		const testIndex = 1;
		const cases = map( falsey, ( value ) => [ value, testValue, testIndex ] );
		it.each( cases )( 'when given %p with value %p and index %p', ( input, value ) => {
			expect.anything( insertAtIndex( input, value ) );
		} );
	} );

	describe( 'Should accept empty arguments for input array', () => {
		const testValue = 'a';
		const testIndex = 1;
		const cases = map( empties, ( value ) => [ value, testValue, testIndex ] );
		it.each( cases )( 'when given %p with value %p and index %p', ( input, value ) => {
			expect.anything( insertAtIndex( input, value ) );
		} );
	} );

	describe( 'Should return an invalid array for a valid input and value to insert with invalid index', () => {
		it.each( [
			[ [ 'a', 'b', 'c' ], 'x', 5, [ 'a', 'b', 'c', 'x' ] ],
			[ [ 'a', 'b', 'c' ], 'x', -1, [ 'a', 'b', 'x', 'a', 'b', 'c' ] ],
		] )( 'when given %p with value %p and index %p it returns %p', ( input, value, index, expected ) => {
			expect( insertAtIndex( input, value, index ) ).toStrictEqual( expected );
		} );
	} );

	describe( 'Should accept falsey arguments for index', () => {
		const testInput = [ 'a', 'b', 'c' ];
		const testValue = 'x';
		const cases = map( falsey, ( value ) => [ testInput, testValue, value ] );
		it.each( cases )( 'when given %p with value %p and index %p', ( input, value ) => {
			expect.anything( insertAtIndex( input, value ) );
		} );
	} );

	describe( 'Should accept empty arguments for index', () => {
		const testInput = [ 'a', 'b', 'c' ];
		const testValue = 'x';
		const cases = map( falsey, ( value ) => [ testInput, testValue, value ] );
		it.each( cases )( 'when given %p with value %p and index %p', ( input, value ) => {
			expect.anything( insertAtIndex( input, value ) );
		} );
	} );
} );
