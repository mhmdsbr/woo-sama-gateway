<?php
/*
Plugin Name: Gateway for Sama on WooCommerce
Version: 1.0.0
Description:  افزونه درگاه پرداخت سما برای ووکامرس
Plugin URI: https://www.sama.ir/
Author: Mohammad Saber
Author URI: https://mohammadsaber.com
*/
if(!defined('ABSPATH')) exit;

define('WOO_SAMADIR', plugin_dir_path( __FILE__ ));
define('WOO_SAMADU', plugin_dir_url( __FILE__ ));

function load_sama_woo_gateway() {

    /* Add Sama Gateway Method */
    add_filter('woocommerce_payment_gateways', 'Woocommerce_Add_sama_Gateway');
    function Woocommerce_Add_sama_Gateway($methods){
        $methods[] = 'WC_sama';
        return $methods;
    }
    /* Add Iranian Currencies Woocommerce */
    add_filter('woocommerce_currencies', 'add_IR_currency_For_Sama');
    function add_IR_currency_For_Sama($currencies){
        $currencies['IRR'] = __('ریال', 'woocommerce');
        $currencies['IRT'] = __('تومان', 'woocommerce');
        $currencies['IRHR'] = __('هزار ریال', 'woocommerce');
        $currencies['IRHT'] = __('هزار تومان', 'woocommerce');
        return $currencies;
    }
    /* Add Iranian Currencies Symbols Woocommerce */
    add_filter('woocommerce_currency_symbol', 'add_IR_currency_symbol_For_Sama', 10, 2);
    function add_IR_currency_symbol_For_Sama($currency_symbol, $currency){
        switch ($currency) {
            case 'IRR':
                $currency_symbol = 'ریال';
                break;
            case 'IRT':
                $currency_symbol = 'تومان';
                break;
            case 'IRHR':
                $currency_symbol = 'هزار ریال';
                break;
            case 'IRHT':
                $currency_symbol = 'هزار تومان';
                break;
        }
        return $currency_symbol;
    }
    require_once( WOO_SAMADIR . 'class-wc-gateway-sama.php' );
}
add_action('plugins_loaded', 'load_sama_woo_gateway', 0);


/**
 * Custom function to declare compatibility with cart_checkout_blocks feature
 */
function declare_sama_cart_checkout_blocks_compatibility() {
    // Check if the required class exists
    if (class_exists('\Automattic\WooCommerce\Utilities\FeaturesUtil')) {
        // Declare compatibility for 'cart_checkout_blocks'
        \Automattic\WooCommerce\Utilities\FeaturesUtil::declare_compatibility('cart_checkout_blocks', __FILE__, true);
    }
}
// Hook the custom function to the 'before_woocommerce_init' action
add_action('before_woocommerce_init', 'declare_sama_cart_checkout_blocks_compatibility');


// Hook the custom function to the 'woocommerce_blocks_loaded' action
add_action( 'woocommerce_blocks_loaded', 'sama_register_order_approval_payment_method_type' );

/**
 * Custom function to register a payment method type
 **/
function sama_register_order_approval_payment_method_type() {
    // Check if the required class exists
    if ( ! class_exists( 'Automattic\WooCommerce\Blocks\Payments\Integrations\AbstractPaymentMethodType' ) ) {
        return;
    }

    // Include the custom Blocks Checkout class
    require_once plugin_dir_path(__FILE__) . 'class-block.php';

    // Hook the registration function to the 'woocommerce_blocks_payment_method_type_registration' action
    add_action(
        'woocommerce_blocks_payment_method_type_registration',
        function( Automattic\WooCommerce\Blocks\Payments\PaymentMethodRegistry $payment_method_registry ) {
            $payment_method_registry->register( new Sama_Gateway_Blocks );
        }
    );
}

add_action('wp_footer', 'custom_checkout_button_script');
function custom_checkout_button_script()
{
    ?>
    <style>
        .disabled_by_sama_plugin * {
            cursor: no-drop;
        }

        #sama_payment_type_f_field {
            display: none !important;
        }

        .disabled_by_sama_plugin {
            background: #5552;
        }

        #sama_payment_type_f {
            display: none !important;
        }
    </style>
    <script type="text/javascript">
        setTimeout(() => {
            jQuery('p:empty').remove();
        }, 500);
        jQuery('p:empty').remove();
        jQuery(document).ready(function ($) {
            setTimeout(() => {
                jQuery('p:empty').remove();
            }, 500);
            jQuery('p:empty').remove();
            $('.disable_all_and_enable_sama').click(function (e) {
                e.preventDefault();

                $('input[name="payment_method"]').prop('disabled', true);
                // Uncheck other payment methods
                $('input[name="payment_method"]').prop('checked', false);

                $('#payment_method_WC_sama').prop('checked', true);
                $('#payment_method_WC_sama').prop('disabled', false);
                $('#payment_method_WC_sama').click();
                $("#payment_method_WC_sama").parent().fadeIn();

                // cuctom style for disabled payments :
                $("ul.wc_payment_methods > li:not(.payment_method_WC_sama)").addClass("disabled_by_sama_plugin");

                if ($(this).hasClass("pardakht_etebari")) {
                    $("#sama_payment_type_f").val("pardakht_etebari");
                } else {
                    $("#sama_payment_type_f").val("pardakht_zemanati");
                }
            });
            $("#sama_payment_type_f").val("pardakht_Default");
            $('.w_en_all').click(function (e) {
                e.preventDefault();

                $('input[name="payment_method"]').prop('disabled', false);
                // Uncheck other payment methods
                $('input[name="payment_method"]').prop('checked', false);
                $('.wc_payment_method:nth-child(1) input').prop('checked', true);


                $("ul.wc_payment_methods > li:not(.payment_method_WC_Samaplugin)").removeClass("disabled_by_sama_plugin");
            });
        });
        jQuery(document).ready(function ($) {
            $(".payment_select_button").click(function (e) {
                e.preventDefault();
                // disable other option if selected
                $("body").find(".selected_option_sama").removeClass("selected_option_sama");
                $("body").find(".payment_select_button_remove").hide();
                $("body").find(".payment_select_button").show();

                $(this).hide();
                $(this).parent().find(".payment_select_button_remove").show();
                $(this).parent().parent().parent().parent().addClass("selected_option_sama");
            });
            $(".payment_select_button_remove").click(function (e) {
                e.preventDefault();
                $(this).hide();
                $(this).parent().find(".payment_select_button").show();
                $(this).parent().parent().parent().parent().removeClass("selected_option_sama");
                $("#sama_payment_type_f").val("pardakht_Default");
            });
        });
    </script>
    <?php
}

add_action('woocommerce_before_checkout_form', 'woo_sama_function', 10);

function woo_sama_function() {
    if (is_checkout()) {
        $sama_plugin_url = WOO_SAMADU;
        ?>
        <link rel="stylesheet" href="<?php echo $sama_plugin_url; ?>assets/css/style.css">
        <style>
            .disabled_payments {
                filter: brightness(0.8);
                background: #fff;
                cursor: no-drop;
            }

            .sama_bg_box {
                width: 1200px;
                margin: auto;
                margin-top: 2rem;
            }

            @media only screen and (max-width: 700px) {
                width: 90%;
                margin: auto;
                margin-top: 1rem;
            }
        </style>

        <?php
        echo '<div class="sama_bg_box">
        <div class="sama_main">
            <div class="sama_main_content">
                <div class="sama_header_box">
                    <div class="logo_sama">
                        <img src="' . $sama_plugin_url . 'assets/images/logo_col.png" alt="">
                    </div>
                    <div class="sama_head_title">
                        آسودگی خاطر در خرید، امکان پرداخت در آینده!
                    </div>
                </div>
                <div class="sama_boxs_holder">
                    <div class="sama_option" id="zemanat_payment">
                        <div class="payment_descriptions">
                            <div class="payment_title">
                            <div class="payment_icon">
                                <img src="' . $sama_plugin_url . 'assets/images/payment_checked.svg" alt="">
                            </div>
                                <div class="payment_title_txt">
                                    پرداخت با ضمانت سما
                                </div>
                                <div class="payment_select_btn_side">
                                    <div class="payment_select_button disable_all_and_enable_sama"
                                        id="disable_all_and_enable_sama">انتخاب پرداخت نقدی</div>
                                    <div class="payment_select_button_remove w_en_all" style="display:none;">
                                        <img src="' . $sama_plugin_url . 'assets/images/remove_icon.svg" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="payment_info_items">
                                <div class="info_item_sama">
                                    <div class="sama_icon_item">
                                        <img src="' . $sama_plugin_url . 'assets/images/check.svg" alt="">
                                    </div>
                                    <div class="info_item_sama_text">
                                        امکان بازگشت کالا تا ۱۵ روز پس از خرید
                                    </div>
                                </div>
                                <div class="info_item_sama">
                                    <div class="sama_icon_item">
                                        <img src="' . $sama_plugin_url . 'assets/images/check.svg" alt="">
                                    </div>
                                    <div class="info_item_sama_text">
                                        بازپرداخت آنی وجه درصورت مغایرت کالا با سفارش
                                    </div>
                                </div>
                                <div class="info_item_sama">
                                    <div class="sama_icon_item">
                                        <img src="' . $sama_plugin_url . 'assets/images/check.svg" alt="">
                                    </div>
                                    <div class="info_item_sama_text">
                                        بازپرداخت آنی وجه درصورت انصراف از خرید
                                    </div>
                                </div>
                                <div class="info_item_sama">
                                    <div class="sama_icon_item">
                                        <img src="' . $sama_plugin_url . 'assets/images/check.svg" alt="">
                                    </div>
                                    <div class="info_item_sama_text">
                                        بازپرداخت آنی وجه درصورت عدم‌ارسال کالا توسط فروشگاه
                                    </div>
                                </div>
                            </div>
                        </div>
    
                    </div>
                    <div class="sama_option" id="etebari_payment">
                        <div class="payment_descriptions">
                            <div class="payment_title">
                                <div class="payment_icon">
                                    <img src="' . $sama_plugin_url . 'assets/images/payment_date.svg" alt="">
                                </div>
                                <div class="payment_title_txt">
                                    پرداخت اعتباری سما
                                </div>
                                <div class="payment_select_btn_side">
                                    <div class="payment_select_button disable_all_and_enable_sama pardakht_etebari">
                                        انتخاب پرداخت اعتباری
                                    </div>
                                    <div class="payment_select_button_remove w_en_all" style="display:none;">
                                        <img src="' . $sama_plugin_url . 'assets/images/remove_icon.svg" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="payment_info_items">
                                <div class="info_item_sama">
                                    <div class="sama_icon_item">
                                        <img src="' . $sama_plugin_url . 'assets/images/check.svg" alt="">
                                    </div>
                                    <div class="info_item_sama_text">
                                        مزایای پرداخت با ضمانت سما
                                    </div>
                                </div>
                                <div class="info_item_sama">
                                    <div class="sama_icon_item">
                                        <img src="' . $sama_plugin_url . 'assets/images/check.svg" alt="">
                                    </div>
                                    <div class="info_item_sama_text">
                                        استفاده سریع و آسان از اعتبار
                                    </div>
                                </div>
                                <div class="info_item_sama">
                                    <div class="sama_icon_item">
                                        <img src="' . $sama_plugin_url . 'assets/images/check.svg" alt="">
                                    </div>
                                    <div class="info_item_sama_text">
                                        بدون نیاز به چک، سفته یا ضامن
                                    </div>
                                </div>
                                <div class="info_item_sama">
                                    <div class="sama_icon_item">
                                        <img src="' . $sama_plugin_url . 'assets/images/check.svg" alt="">
                                    </div>
                                    <div class="info_item_sama_text">
                                        امکان تسویه اقساط در ۴ تا ۱۲ ماه
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>';
    }
}


add_filter('woocommerce_checkout_fields', 'add_custom_checkout_field');
function add_custom_checkout_field($fields): array
{
    $fields['billing']['sama_payment_type_f'] = array(
        'type' => 'text',
        'label' => __('sama_payment_type_label'),
        'required' => true,
        'class' => array('form-row-wide'),
    );
    return $fields;
}

add_action('woocommerce_checkout_update_order_meta', 'save_custom_checkout_field');
function save_custom_checkout_field($order_id)
{
    if (!empty($_POST['sama_payment_type_f'])) {
        update_post_meta($order_id, 'sama_payment_type_label', $_POST['sama_payment_type_f']);
    }
}

