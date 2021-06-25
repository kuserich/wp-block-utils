/**
 * The function to be tested.
 *
 * @ignore
 */
import focalPointStyle from '../';

describe( 'Should return a valid x/y coordinate percentage of the given background image’s position', () => {
	it.each( [
		[ { x: 0.25 }, '25% 100%' ],
		[ { y: 0.45 }, '100% 45%' ],
		[ { x: 1, y: 0 }, '100% 0%' ],
		[ { x: 0.67, y: 0.65 }, '67% 65%' ],
	] )( 'when given %o it returns %s', ( input, expected ) => {
		expect( focalPointStyle( input ) ).toBe( expected );
	} );
} );

describe( 'Should return a valid x/y coordinate percentage of the given empty or incomplete background image’s position', () => {
	it.each( [
		[ {}, '100% 100%' ],
		[ { x: 0.25 }, '25% 100%' ],
		[ { y: 0.45 }, '100% 45%' ],
	] )( 'when given %o it returns %s', ( input, expected ) => {
		expect( focalPointStyle( input ) ).toBe( expected );
	} );
} );

describe( 'Should return a valid x/y coordinate percentage, not floored or ceiled, of the given background image’s position', () => {
	it.each( [
		[ { x: 1.5, y: 2.7 }, '150% 270%' ],
		[ { x: -1, y: -3.141 }, '-100% -314%' ],
	] )( 'when given %o it returns %s', ( input, expected ) => {
		expect( focalPointStyle( input ) ).toBe( expected );
	} );
} );

describe( 'Should return `100% 100%` when given falsely argument including but not limited to an array, object, or an empty array', () => {
	it.each( [
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
