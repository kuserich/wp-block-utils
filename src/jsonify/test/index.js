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
import jsonify from '../';

/**
 * Set of falsey and empty values for testing.
 *
 * @ignore
 */
import { falsey, empties } from '../../utils';

describe( 'jsonify', () => {
	describe( 'Should return valid JSON object for given input string', () => {
		it.each( [
			[ '[ 1, 2, 3 ]', [ 1, 2, 3 ] ],
			[ '{ "id": 1, "title": "lorem ipsum" }', { id: 1, title: 'lorem ipsum' } ],
			[
				'[{"id":1,"title":"sunt aut facere"},{"id":2,"title":"qui est esse"}]',
				[
					{ id: 1, title: 'sunt aut facere' },
					{ id: 2, title: 'qui est esse' },
				],
			],
			[ '{ "values": [ "a", "b", "c" ] }', { values: [ 'a', 'b', 'c' ] } ],
		] )( 'when given %s it returns %o', ( input, expected ) => {
			expect( jsonify( input ) ).toStrictEqual( expected );
		} );
	} );

	describe( 'Should accept falsey arguments', () => {
		const cases = map( falsey, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( jsonify( input ) );
		} );
	} );

	describe( 'Should accept empty arguments', () => {
		const cases = map( empties, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( jsonify( input ) );
		} );
	} );
} );
