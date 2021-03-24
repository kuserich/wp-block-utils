/**
 * External dependencies
 */
import { PREFIX } from './constants';

/**
 * Prepend plugin prefix to the given block name or id.
 *
 * @param  {string} block 	    Block name/slug/id.
 * @return {string} 			Return block name with plugin prefix prepended to it.
 */
const blockName = ( block ) => `${ PREFIX }/${ block }`;

/**
 * Generate WordPress block specific CSS class name.
 *
 * @param  {string} block 	    Block name/slug/id.
 * @return {string} 			WordPress generated format block CSS class name.
 */
const blockClassName = ( block ) => `wp-block-${ PREFIX }-${ block }`;

export { blockName, blockClassName };
