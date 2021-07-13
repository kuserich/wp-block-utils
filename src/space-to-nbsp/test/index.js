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
import spaceToNbsp from '../';

/**
 * Set of falsey and empty values for testing.
 *
 * @ignore
 */
import { falsey, empties } from '../../utils';

describe( 'spaceToNbsp', () => {
	describe( 'Should return valid string with empty spaces converted to corresponsding HTML character entity "&nbsp;" given a valid input string', () => {
		it.each( [
			[ 'Test', 'Test' ],
			[ ' Test', '&nbsp;Test' ],
			[ 'Test ', 'Test&nbsp;' ],
			[ 'Test example', 'Test&nbsp;example' ],
			[ ' Test example ', '&nbsp;Test&nbsp;example&nbsp;' ],
		] )( 'when given %s it returns %s', ( input, expected ) => {
			expect( spaceToNbsp( input ) ).toBe( expected );
		} );
	} );

	describe( 'Should accept falsey arguments', () => {
		const cases = map( falsey, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( spaceToNbsp( input ) );
		} );
	} );

	describe( 'Should accept empty arguments', () => {
		const cases = map( empties, ( value ) => [ value ] );
		it.each( cases )( 'when given %p', ( input ) => {
			expect.anything( spaceToNbsp( input ) );
		} );
	} );
} );
