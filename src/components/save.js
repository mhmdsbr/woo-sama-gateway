import { useBlockProps } from '@wordpress/block-editor';

import logoImg from '../assets/images/logo.png';
import paymentCheckedImg from '../assets/images/payment_checked.png';
import removeIconImg from '../assets/images/remove_icon.png';
import checkImg from '../assets/images/check.png';
import paymentDateImg from '../assets/images/payment_date.png';


const Save = ({ attributes }) => {
    const { sama_payment_type_f } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
            <input
                type="hidden"
                value={sama_payment_type_f}
                className="sama-payment-type-input"
            />
            <div className="sama_bg_box">
                <div className="sama_main">
                    <div className="sama_main_content">
                        <div className="sama_header_box">
                            <div className="logo_sama">
                                <img src={logoImg} alt="Logo" />
                            </div>
                            <div className="sama_head_title">
                                آسودگی خاطر در خرید، امکان پرداخت در آینده!
                            </div>
                        </div>
                        <div className="sama_boxs_holder">
                            <div className="sama_option" id="zemanat_payment">
                                <div className="payment_descriptions">
                                    <div className="payment_title">
                                        <div className="payment_icon">
                                            <img src={paymentCheckedImg} alt="Checked" />
                                        </div>
                                        <div className="payment_select_btn_side">
                                            <div className="payment_select_button disable_all_and_enable_sama" id="disable_all_and_enable_sama">
                                                انتخاب پرداخت نقدی
                                            </div>
                                            <div className="payment_select_button_remove w_en_all" style={{ display: 'none' }}>
                                                <img src={removeIconImg} alt="Remove" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="payment_info_items">
                                        <div className="info_item_sama">
                                            <div className="sama_icon_item">
                                                <img src={checkImg} alt="Check" />
                                            </div>
                                            <div className="info_item_sama_text">
                                                امکان بازگشت کالا تا ۱۵ روز پس از خرید
                                            </div>
                                        </div>
                                        <div className="info_item_sama">
                                            <div className="sama_icon_item">
                                                <img src={checkImg} alt="Check" />
                                            </div>
                                            <div className="info_item_sama_text">
                                                بازپرداخت آنی وجه درصورت مغایرت کالا با سفارش
                                            </div>
                                        </div>
                                        <div className="info_item_sama">
                                            <div className="sama_icon_item">
                                                <img src={checkImg} alt="Check" />
                                            </div>
                                            <div className="info_item_sama_text">
                                                بازپرداخت آنی وجه درصورت انصراف از خرید
                                            </div>
                                        </div>
                                        <div className="info_item_sama">
                                            <div className="sama_icon_item">
                                                <img src={checkImg} alt="Check" />
                                            </div>
                                            <div className="info_item_sama_text">
                                                بازپرداخت آنی وجه درصورت عدم‌ارسال کالا توسط فروشگاه
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sama_option" id="etebari_payment">
                                <div className="payment_descriptions">
                                    <div className="payment_title">
                                        <div className="payment_icon">
                                            <img src={paymentDateImg} alt="Payment Date" />
                                        </div>
                                        <div className="payment_title_txt">
                                            پرداخت اعتباری سما
                                        </div>
                                        <div className="payment_select_btn_side">
                                            <div className="payment_select_button disable_all_and_enable_sama pardakht_etebari">
                                                انتخاب پرداخت اعتباری
                                            </div>
                                            <div className="payment_select_button_remove w_en_all" style={{ display: 'none' }}>
                                                <img src={removeIconImg} alt="Remove" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="payment_info_items">
                                        <div className="info_item_sama">
                                            <div className="sama_icon_item">
                                                <img src={checkImg} alt="Check" />
                                            </div>
                                            <div className="info_item_sama_text">
                                                مزایای پرداخت با ضمانت سما
                                            </div>
                                        </div>
                                        <div className="info_item_sama">
                                            <div className="sama_icon_item">
                                                <img src={checkImg} alt="Check" />
                                            </div>
                                            <div className="info_item_sama_text">
                                                استفاده سریع و آسان از اعتبار
                                            </div>
                                        </div>
                                        <div className="info_item_sama">
                                            <div className="sama_icon_item">
                                                <img src={checkImg} alt="Check" />
                                            </div>
                                            <div className="info_item_sama_text">
                                                بدون نیاز به چک، سفته یا ضامن
                                            </div>
                                        </div>
                                        <div className="info_item_sama">
                                            <div className="sama_icon_item">
                                                <img src={checkImg} alt="Check" />
                                            </div>
                                            <div className="info_item_sama_text">
                                                امکان تسویه اقساط در ۴ تا ۱۲ ماه
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Save;

