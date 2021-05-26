/**
 * The function to be tested.
 */
import stringToBoolean from '../../../src/string-to-boolean';

/**
 * Clearing all mocks to prevent carrying incorrect values between readings.
 */
afterEach( () => {
	jest.clearAllMocks();
} );

/**
 * Basic initial assertions (e.g. 'Does the function exist?', 'Is the function defined?').
 */
describe( 'Initialization checks', () => {
	test( 'stringToBoolean function exists', () => {
		expect( stringToBoolean ).toBeDefined();
	} );

	test( 'stringToBoolean is a function', () => {
		expect( typeof stringToBoolean ).toEqual( 'function' );
	} );
} );

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
