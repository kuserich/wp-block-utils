/**
 * External dependencies
 */
import { isEqual, multiply, divide, round } from 'lodash-es';

const dimRatioToClassName = ( ratio ) =>
	isEqual( ratio, 0 ) || isEqual( ratio, 50 ) || ! ratio
		? null
		: `has-background-dim-${ multiply( 10, round( divide( ratio, 10 ) ) ) }`;

export default dimRatioToClassName;
