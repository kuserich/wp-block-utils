/**
 * The function to be tested.
 *
 * @ignore
 */
import stringify from '../';

describe( 'Should return a JSON string for a valid input object', () => {
	it.each( [
		[ { id: 1, title: 'sunt aut facere' }, '{"id":1,"title":"sunt aut facere"}' ],
		[ { date: new Date( +0 ) }, '{"date":"1970-01-01T00:00:00.000Z"}' ],
		[
			[
				{ id: 1, title: 'sunt aut facere' },
				{ id: 2, title: 'qui est esse' },
			],
			'[{"id":1,"title":"sunt aut facere"},{"id":2,"title":"qui est esse"}]',
		],
	] )( 'when given %p it returns %s', ( input, expected ) => {
		expect( stringify( input ) ).toBe( expected );
	} );
} );

describe( 'Should return an invalid string for an valid input string', () => {
	it.each( [ [ 'lorem ipsum', '"lorem ipsum"' ] ] )( 'when given %s it returns %s', ( input, expected ) => {
		expect( stringify( input ) ).toBe( expected );
	} );
} );

describe( 'Should return an invalid array for an valid input array', () => {
	it.each( [ [ [ 'lorem', 'ipsum' ], '["lorem","ipsum"]' ] ] )( 'when given %p it returns %s', ( input, expected ) => {
		expect( stringify( input ) ).toBe( expected );
	} );
} );

describe( 'Should return an invalid string for falseful values', () => {
	it.each( [
		[ '', '""' ],
		[ [ '' ], '[""]' ],
		[ [], '[]' ],
		[ {}, '{}' ],
		[ 0, '0' ],
		[ -0, '0' ],
		[ NaN, 'null' ],
		[ false, 'false' ],
		[ true, 'true' ],
		[ null, 'null' ],
	] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( stringify( input ) ).toBe( expected );
	} );
} );

describe( 'Should return primitive "undefined" given value "undefined"', () => {
	it.each( [ [ undefined, undefined ] ] )( 'when given %p it returns %p', ( input, expected ) => {
		expect( stringify( input ) ).toBe( expected );
	} );
} );
