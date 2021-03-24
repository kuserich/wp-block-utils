/**
 * External dependencies
 */
import { get, isEqual } from 'lodash';
import { POSITION_CLASSNAMES } from './constants';

/**
 * Determine whether the content is positioned center.
 *
 * @param  {string} position 	        CSS position value.
 * @return {boolean} 			        Return true if content is center positioned.
 */
const isPositionCenter = ( position ) => {
	return ! position || isEqual( position, 'center center' ) || isEqual( position, 'center' );
};

/**
 * Generate content-position CSS class name based on given position value.
 *
 * @param  {string} contentPosition 	CSS position value.
 * @return {string} 			        Corresponding CSS based on the given content-position.
 */
const positionToClassName = ( contentPosition ) => {
	/*
	 * Only render a class name if the `contentPosition` is not center (the default).
	 */
	if ( isPositionCenter( contentPosition ) ) return '';

	return get( POSITION_CLASSNAMES, contentPosition );
};

export { POSITION_CLASSNAMES, isPositionCenter, positionToClassName };
