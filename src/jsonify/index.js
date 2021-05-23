/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { attempt } from 'lodash';

/**
 * Parses a JSON string, constructing the JavaScript value or object described by the string.
 *
 * @function
 * @since     1.0.0
 * @param  	  {string} input            The string to parse as JSON.
 * @return 	  {Object}                  Converted value to object.
 * @example
 *
 * jsonify( '[{"id":1,"title":"sunt aut facere"},{"id":2,"title":"qui est esse"}]' );
 *
 * // => Object [ { id: 1, title: 'sunt aut facere' }, { id: 2, title: 'qui est esse' } ]
 */
const jsonify = ( input ) => attempt( JSON.parse, input );

export default jsonify;
