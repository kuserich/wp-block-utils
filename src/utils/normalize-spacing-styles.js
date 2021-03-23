/**
 * External dependencies
 */
import renameKeys from 'rename-keys';
import { isPlainObject, upperFirst } from 'lodash-es';
import normalizeZeroValues from './normalize-zero-values';

const normalizeSpacingStyles = ( spacing, type ) =>
	isPlainObject( spacing )
		? normalizeZeroValues( renameKeys( spacing, ( key ) => `${ type }${ upperFirst( key ) }` ) )
		: {};

export default normalizeSpacingStyles;
