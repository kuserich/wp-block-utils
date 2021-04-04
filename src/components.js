/**
 * External dependencies
 */
import { compact, forEach, map } from 'lodash-es';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Spinner, SelectControl, __experimentalUnitControl: UnitControl, Flex } = wp.components;
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

/**
 * A simple Inspector component to configure the background-size of a container.
 *
 * @param {Object} props
 * @param {string} props.backgroundSize			One of (auto, cover, contain, custom).
 * @param {string} props.backgroundWidth		Width value with unit (e.g. 100px).
 * @param {string} props.backgroundHeight		Height value with unit (e.g. 100px).
 * @param {Function} props.onChangeSize 		Handler for onChange event for size attribute.
 * @param {Function} props.onChangeWidth 		Handler for onChange event for width attribute.
 * @param {Function} props.onChangeHeight	 	Handler for onChange event for height attribute.
 */
const BackgroundImageSizeControl = ( {
	backgroundSize,
	backgroundWidth,
	backgroundHeight,
	onChangeSize,
	onChangeWidth,
	onChangeHeight,
} ) => {
	const showBackgroundSizeInputs = backgroundSize === 'custom';

	return (
		<>
			<SelectControl
				label={ __( 'Background size', 'sixa' ) }
				value={ backgroundSize }
				options={ [
					{ label: 'auto', value: 'auto' },
					{ label: 'cover', value: 'cover' },
					{ label: 'contain', value: 'contain' },
					{ label: 'custom', value: 'custom' },
				] }
				onChange={ onChangeSize }
			/>
			{ showBackgroundSizeInputs && (
				<Flex>
					<UnitControl label={ __( 'Width', 'sixa' ) } onChange={ onChangeWidth } value={ backgroundWidth } />
					<UnitControl label={ __( 'Height', 'sixa' ) } onChange={ onChangeHeight } value={ backgroundHeight } />
				</Flex>
			) }
		</>
	);
};

export { LoadingSpinner, EditorStyles, BackgroundImageSizeControl };
