/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { isEqual } from 'lodash';

/**
 * Determine whether the content is center positioned.
 *
 * @function
 * @since     1.0.0
 * @param  	  {string}    position    The value to check.
 * @return 	  {boolean}               Return true if content is center positioned.
 * @example
 *
 * isPositionCenter( 'center' );
 *
 * // => boolean true
 */
const isPositionCenter = ( position ) => isEqual( position, 'center center' ) || isEqual( position, 'center' );

export default isPositionCenter;
