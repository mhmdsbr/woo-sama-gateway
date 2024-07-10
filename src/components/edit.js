import { TextControl } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';


const Edit = (props) => {
    const { attributes, setAttributes } = props;
    const { customInput } = attributes;

    return (
        <div {...useBlockProps()}>
            <TextControl
                label={__('Custom Input', 'sama')}
                value={customInput}
                onChange={(value) => setAttributes({ customInput: value })}
            />
        </div>
    );
};

export default Edit;
