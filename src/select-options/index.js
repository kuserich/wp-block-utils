/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { map, mapKeys, split, get, first, keys, concat } from 'lodash';

/**
 * Modify the names of the own enumerable properties (keys) of an object.
 *
 * @see 	https://www.npmjs.com/package/rename-keys
 * @ignore
 */
import renameKeys from 'rename-keys';

/**
 * Creates an object composed of the (nested) picked object properties.
 *
 * @ignore
 */
import deepPick from './deep-pick';

/**
 * Text to display for showing no options being selected.
 *
 * @ignore
 */
import optionNone from './option-none';

/**
 * Generates an array of objects to be passed to the `SelectControl` component.
 * SelectControl allow users to select from a single-option menu. It functions as a wrapper around the browser’s native `<select>` element.
 *
 * @function
 * @since 	 	1.0.0
 * @author	 	Mahdi Yazdani
 * @copyright	sixa AG
 * @param  	 	{Array}  posts          The response on the API call of array of post objects.
 * @param  	 	{string} paths          The property paths to pick.
 * @param  	 	{Array}  none        	Text to display for showing no options being selected.
 * @return 	 	{Array}                 An array of objects containing the label to be shown to the user, and value used to choose the selected value.
 * @example
 *
 * selectOptions( [ { id: 1, title: { rendered: 'sunt aut facere' } }, { id: 2, title: { rendered: 'qui est esse' } } ], { id: 'value', 'title.rendered': 'label' } );
 *
 * // => Array [ { value: 1, label: 'Hello world!' }, { value: 2, label: 'qui est esse' } ]
 */
const selectOptions = ( posts, paths, none = optionNone ) =>
	concat(
		none,
		map(
			map( posts, ( post ) => deepPick( post, keys( paths ) ) ),
			( post ) =>
				mapKeys( post, ( value, key ) =>
					get(
						renameKeys( paths, ( path ) => first( split( path, '.' ) ) ),
						key
					)
				)
		)
	);

export default selectOptions;
