<?php
use Automattic\WooCommerce\Blocks\Package;
use Automattic\WooCommerce\Blocks\StoreApi\Schemas\CartSchema;
use Automattic\WooCommerce\Blocks\StoreApi\Schemas\CheckoutSchema;

/**
 * Sama Gateway Extend WC Core.
 */
class Sama_Gateway_Extend_Woo_Core {

	/**
	 * Plugin Identifier, unique to each plugin.
	 *
	 * @var string
	 */
	private $name = 'sama-gateway';

	/**
	 * Bootstraps the class and hooks required data.
	 */
	public function init() {
		$this->save_sama_gateway();
	}


	/**
	 * Register shipping workshop schema into the Checkout endpoint.
	 *
	 * @return array Registered schema.
	 */
    public static function extend_checkout_schema() {

        return [
            'samaGatewayInputField' => [
                'description' => 'Adds a Custom Input',
                'type'        => 'string',
                'context'     => [ 'view', 'edit' ],
                'readonly'    => true,
                'arg_options' => [
                    'validate_callback' => function( $value ) {
                        return is_string( $value );
                    },
                ],
            ],
        ];
    }


	/**
	 * Saves the shipping instructions to the order's metadata.
	 *
	 * @return void
	 */
	private function save_sama_gateway() {
		add_action(
			'woocommerce_store_api_checkout_update_order_from_request',
			function( \WC_Order $order, \WP_REST_Request $request ) {
				$shipping_workshop_request_data = $request['extensions'][ $this->name ];
				$alternate_shipping_instruction = $shipping_workshop_request_data['samaGatewayInputField'];
				$order->update_meta_data( 'shipping_workshop_alternate_shipping_instruction', $alternate_shipping_instruction );
				$order->save();
			},
			10,
			2
		);


		add_action('woocommerce_store_api_checkout_update_order_meta',
			function( \WC_Order $order) {
				$alternate1 = $order->get_meta( 'shipping_workshop_alternate_shipping_instruction' );
				$orderID = $order->get_id();

				update_post_meta($orderID, 'sama_payment_type_label', $alternate1 );
				$order->save();
			},
			10, 1);
	}


}
