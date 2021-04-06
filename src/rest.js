/**
 * External dependencies
 */
import { get } from 'lodash-es';

/**
 * WordPress dependencies
 */
const { apiFetch } = wp;
const { addQueryArgs } = wp.url;

/**
 * Fetch rest stateful.
 *
 * @param  {string} 	endpoint 	    	REST API root URL.
 * @param  {Function} 	setState 	    	Update state value.
 * @param  {boolean} 	isStillMounted 		Whether the component is mounted.
 * @param  {Object} 	args 	    		REST arguments.
 */
const restFetchStateful = ( endpoint, setState, isStillMounted, args = { per_page: -1 } ) =>
	apiFetch( {
		path: addQueryArgs( endpoint, args ),
	} )
		.then( ( data ) => {
			if ( get( isStillMounted, 'current' ) ) {
				setState( data );
			}
		} )
		.catch( () => {
			if ( get( isStillMounted, 'current' ) ) {
				setState( [] );
			}
		} );

export { restFetchStateful };
