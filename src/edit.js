import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

const Edit = (props) => {
    return (
        <div { ...useBlockProps() }>
            <p>{ __('Edit your block here', 'awp') }</p>
        </div>
    );
};

export default Edit;
