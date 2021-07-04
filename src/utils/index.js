/**
 * Used to provide falsey values to methods.
 *
 * @ignore
 */
const falsey = [ , null, undefined, false, 0, NaN, '' ];

/**
 * Used to provide empty values to methods.
 *
 * @ignore
 */
const empties = [ [], {}, null, undefined, false, 0, NaN, '' ];

/**
 * Used to provide primitive values to methods.
 *
 * @ignore
 */
const primitives = [ null, undefined, false, true, 1, NaN, 'a' ];

export { falsey, empties, primitives };
