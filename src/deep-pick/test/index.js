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
import deepPick from '../';

/**
 * Set of falsey and empty values for testing.
 *
 * @ignore
 */
import { falsey, empties } from '../../utils';

/**
 * Valid collection object.
 *
 * @ignore
 */
const validCollection = { id: 1, title: { value: 100, label: { name: 'example' } } };

describe( 'deepPick', () => {
	describe( 'Should return key-value pairs composed of the picked paths from data collection', () => {
		test.each( [
			[ validCollection, [ 'id' ], { id: 1 } ],
			[ validCollection, [ 'title.label.name' ], { title: 'example' } ],
			[ validCollection, [ 'title.rendered' ], { title: undefined } ],
			[ validCollection, [ 'id', 'title.label.name' ], { id: 1, title: 'example' } ],
		] )( 'when given %o with path %p it returns %o', ( collection, path, expected ) => {
			expect( deepPick( collection, path ) ).toStrictEqual( expected );
		} );
	} );

	describe( 'Should accept falsey arguments for object collection', () => {
		const testObjectPath = [ 'id' ];
		const cases = map( falsey, ( value ) => [ value, testObjectPath ] );
		it.each( cases )( 'when given %p with index %p', ( input, value ) => {
			expect.anything( deepPick( input, value ) );
		} );
	} );

	describe( 'Should accept empty arguments for object collection', () => {
		const testObjectPath = [ 'id' ];
		const cases = map( empties, ( value ) => [ value, testObjectPath ] );
		it.each( cases )( 'when given %p with index %p', ( input, value ) => {
			expect.anything( deepPick( input, value ) );
		} );
	} );

	describe( 'Should accept falsey arguments for object path', () => {
		const testObject = { id: 1 };
		const cases = map( falsey, ( value ) => [ testObject, value ] );
		it.each( cases )( 'when given %p with index %p', ( input, value ) => {
			expect.anything( deepPick( input, value ) );
		} );
	} );

	describe( 'Should accept empty arguments for object path', () => {
		const testObject = { id: 1 };
		const cases = map( empties, ( value ) => [ testObject, value ] );
		it.each( cases )( 'when given %p with index %p', ( input, value ) => {
			expect.anything( deepPick( input, value ) );
		} );
	} );
} );
