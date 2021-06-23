/**
 * The function to be tested.
 *
 * @ignore
 */
import focalPointStyle from '../';

describe( 'Should return valid string with X and Y values calculated for valid object input', () => {
	test.each( [
		[ { x: 0.25 }, '25% 100%' ],
		[ { y: 0.45 }, '100% 45%' ],
		[ { x: 1, y: 0 }, '100% 0%' ],
		[ { x: 0.67, y: 0.65 }, '67% 65%' ],
	] )( 'when given %o it returns %s', ( input, expected ) => {
		expect( focalPointStyle( input ) ).toBe( expected );
	} );
} );

describe( 'Should return valid string with X and Y values calculated for empty or incomplete object input', () => {
	test.each( [
		[ {}, '100% 100%' ],
		[ { x: 0.25 }, '25% 100%' ],
		[ { y: 0.45 }, '100% 45%' ],
	] )( 'when given %o it returns %s', ( input, expected ) => {
		expect( focalPointStyle( input ) ).toBe( expected );
	} );
} );

describe( 'Should return valid string with X and Y values, not floored or ceiled, for valid object input', () => {
	test.each( [
		[ { x: 1.5, y: 2.7 }, '150% 270%' ],
		[ { x: -1, y: -3.141 }, '-100% -314%' ],
	] )( 'when given %o it returns %s', ( input, expected ) => {
		expect( focalPointStyle( input ) ).toBe( expected );
	} );
} );

describe( 'Should return string with maximum allowed X and Y values for falseful or empty values', () => {
	test.each( [
		[ [ '' ], '100% 100%' ],
		[ '', '100% 100%' ],
		[ [], '100% 100%' ],
		[ null, '100% 100%' ],
		[ undefined, '100% 100%' ],
		[ false, '100% 100%' ],
		[ true, '100% 100%' ],
		[ 0, '100% 100%' ],
		[ -0, '100% 100%' ],
		[ 0n, '100% 100%' ],
		[ 1, '100% 100%' ],
	] )( 'when given %p it returns %s', ( input, expected ) => {
		expect( focalPointStyle( input ) ).toBe( expected );
	} );
} );
