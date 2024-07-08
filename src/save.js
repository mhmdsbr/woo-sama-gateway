import { useBlockProps } from '@wordpress/block-editor';

const Save = (props) => {
    return (
        <div { ...useBlockProps.save() }>
            <p>This is mohammad</p>
        </div>
    );
};

export default Save;

