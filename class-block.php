<?php

use Automattic\WooCommerce\Blocks\Payments\Integrations\AbstractPaymentMethodType;
use JetBrains\PhpStorm\ArrayShape;

final class Sama_Gateway_Blocks extends AbstractPaymentMethodType {

    private $gateway;
    protected $name = 'WC_sama';

    public function initialize() {
        $this->settings = get_option( 'woocommerce_sama_gateway_settings', [] );
        $this->gateway = new WC_sama();
    }

    public function is_active(): bool
    {
        return $this->gateway->is_available();
    }

    public function get_payment_method_script_handles(): array
    {

        wp_register_script(
            'sama_gateway-blocks-integration',
            plugin_dir_url(__FILE__) . '/assets/js/checkout.js',
            [
                'wc-blocks-registry',
                'wc-settings',
                'wp-element',
                'wp-html-entities',
                'wp-i18n',
            ],
            null,
            true
        );
        if( function_exists( 'wp_set_script_translations' ) ) {
            wp_set_script_translations( 'sama_gateway-blocks-integration');
        }
        return [ 'sama_gateway-blocks-integration' ];
    }

    #[ArrayShape(['title' => "mixed", 'description' => "mixed"])] public function get_payment_method_data(): array
    {
        return [
            'title' => $this->gateway->title,
            'description' => $this->gateway->description,
        ];
    }

}
