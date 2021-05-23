/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { isEqual, multiply, round, divide } from 'lodash';

/**
 * Generate dim CSS class name based on the provided ratio or opacity.
 *
 * @function
 * @since     1.0.0
 * @param	  {number} value           Dim ratio or opacity.
 * @return 	  {string}                 CSS class name generated from the ratio value.
 * @example
 *
 * dimRatioClassName( 30 );
 *
 * // => string 'has-background-dim-30'
 */
const dimRatioClassName = ( value ) =>
	isEqual( 0, value ) || isEqual( 50, value ) || ! value ? '' : `has-background-dim-${ multiply( 10, round( divide( value, 10 ) ) ) }`;

export default dimRatioClassName;
