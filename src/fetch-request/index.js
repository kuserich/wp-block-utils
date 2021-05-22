/**
 * Utility to make WordPress REST API requests. It's a wrapper around `window.fetch`.
 *
 * @see 	https://github.com/WordPress/gutenberg/blob/trunk/packages/api-fetch/README.md
 * @ignore
 */
import apiFetch from '@wordpress/api-fetch';

/**
 * This packages includes a library of generic WordPress components to be used for
 * creating common UI elements shared between screens and features of the WordPress dashboard.
 *
 * @see 	https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/
 * @ignore
 */
import { addQueryArgs } from '@wordpress/url';

/**
 * Utility to make WordPress REST API requests. It's a wrapper around `window.fetch`.
 *
 * @function
 * @since 	 	1.0.0
 * @author	 	Mahdi Yazdani
 * @copyright	sixa AG
 * @param  	 	{string}  endpoint          The endpoint that is being appended to the REST API root URL for the current site.
 * @param  	 	{Object}  args              Request arguments.
 * @return 	 	{Promise}                   The object that represents the eventual completion (or failure) of an asynchronous operation.
 * @example
 *
 * fetchRequest( 'https://wptest.io/demo/wp-json/wp/v2/posts' ).then( ( data ) => console.log( data ) );
 *
 * // => Promise 'https://wptest.io/demo/wp-json/wp/v2/posts'
 */
const fetchRequest = async ( endpoint, args = { per_page: -1 } ) =>
	await apiFetch( {
		method: 'GET',
		path: addQueryArgs( endpoint, args ),
	} );

export default fetchRequest;
