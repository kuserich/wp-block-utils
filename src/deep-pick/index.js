/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { forEach, split, get, set, first } from 'lodash';

/**
 * Creates an object composed of the (nested) picked object properties.
 *
 * @function
 * @since      1.0.0
 * @param  	   {Object}    collection    The source object.
 * @param  	   {Array}     paths         The property paths to pick.
 * @return     {Object}                  Returns the new object.
 * @example
 *
 * deepPick( { id: 1, title: { rendered: 'Hello world!' } }, [ 'title.rendered' ] );
 *
 * // => Object { title: 'Hello world!' }
 */
const deepPick = ( collection, paths ) => {
	const picked = {};
	forEach( paths, ( path ) => set( picked, first( split( path, '.' ) ), get( collection, path ) ) );
	return picked;
};

export default deepPick;
