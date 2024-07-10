import { useBlockProps } from '@wordpress/block-editor';

const Save = (props) => {
    const { attributes } = props;
    const { customInput } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
            <p>{customInput}</p>
        </div>
    );
};

export default Save;
