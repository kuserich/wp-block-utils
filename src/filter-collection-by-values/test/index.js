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
import filterCollectionByValues from '../';

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
const testCollection = [
	{ id: 1, title: 'example-1' },
	{ id: 2, title: 'example-2' },
	{ id: 3, title: 'example-3' },
	{ id: 4, title: 'example-4' },
	{ id: 5, title: 'example-5' },
];

describe( 'filterCollectionByValues', () => {
	it( 'Should return objects from a collection filtered by values', () => {
		const values = [ 1, 2, 3 ];
		const expected = [
			{ id: 1, title: 'example-1' },
			{ id: 2, title: 'example-2' },
			{ id: 3, title: 'example-3' },
		];
		const actual = filterCollectionByValues( values, testCollection );
		expect( actual ).toEqual( expected );
	} );

	it( 'Should preserve the order of values', () => {
		const values = [ 1, 3, 2 ];
		const expected = [
			{ id: 1, title: 'example-1' },
			{ id: 3, title: 'example-3' },
			{ id: 2, title: 'example-2' },
		];
		const actual = filterCollectionByValues( values, testCollection );
		expect( actual ).toEqual( expected );
	} );

	it( 'Should accept different fields', () => {
		const values = [ 'example-1', 'example-2', 'example-3' ];
		const expected = [
			{ id: 1, title: 'example-1' },
			{ id: 2, title: 'example-2' },
			{ id: 3, title: 'example-3' },
		];
		const actual = filterCollectionByValues( values, testCollection, 'title' );
		expect( actual ).toEqual( expected );
	} );

	it( 'Should ignore invalid values', () => {
		const values = [ 999, 1000, 9999 ];
		const expected = [];
		const actual = filterCollectionByValues( values, testCollection );
		expect( actual ).toEqual( expected );
	} );

	describe( 'Should accept empty arguments for values', () => {
		const cases = map( empties, ( value ) => [ value, testCollection ] );
		it.each( cases )( 'when given %p', ( value ) => {
			const actual = filterCollectionByValues( value, testCollection );
			expect( actual ).toEqual( [] );
		} );
	} );

	describe( 'Should accept falsey arguments for values', () => {
		const cases = map( falsey, ( value ) => [ value, testCollection ] );
		it.each( cases )( 'when given %p', ( value ) => {
			const actual = filterCollectionByValues( value, testCollection );
			expect( actual ).toEqual( [] );
		} );
	} );

	describe( 'Should accept empty arguments for collection', () => {
		const testValues = [ 1, 2, 3 ];
		const cases = map( empties, ( value ) => [ testValues, value ] );
		it.each( cases )( 'when given %p', ( collection ) => {
			const actual = filterCollectionByValues( testValues, collection );
			expect( actual ).toEqual( [] );
		} );
	} );

	describe( 'Should accept falsey arguments for collection', () => {
		const testValues = [ 1, 2, 3 ];
		const cases = map( falsey, ( value ) => [ testValues, value ] );
		it.each( cases )( 'when given %p', ( collection ) => {
			const actual = filterCollectionByValues( testValues, collection );
			expect( actual ).toEqual( [] );
		} );
	} );
} );
