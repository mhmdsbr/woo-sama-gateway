const sama_settings = window.wc.wcSettings.getSetting( 'sama_gateway_data', {} );
const sama_label = window.wp.htmlEntities.decodeEntities( sama_settings.title ) || window.wp.i18n.__( 'پرداخت از طریق سما', 'woocommerce' );
const sama_Content = () => {
    return window.wp.htmlEntities.decodeEntities( sama_settings.text || '' );
};
const Sama_Block_Gateway = {
    name: 'WC_sama',
    label: sama_label,
    content: Object( window.wp.element.createElement )( sama_Content, null ),
    edit: Object( window.wp.element.createElement )( sama_Content, null ),
    canMakePayment: () => true,
    ariaLabel: sama_label,
    supports: {
        features: sama_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( Sama_Block_Gateway );