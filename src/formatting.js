/**
 * External dependencies
 */
import { isBoolean, isEqual } from 'lodash-es';

/**
 * Converts a string (e.g. 'yes' or 'no') to a bool.
 *
 * @param 	{boolean|string} input 		String to convert. If a bool is passed it will be returned as-is.
 * @return 	{boolean} 			    	Converted value.
 */
const stringToBoolean = ( input ) =>
	isBoolean( input )
		? input
		: isEqual( 'yes', input ) || isEqual( 1, input ) || isEqual( 'true', input ) || isEqual( 'TRUE', input ) || isEqual( '1', input );

/**
 * Converts a bool to a 'yes' or 'no'.
 *
 * @param 	{boolean|string} input 		Bool to convert. If a string is passed it will first be converted to a bool.
 * @return 	{string} 			    	Converted value.
 */
const booleanToString = ( input ) => {
	if ( ! isBoolean( input ) ) {
		return stringToBoolean( input );
	}

	return isEqual( true, input ) ? 'yes' : 'no';
};

export { stringToBoolean, booleanToString };
