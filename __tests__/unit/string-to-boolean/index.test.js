/**
 * The function to be tested.
 */
import stringToBoolean from '../../../src/string-to-boolean';

/**
 * Testing the function given one or a series of inputs against the expected return.
 */
describe( "Convert given inputs to a 'true' boolean primitive.", () => {
	test.each`
		input       | expected
		${ 'yes' }  | ${ true }
		${ 1 }      | ${ true }
		${ 'true' } | ${ true }
		${ 'TRUE' } | ${ true }
		${ '1' }    | ${ true }
	`( 'returns $expected when given $input', ( { input, expected } ) => {
		expect( stringToBoolean( input ) ).toBe( expected );
	} );
} );
