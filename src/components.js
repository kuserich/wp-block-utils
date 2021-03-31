/**
 * External dependencies
 */
import { compact, forEach, map } from 'lodash-es';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Spinner } = wp.components;
const { useEffect } = wp.element;
const { transformStyles } = wp.blockEditor;

/**
 * A simple component to notify users that their action is being processed.
 *
 * @param {string} label 	    Label shown above spinner.
 */
const LoadingSpinner = ( { label } ) => (
	<>
		<p>
			{ label || __( 'Fetching…', 'sixa' ) }
			<Spinner />
		</p>
	</>
);

/**
 * Applies a series of CSS rule transforms to wrap selectors inside a given class.
 *
 * @param  {Object} props 	            Block name/slug/id.
 * @param  {Array}  props.styles 	    CSS rules.
 */
export default function EditorStyles( { styles } ) {
	useEffect( () => {
		const updatedStyles = transformStyles( styles, '.editor-styles-wrapper' );

		const nodes = map( compact( updatedStyles ), ( updatedCSS ) => {
			const node = document.createElement( 'style' );
			node.innerHTML = updatedCSS;
			document.body.appendChild( node );

			return node;
		} );

		return () => forEach( nodes, ( node ) => document.body.removeChild( node ) );
	}, [ styles ] );

	return null;
}

export { LoadingSpinner, EditorStyles };
