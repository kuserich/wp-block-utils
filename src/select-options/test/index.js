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
import selectOptions from '../';

/**
 * Set of falsey and empty values for testing.
 *
 * @ignore
 */
import { falsey, empties } from '../../utils';

const testPropertyPath = { id: 'value' };
const testPostObject = { id: 1 };

describe( 'selectOptions', () => {
	describe( 'Should return array of objects for valid post objects array with valid property path and no custom "none" option value', () => {
		it.each( [
			[ [ { id: 1 }, { id: 2 } ], { id: 'value' }, [ { value: '', label: '— Select —' }, { value: 1 }, { value: 2 } ] ],
			[
				[
					{ id: 1, title: 'sunt aut facere' },
					{ id: 2, title: 'qui est esse' },
				],
				{ id: 'value', title: 'label' },
				[
					{ value: '', label: '— Select —' },
					{ value: 1, label: 'sunt aut facere' },
					{ value: 2, label: 'qui est esse' },
				],
			],
			[
				[
					{ id: 1, title: { rendered: 'sunt aut facere' } },
					{ id: 2, title: { rendered: 'qui est esse' } },
				],
				{ id: 'value', 'title.rendered': 'label' },
				[
					{ value: '', label: '— Select —' },
					{ value: 1, label: 'sunt aut facere' },
					{ value: 2, label: 'qui est esse' },
				],
			],
		] )( 'when given %o with path %o it returns %o', ( input, paths, expected ) => {
			expect( selectOptions( input, paths ) ).toStrictEqual( expected );
		} );
	} );

	describe( 'Should return array of objects for valid post objects array with valid property path and empty "none" option value', () => {
		it.each( [
			[ [ { id: 1 }, { id: 2 } ], { id: 'value' }, { value: '', label: '' }, [ { value: '', label: '' }, { value: 1 }, { value: 2 } ] ],
			[
				[
					{ id: 1, title: { rendered: 'sunt aut facere' } },
					{ id: 2, title: { rendered: 'qui est esse' } },
				],
				{ id: 'value', 'title.rendered': 'label' },
				{ value: '', label: '' },
				[
					{ value: '', label: '' },
					{ value: 1, label: 'sunt aut facere' },
					{ value: 2, label: 'qui est esse' },
				],
			],
		] )( 'when given %o with path %o and none %o it returns %o', ( input, paths, none, expected ) => {
			expect( selectOptions( input, paths, none ) ).toStrictEqual( expected );
		} );
	} );

	describe( 'Should return invalid array of objects with value "undefined" for valid post objects array with invalid property path and no custom "none" option value', () => {
		it.each( [
			[ [ { id: 1 } ], { name: 'value' }, [ { value: '', label: '— Select —' }, { value: undefined } ] ],
			[
				[
					{ id: 1, title: { rendered: 'sunt aut facere' } },
					{ id: 2, title: { rendered: 'qui est esse' } },
				],
				{ id: 'value', 'title,rendered': 'label' },
				[
					{ value: '', label: '— Select —' },
					{ value: 1, label: undefined },
					{ value: 2, label: undefined },
				],
			],
		] )( 'when given %o with path %o it returns %o', ( input, paths, expected ) => {
			expect( selectOptions( input, paths ) ).toStrictEqual( expected );
		} );
	} );

	describe( 'Should accept falsey arguments for post objects array', () => {
		const cases = map( falsey, ( value ) => [ value, testPropertyPath ] );
		it.each( cases )( 'when given %p with path %o', ( post, path ) => {
			expect.anything( selectOptions( post, path ) );
		} );
	} );

	describe( 'Should accept empty arguments for post objects array', () => {
		const cases = map( empties, ( value ) => [ value, testPropertyPath ] );
		it.each( cases )( 'when given %p with path %o', ( post, path ) => {
			expect.anything( selectOptions( post, path ) );
		} );
	} );

	describe( 'Should accept falsey arguments for value path', () => {
		const cases = map( falsey, ( value ) => [ testPostObject, value ] );
		it.each( cases )( 'when given %p with path %o', ( post, path ) => {
			expect.anything( selectOptions( post, path ) );
		} );
	} );

	describe( 'Should accept empty arguments for value path', () => {
		const cases = map( empties, ( value ) => [ testPostObject, value ] );
		it.each( cases )( 'when given %p with path %o', ( post, path ) => {
			expect.anything( selectOptions( post, path ) );
		} );
	} );

	describe( 'Should accept falsey arguments for none object', () => {
		const cases = map( falsey, ( value ) => [ testPostObject, testPropertyPath, value ] );
		it.each( cases )( 'when given %p with path %o', ( post, path, none ) => {
			expect.anything( selectOptions( post, path, none ) );
		} );
	} );

	describe( 'Should accept empty arguments for none object', () => {
		const cases = map( empties, ( value ) => [ testPostObject, testPropertyPath, value ] );
		it.each( cases )( 'when given %p with path %o', ( post, path, none ) => {
			expect.anything( selectOptions( post, path, none ) );
		} );
	} );
} );
