/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { replace, nth, invoke } from 'lodash';

/**
 * Extracts selected block style slug from the provided block specific CSS class names.
 *
 * @function
 * @since 	 	1.0.0
 * @author	 	Mahdi Yazdani
 * @copyright	sixa AG
 * @param  	 	{string} classNames         CSS class names assigned to the block.
 * @return 	 	{string}                    Style name associated or selected for this block.
 * @example
 *
 * blockStyleSlug( 'wp-block-sixa-spacer is-style-fancy test-class-name' );
 */
const blockStyleSlug = ( classNames ) => replace( nth( invoke( classNames, 'match', /is-style-[^{\s]*/ ) ), /is-style-/, '' );

export default blockStyleSlug;
