/**
 * External dependencies
 */
import { registerPlugin } from '@wordpress/plugins';

const render = () => {};

registerPlugin( 'sama-gateway', {
	render,
	scope: 'woocommerce-checkout',
} );
