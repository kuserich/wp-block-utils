/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { get } from 'lodash';

/**
 * Determine whether the content is center positioned.
 *
 * @ignore
 */
import isPositionCenter from '../is-position-center';

/**
 * Possible background position values.
 *
 * @ignore
 */
import positions from './positions';

/**
 * Generates content-position CSS class name based on provided value.
 *
 * @function
 * @since     1.0.0
 * @param  	  {string} value            CSS position value.
 * @return 	  {string}                  Corresponding CSS class name based on the provided position.
 * @example
 *
 * positionToClassName( 'center right' );
 *
 * // => string 'is-position-center-right'
 */
const positionToClassName = ( value ) => ( isPositionCenter( value ) ? '' : get( positions, value ) );

export default positionToClassName;
