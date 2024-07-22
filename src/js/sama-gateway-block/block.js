/**
 * External dependencies
 */
import { useEffect, useState } from '@wordpress/element';
import { RadioControl } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { options } from './options';

export const Block = ({ checkoutExtensionData }) => {
	const { setExtensionData } = checkoutExtensionData;

	const [selectedPayment, setSelectedPayment] = useState('pardakht_Default');

	const handleRadioChange = (value) => {
		setSelectedPayment(value);
		setExtensionData(
			'sama-gateway',
			'samaGatewayInputField',
			value
		);
	};


	/* Handle changing the radio's value */
	useEffect(() => {
		const inputElement = document.getElementById(`radio-control-wc-payment-method-options-WC_sama`);
		if (inputElement) {
			inputElement.checked = true;
		}
	}, [selectedPayment]);

	return (
		<div className="wp-block-shipping-workshop-not-at-home">
			<RadioControl
				label={__(
					'انتخاب کنید',
					'sama-gateway'
				)}
				selected={selectedPayment}
				options={options}
				onChange={handleRadioChange}
			/>
		</div>
	);
};
