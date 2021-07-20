/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { isString } from 'lodash';

/**
 * Generate inline background-image CSS style based on provided URL.
 *
 * @function
 * @since      1.0.1
 *             Sanitize and slugify given url string.
 * @since      1.0.0
 * @param      {string}    url    Background image URL or web address.
 * @return     {Object}           CSS style for the provided background image address.
 * @example
 *
 * backgroundImageStyle( 'https://interactive-examples.mdn.mozilla.net/media/examples/lizard.png' );
 *
 * // => Object { backgroundImage: 'url(https://interactive-examples.mdn.mozilla.net/media/examples/lizard.png)' }
 */
const backgroundImageStyle = ( url ) =>
	isString( url ) && url.match( /\w+\.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gim ) ? { backgroundImage: `url(${ url })` } : {};

export default backgroundImageStyle;
