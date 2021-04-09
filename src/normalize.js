/**
 * External dependencies
 */
import renameKeys from 'rename-keys';
import { gt, get, pickBy, isEqual, multiply, divide, round, isPlainObject, upperFirst, isArray } from 'lodash-es';

/**
 * Generate dim CSS class name based on given ratio or opacity.
 *
 * @param  {number} ratio 	    Dim ration.
 * @return {string} 			Validated CSS class name generated based on the ration given.
 */
const normalizeDimRatio = ( ratio ) =>
	isEqual( ratio, 0 ) || isEqual( ratio, 50 ) || ! ratio ? null : `has-background-dim-${ multiply( 10, round( divide( ratio, 10 ) ) ) }`;

/**
 * Generates corresponding CSS based on the given focal point picker value.
 *
 * @param  {Object} focalPoint 	Focal point object values.
 * @return {string} 			Calculated X and Y position based on the focalpoint object given.
 */
const normalizeFocalPointPosition = ( focalPoint ) =>
	`${ round( multiply( get( focalPoint, 'x' ), 100 ) ) }% ${ round( multiply( get( focalPoint, 'y' ), 100 ) ) }%`;

/**
 * Generate inline background-image CSS style based on given URL.
 *
 * @param  {string} url 		Background image URL or web address.
 * @return {Object} 			CSS style for the given background-image address.
 */
const normalizeBackgroundUrl = ( url ) => ( url ? { backgroundImage: `url(${ url })` } : {} );

/**
 * Remove zero unit values from given list of inline style object.
 *
 * @param  {Object} styles 	    Spacing CSS styles.
 * @return {Object} 			Spacing CSS styles without zero or false values.
 */
const normalizeZeroStyles = ( styles ) => pickBy( styles, ( style ) => gt( stripNonNumericCharacters( style ), 0 ) );

/**
 * Normalize padding and margin inline styles with removing falsy values.
 *
 * @param  {Object} spacing 	Spacing properties.
 * @param  {string} type 	    Media query breakpoints.
 * @return {Object} 			CSS class names.
 */
const normalizeSpacingStyles = ( spacing, type ) =>
	isPlainObject( spacing ) ? normalizeZeroStyles( renameKeys( spacing, ( key ) => `${ type }${ upperFirst( key ) }` ) ) : {};

/**
 * Generated a background-size CSS value from size selection and width and height values.
 *
 * @param {Object} backgroundSize
 * @param {string} backgroundSize.selection One of (auto, container, cover, custom).
 * @param {string} backgroundSize.width CSS value including unit (e.g. 100px).
 * @param {string} backgroundSize.height CSS value including unit (e.g. 100px).
 * @return {string} background-size value.
 */
const normalizeBackgroundSizeStyle = ( { selection, width, height } ) => {
	if ( selection !== 'custom' ) {
		return selection;
	}

	const widthValue = stripNonNumericCharacters( width ) === '0' ? 'auto' : width;
	const heightValue = stripNonNumericCharacters( height ) === '0' ? 'auto' : height;
	return `${ widthValue } ${ heightValue }`;
};

/**
 * Strips all non-numeric characters from the given string.
 * Used to retrieve the digit value from a CSS value without knowing the unit.
 * e.g. 100px --> 100
 *
 * @param {string} value CSS value.
 * @return {string} Stripped value.
 */
const stripNonNumericCharacters = ( value ) => {
	return value.replace( /\D/g, '' );
};

/**
 * Check if value is classified as an array object and non-empty.
 *
 * @param  {Array}	arr			Array object.
 */
const isNonEmptyArray = ( arr ) => isArray( arr ) && !! arr.length;

export {
	normalizeDimRatio,
	normalizeFocalPointPosition,
	normalizeBackgroundUrl,
	normalizeZeroStyles,
	normalizeSpacingStyles,
	normalizeBackgroundSizeStyle,
	stripNonNumericCharacters,
	isNonEmptyArray,
};
