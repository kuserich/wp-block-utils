/**
 * External dependencies
 */
import classnames from 'classnames';
import { eq, get, join, trim, forOwn, lowerCase, map } from 'lodash-es';/**

 * WordPress dependencies
 */
const { _x } = wp.i18n;

/**
 * Returns a list of visibility breakpoint attributes.
 *
 * @return {Object} 				Visibility specific attributes.
 */
const visibilityAttrs = () => ( {
    desktop: {
        label: _x( 'Desktop', 'visibility label', 'sixa' ),
        className: 'widescreen',
        value: false,
    },
    laptop: {
        label: _x( 'Laptop', 'visibility label', 'sixa' ),
        className: 'desktop',
        value: false,
    },
    tablet: {
        label: _x( 'Tablet', 'visibility label', 'sixa' ),
        className: 'tablet',
        value: false,
    },
    smartphone: {
        label: _x( 'Smartphone', 'visibility label', 'sixa' ),
        className: 'mobile',
        value: false,
    },
} );

/**
 * Returns a list of visibility CSS class names based on given breakpoints.
 *
 * @param  {Object} breakpoints 	Media query breakpoints.
 * @return {string} 				CSS class names.
 */
const visibilityClassNames = ( breakpoints = {} ) => {
    const classNames = [],
        attributes = visibilityAttrs();

    forOwn( breakpoints, ( value, key ) => {
        classNames.push( classnames( { [ `hide-${ get( attributes, `${ key }.className` ) }` ]: !! value } ) );
    } );
    return trim( join( classNames, ' ' ) );
};

/**
 * Returns a list of visibility breakpoints toolbar controls.
 *
 * @param  {Object} props			Component properties.
 * @return {JSX} 			    	Toolbar controls for toggleing device (media) breakpoints.
 */
const VisibilityToolbar = ( props ) => {
    const { devices, onChange } = props,
        attributes = visibilityAttrs();

    return (
        <ToolbarGroup
            controls={ map( devices, ( value, key ) => ( {
                icon: <Dashicon icon={ key } />,
                title: sprintf(
                    /* translators: %s: Device name. */
                    _x( 'Hide on %s?', 'visibility toolbar title', 'sixa' ),
                    lowerCase( get( attributes, `${ key }.label` ) )
                ),
                onClick: () => onChange( key, value ),
                isActive: eq( ! value, false ),
            } ) ) }
        />
    );
};

export { visibilityClassNames, visibilityAttrs, VisibilityToolbar };
