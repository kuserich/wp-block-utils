/**
 * The function to be tested.
 */
import stringToBoolean from '../';

/**
 * Testing the function given one or a series of inputs against the expected return.
 */
describe( "Convert given inputs to a 'true' or 'false' boolean primitive.", () => {
	describe( "For 'truthy' inputs:", () => {
		test.each( [
			[ 'yes', true ],
			[ 1, true ],
			[ 'true', true ],
			[ 'TRUE', true ],
			[ '1', true ],
		] )( 'when given %p it returns %p', ( input, expected ) => {
			expect( stringToBoolean( input ) ).toBe( expected );
		} );
	} );

	describe( "For 'falsy' inputs:", () => {
		test.each( [
			[ 'no', false ],
			[ 0, false ],
			[ null, false ],
			[ undefined, false ],
			[ 'false', false ],
			[ 'FALSE', false ],
			[ '0', false ],
		] )( 'when given %p it returns %p', ( input, expected ) => {
			expect( stringToBoolean( input ) ).toBe( expected );
		} );
	} );
} );
