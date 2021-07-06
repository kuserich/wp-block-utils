/**
 * The function to be tested.
 *
 * @ignore
 */
import stringToBoolean from '../';

describe( 'stringToBoolean', () => {
	describe( "Converts a truthful input to the boolean primitive 'true'", () => {
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

	describe( "Converts any other input to the boolean primitive 'false'", () => {
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
