/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { get, round, multiply } from 'lodash';

/**
 * Generates corresponding CSS based on the provided focal point picker values.
 *
 * @function
 * @since 	 	1.0.0
 * @author	 	Mahdi Yazdani
 * @copyright	sixa AG
 * @param  	 	{Object} value           Focal point object value.
 * @return 	 	{string}                 Calculated X and Y position based on the focalpoint object provided.
 * @example
 *
 * focalPointStyle( { x: 0.67, y: 0.65 } );
 *
 * // => string '67% 65%'
 */
const focalPointStyle = ( value ) => `${ round( multiply( get( value, 'x' ), 100 ) ) }% ${ round( multiply( get( value, 'y' ), 100 ) ) }%`;

export default focalPointStyle;
