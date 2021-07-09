/**
 * The function to be tested.
 *
 * @ignore
 */
import stringToBoolean from '../';

describe( 'stringToBoolean', () => {
	describe( 'Should convert truthful values to boolean primitive "true"', () => {
		it.each( [
			[ 'yes', true ],
			[ 'true', true ],
			[ 'TRUE', true ],
			[ '1', true ],
			[ 1, true ],
			[ true, true ],
		] )( 'when given %p it returns %p', ( input, expected ) => {
			expect( stringToBoolean( input ) ).toBe( expected );
		} );
	} );

	describe( 'Should convert any other input to boolean primitive "false"', () => {
		it.each( [
			[ '', false ],
			[ '0', false ],
			[ 'no', false ],
			[ 'false', false ],
			[ 'FALSE', false ],
			[ 0, false ],
			[ 2, false ],
			[ {}, false ],
			[ [], false ],
			[ false, false ],
			[ null, false ],
			[ undefined, false ],
		] )( 'when given %p it returns %p', ( input, expected ) => {
			expect( stringToBoolean( input ) ).toBe( expected );
		} );
	} );
} );
