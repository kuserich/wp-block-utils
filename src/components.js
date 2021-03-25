/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Spinner } = wp.components;

/**
 * A simple component to notify users that their action is being processed.
 */
const LoadingSpinner = ( { label } ) => (
    <>
        <p>
            { label || __( 'Fetching…', 'sixa' ) }
            <Spinner />
        </p>
    </>
);

export { LoadingSpinner };