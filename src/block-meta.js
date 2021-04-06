/**
 * External dependencies
 */
import { PREFIX } from './constants';

/**
 * Prepend plugin prefix to the given block name or id.
 *
 * @param  {string} block 	    Block name/slug/id.
 * @param  {string} namespace 	Project-specific prefix.
 * @return {string} 			Return block name with plugin prefix prepended to it.
 */
const blockName = ( block, namespace ) => `${ namespace || PREFIX }/${ block }`;

/**
 * Generate WordPress block specific CSS class name.
 *
 * @param  {string} block 	    Block name/slug/id.
 * @param  {string} namespace 	Project-specific prefix.
 * @return {string} 			WordPress generated format block CSS class name.
 */
const blockClassName = ( block, namespace ) => `wp-block-${ namespace || PREFIX }-${ block }`;

export { blockName, blockClassName };
