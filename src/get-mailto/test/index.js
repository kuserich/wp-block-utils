/**
 * The function to be tested.
 *
 * @ignore
 */
import getMailTo from '../';

/**
 * An Array of Arrays with the arguments that are passed into the test fn for each row
 * 1st Array => input, 2nd Array => expected output
 *
 * @see https://jestjs.io/docs/api#testeachtablename-fn-timeout
 */
const inputAndExpectedReturn = [
	[ 'mailto:iNfO123_._@eXAmple1--2-3_.com_._', [ 'iNfO123_._@eXAmple1--2-3_.com_._' ] ],
	[ 'mailto:iNfO123@eXAmple123.com,info@test.com', [ 'iNfO123@eXAmple123.com', 'info@test.com' ] ],
	[ 'mailto:info@example.com', [ 'info@example.com' ] ],
	[ 'mailto:info@example.com,mailto:info@test.com', [ 'info@example.com', 'info@test.com' ] ],
];

describe( "Extracts email addresses from 'mailto' href link", () => {
	test.each( inputAndExpectedReturn )( 'when given %p it returns %p', ( input, expected ) => {
		expect( getMailTo( input ) ).toStrictEqual( expected );
		expect( input ).toBeString();
		expect( expected ).toBeArray();
	} );
} );
