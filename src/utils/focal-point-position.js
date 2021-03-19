/**
 * External dependencies
 */
import { get, round, multiply } from 'lodash';

const focalPointPosition = ( focalPoint ) =>
	`${ round( multiply( get( focalPoint, 'x' ), 100 ) ) }% ${ round( multiply( get( focalPoint, 'y' ), 100 ) ) }%`;

export default focalPointPosition;
