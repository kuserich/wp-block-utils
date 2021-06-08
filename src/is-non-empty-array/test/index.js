/**
 * The function to be tested.
 *
 * @ignore
 */
import isNonEmptyArray from '../';

/**
 * Variations of valid array objects
 *
 * @ignore
 */
const validInput = [
	[ [ '1', 2, true ], true ],
	[ [ '' ], true ],
	[
		[
			[ '1', '2' ],
			[ '3', '4' ],
		],
		true,
	],
];

/**
 * Variations of invalid input
 *
 * @ignore
 */
const invalidInput = [
	[ [], false ],
	[ {}, false ],
	[ 0, false ],
	[ 1, false ],
	[ '', false ],
	[ false, false ],
	[ null, false ],
	[ undefined, false ],
];

describe( 'isNonEmptyArray', () => {
	describe( 'Check if value passed is a non-empty array object', () => {
		describe( 'Check if input is a non-empty array object', () => {
			test.each( validInput )( 'when given %p it returns %p', ( input, expected ) => {
				expect( isNonEmptyArray( input ) ).toStrictEqual( expected );
				expect( input ).toBeArray();
			} );
		} );

		describe( 'Check if any other input is a non-empty array object', () => {
			test.each( invalidInput )( 'when given %p it returns %p', ( input, expected ) => {
				expect( isNonEmptyArray( input ) ).toStrictEqual( expected );
			} );
		} );
	} );
} );
