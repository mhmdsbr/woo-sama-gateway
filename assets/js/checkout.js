const { createElement } = window.wp.element;

const CustomButtons = (props) => {
    // Create a ref for the hidden input field
    const inputRef = React.useRef(null);

    // Define separate onClick functions for the buttons
    const handleCashButtonClick = (event) => {
        event.preventDefault();
        console.log('Cash button clicked');

        if (inputRef.current) {
            inputRef.current.value = 'pardakht_zemanati';

            // Optionally, you can also trigger a change event to notify WooCommerce
            const changeEvent = new Event('change', { bubbles: true });
            inputRef.current.dispatchEvent(changeEvent);
        }
    };

    const handleCreditButtonClick = (event) => {
        event.preventDefault();  // Prevent the default action (form submission or page reload)
        console.log('Credit button clicked');

        if (inputRef.current) {
            inputRef.current.value = 'pardakht_etebari';

            // Optionally, you can also trigger a change event to notify WooCommerce
            const changeEvent = new Event('change', { bubbles: true });
            inputRef.current.dispatchEvent(changeEvent);
        }
    };

    // Create the button elements and the hidden input field using createElement
    return createElement(
        'div',
        { className: 'custom-buttons-container' },
        createElement(
            'button',
            {
                onClick: handleCashButtonClick,  // Assign the click handler for Cash
                className: 'button-class-1',
                style: { backgroundColor: 'red', color: 'white' }
            },
            'Cash'  // Text for the Cash button
        ),
        createElement(
            'button',
            {
                onClick: handleCreditButtonClick,  // Assign the click handler for Credit
                className: 'button-class-2',
                style: { backgroundColor: 'green', color: 'white' }
            },
            'Credit'  // Text for the Credit button
        ),
        createElement(
            'input',
            {
                type: 'string',
                name: 'woocommerce-payment-sama-custom-input',
                id: 'woocommerce-payment-sama-custom-input',
                value: 'pardakht_Default',
                ref: inputRef
            }
        )
    );
};

const sama_settings = window.wc.wcSettings.getSetting('WC_sama_data', {});
const sama_label = sama_settings['title'];
const Sama_Block_Gateway = {
    name: sama_settings['name'],
    label: sama_label,
    paymentMethodId: 'WC_sama',
    content: createElement(CustomButtons),
    edit: createElement(CustomButtons),
    canMakePayment: () => true,
    ariaLabel: sama_label,
    supports: {
        features: sama_settings.supports,
    },
};

window.wc.wcBlocksRegistry.registerPaymentMethod(Sama_Block_Gateway);
