/**
 * External dependencies
 */
import { gt, replace, pickBy } from 'lodash';

const normalizeZeroValues = ( styles ) => pickBy( styles, ( style ) => gt( replace( style, /\D/g, '' ), 0 ) );

export default normalizeZeroValues;
