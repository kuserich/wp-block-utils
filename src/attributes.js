/**
 * WordPress dependencies
 */
const { _x } = wp.i18n;

/**
 * Returns a list of CSS spacing properties.
 *
 * @return {Object} 				Margin and Padding specific attributes.
 */
const spacingAttrs = () => ( {
	top: '0px',
	left: '0px',
	right: '0px',
	bottom: '0px',
} );

/**
 * Returns a list of visibility breakpoint attributes.
 *
 * @return {Object} 				Visibility specific attributes.
 */
const visibilityAttrs = () => ( {
	desktop: {
		label: _x( 'Desktop', 'visibility label', 'sixa-extras' ),
		className: 'widescreen',
		value: false,
	},
	laptop: {
		label: _x( 'Laptop', 'visibility label', 'sixa-extras' ),
		className: 'desktop',
		value: false,
	},
	tablet: {
		label: _x( 'Tablet', 'visibility label', 'sixa-extras' ),
		className: 'tablet',
		value: false,
	},
	smartphone: {
		label: _x( 'Smartphone', 'visibility label', 'sixa-extras' ),
		className: 'mobile',
		value: false,
	},
} );

export { spacingAttrs, visibilityAttrs };
