/**
 * Strips all non-numeric characters from the given string.
 * Used to retrieve the digit value from a CSS value without knowing the unit.
 * e.g. 100px --> 100
 *
 * @param {string} value CSS value.
 * @return {string} Stripped value.
 */
const stripUnit = ( value ) => {
	return value.replace( /\D/g, '' );
};

export { stripUnit };
