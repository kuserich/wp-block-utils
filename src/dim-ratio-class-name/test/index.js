/**
 * The function to be tested.
 *
 * @ignore
 */
import dimRatioClassName from '../';

describe( 'Returns string with CSS class name for valid ratio or opacity number input', () => {
	test.each( [
		[ 30, 'has-background-dim-30' ],
		[ 65, 'has-background-dim-70' ],
		[ 24.999, 'has-background-dim-20' ],
		[ 7, 'has-background-dim-10' ],
		[ 1, 'has-background-dim-0' ],
		[ Number.MAX_SAFE_INTEGER, 'has-background-dim-9007199254740990' ],
		[ -1, 'has-background-dim-0' ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( dimRatioClassName( input ) ).toBe( expected );
	} );
} );
describe( 'Returns string with CSS class name for invalid ratio or opacity number input', () => {
	test.each( [
		[ [], 'has-background-dim-0' ],
		[ [ '' ], 'has-background-dim-0' ],
		[ {}, 'has-background-dim-NaN' ],
		[ true, 'has-background-dim-0' ],
		[ Number.MAX_VALUE, 'has-background-dim-1.7976931348623157e+308' ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( dimRatioClassName( input ) ).toBe( expected );
	} );
} );

describe( 'Returns empty string for falseful and empty values', () => {
	test.each( [
		[ '', '' ],
		[ 0, '' ],
		[ 50, '' ],
		[ null, '' ],
		[ false, '' ],
		[ undefined, '' ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( dimRatioClassName( input ) ).toBe( expected );
	} );
} );
