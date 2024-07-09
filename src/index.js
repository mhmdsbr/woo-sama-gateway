import { registerBlockType } from '@wordpress/blocks';
// import edit from './components/edit';
import save from './components/save';
import './assets/css/style.css';
import name from '../block.json';

registerBlockType(name, {
    // edit,
    save,
});
