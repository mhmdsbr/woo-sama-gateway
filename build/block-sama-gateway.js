/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/edit.js":
/*!********************************!*\
  !*** ./src/components/edit.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/logo.png */ "./src/assets/images/logo.png");
/* harmony import */ var _assets_images_payment_checked_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/payment_checked.png */ "./src/assets/images/payment_checked.png");
/* harmony import */ var _assets_images_remove_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/remove_icon.png */ "./src/assets/images/remove_icon.png");
/* harmony import */ var _assets_images_check_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/check.png */ "./src/assets/images/check.png");
/* harmony import */ var _assets_images_payment_date_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/payment_date.png */ "./src/assets/images/payment_date.png");








var Edit = function Edit(props) {
  var attributes = props.attributes,
    setAttributes = props.setAttributes;
  var sama_payment_type_f = attributes.sama_payment_type_f;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  return /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Sama Payment Type', 'sama'),
    value: sama_payment_type_f,
    onChange: function onChange(value) {
      return setAttributes({
        sama_payment_type_f: value
      });
    },
    className: "form-row-wide"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sama_bg_box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sama_main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sama_main_content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sama_header_box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo_sama"
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3__,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "sama_head_title"
  }, "\u0622\u0633\u0648\u062F\u06AF\u06CC \u062E\u0627\u0637\u0631 \u062F\u0631 \u062E\u0631\u06CC\u062F\u060C \u0627\u0645\u06A9\u0627\u0646 \u067E\u0631\u062F\u0627\u062E\u062A \u062F\u0631 \u0622\u06CC\u0646\u062F\u0647!")), /*#__PURE__*/React.createElement("div", {
    className: "sama_boxs_holder"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sama_option",
    id: "zemanat_payment"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payment_descriptions"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payment_title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payment_icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets_images_payment_checked_png__WEBPACK_IMPORTED_MODULE_4__,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "payment_select_btn_side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payment_select_button disable_all_and_enable_sama",
    id: "disable_all_and_enable_sama"
  }, "\u0627\u0646\u062A\u062E\u0627\u0628 \u067E\u0631\u062F\u0627\u062E\u062A \u0646\u0642\u062F\u06CC"), /*#__PURE__*/React.createElement("div", {
    className: "payment_select_button_remove w_en_all",
    style: {
      display: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets_images_remove_icon_png__WEBPACK_IMPORTED_MODULE_5__,
    alt: ""
  })))), /*#__PURE__*/React.createElement("div", {
    className: "payment_info_items"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sama_icon_item"
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets_images_check_png__WEBPACK_IMPORTED_MODULE_6__,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama_text"
  }, "\u0627\u0645\u06A9\u0627\u0646 \u0628\u0627\u0632\u06AF\u0634\u062A \u06A9\u0627\u0644\u0627 \u062A\u0627 \u06F1\u06F5 \u0631\u0648\u0632 \u067E\u0633 \u0627\u0632 \u062E\u0631\u06CC\u062F")), /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sama_icon_item"
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets_images_check_png__WEBPACK_IMPORTED_MODULE_6__,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama_text"
  }, "\u0628\u0627\u0632\u067E\u0631\u062F\u0627\u062E\u062A \u0622\u0646\u06CC \u0648\u062C\u0647 \u062F\u0631\u0635\u0648\u0631\u062A \u0645\u063A\u0627\u06CC\u0631\u062A \u06A9\u0627\u0644\u0627 \u0628\u0627 \u0633\u0641\u0627\u0631\u0634")), /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sama_icon_item"
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets_images_check_png__WEBPACK_IMPORTED_MODULE_6__,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama_text"
  }, "\u0628\u0627\u0632\u067E\u0631\u062F\u0627\u062E\u062A \u0622\u0646\u06CC \u0648\u062C\u0647 \u062F\u0631\u0635\u0648\u0631\u062A \u0627\u0646\u0635\u0631\u0627\u0641 \u0627\u0632 \u062E\u0631\u06CC\u062F")), /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sama_icon_item"
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets_images_check_png__WEBPACK_IMPORTED_MODULE_6__,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama_text"
  }, "\u0628\u0627\u0632\u067E\u0631\u062F\u0627\u062E\u062A \u0622\u0646\u06CC \u0648\u062C\u0647 \u062F\u0631\u0635\u0648\u0631\u062A \u0639\u062F\u0645\u200C\u0627\u0631\u0633\u0627\u0644 \u06A9\u0627\u0644\u0627 \u062A\u0648\u0633\u0637 \u0641\u0631\u0648\u0634\u06AF\u0627\u0647"))))), /*#__PURE__*/React.createElement("div", {
    className: "sama_option",
    id: "etebari_payment"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payment_descriptions"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payment_title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payment_icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets_images_payment_date_png__WEBPACK_IMPORTED_MODULE_7__,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "payment_title_txt"
  }, "\u067E\u0631\u062F\u0627\u062E\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC \u0633\u0645\u0627"), /*#__PURE__*/React.createElement("div", {
    className: "payment_select_btn_side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payment_select_button disable_all_and_enable_sama pardakht_etebari"
  }, "\u0627\u0646\u062A\u062E\u0627\u0628 \u067E\u0631\u062F\u0627\u062E\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC"), /*#__PURE__*/React.createElement("div", {
    className: "payment_select_button_remove w_en_all",
    style: {
      display: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets_images_remove_icon_png__WEBPACK_IMPORTED_MODULE_5__,
    alt: ""
  })))), /*#__PURE__*/React.createElement("div", {
    className: "payment_info_items"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sama_icon_item"
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets_images_check_png__WEBPACK_IMPORTED_MODULE_6__,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama_text"
  }, "\u0645\u0632\u0627\u06CC\u0627\u06CC \u067E\u0631\u062F\u0627\u062E\u062A \u0628\u0627 \u0636\u0645\u0627\u0646\u062A \u0633\u0645\u0627")), /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sama_icon_item"
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets_images_check_png__WEBPACK_IMPORTED_MODULE_6__,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama_text"
  }, "\u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0633\u0631\u06CC\u0639 \u0648 \u0622\u0633\u0627\u0646 \u0627\u0632 \u0627\u0639\u062A\u0628\u0627\u0631")), /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sama_icon_item"
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets_images_check_png__WEBPACK_IMPORTED_MODULE_6__,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama_text"
  }, "\u0628\u062F\u0648\u0646 \u0646\u06CC\u0627\u0632 \u0628\u0647 \u0686\u06A9\u060C \u0633\u0641\u062A\u0647 \u06CC\u0627 \u0636\u0627\u0645\u0646")), /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sama_icon_item"
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets_images_check_png__WEBPACK_IMPORTED_MODULE_6__,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama_text"
  }, "\u0627\u0645\u06A9\u0627\u0646 \u062A\u0633\u0648\u06CC\u0647 \u0627\u0642\u0633\u0627\u0637 \u062F\u0631 \u06F4 \u062A\u0627 \u06F1\u06F2 \u0645\u0627\u0647"))))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/components/save.js":
/*!********************************!*\
  !*** ./src/components/save.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/logo.png */ "./src/assets/images/logo.png");
/* harmony import */ var _assets_images_payment_checked_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/payment_checked.png */ "./src/assets/images/payment_checked.png");
/* harmony import */ var _assets_images_remove_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/remove_icon.png */ "./src/assets/images/remove_icon.png");
/* harmony import */ var _assets_images_check_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/check.png */ "./src/assets/images/check.png");
/* harmony import */ var _assets_images_payment_date_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/payment_date.png */ "./src/assets/images/payment_date.png");






var Save = function Save(_ref) {
  var attributes = _ref.attributes;
  var sama_payment_type_f = attributes.sama_payment_type_f;
  var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save();
  return /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    value: sama_payment_type_f,
    className: "sama-payment-type-input"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sama_bg_box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sama_main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sama_main_content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sama_header_box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo_sama"
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_1__,
    alt: "Logo"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sama_head_title"
  }, "\u0622\u0633\u0648\u062F\u06AF\u06CC \u062E\u0627\u0637\u0631 \u062F\u0631 \u062E\u0631\u06CC\u062F\u060C \u0627\u0645\u06A9\u0627\u0646 \u067E\u0631\u062F\u0627\u062E\u062A \u062F\u0631 \u0622\u06CC\u0646\u062F\u0647!")), /*#__PURE__*/React.createElement("div", {
    className: "sama_boxs_holder"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sama_option",
    id: "zemanat_payment"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payment_descriptions"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payment_title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payment_icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets_images_payment_checked_png__WEBPACK_IMPORTED_MODULE_2__,
    alt: "Checked"
  })), /*#__PURE__*/React.createElement("div", {
    className: "payment_select_btn_side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payment_select_button disable_all_and_enable_sama",
    id: "disable_all_and_enable_sama"
  }, "\u0627\u0646\u062A\u062E\u0627\u0628 \u067E\u0631\u062F\u0627\u062E\u062A \u0646\u0642\u062F\u06CC"), /*#__PURE__*/React.createElement("div", {
    className: "payment_select_button_remove w_en_all",
    style: {
      display: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets_images_remove_icon_png__WEBPACK_IMPORTED_MODULE_3__,
    alt: "Remove"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "payment_info_items"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sama_icon_item"
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets_images_check_png__WEBPACK_IMPORTED_MODULE_4__,
    alt: "Check"
  })), /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama_text"
  }, "\u0627\u0645\u06A9\u0627\u0646 \u0628\u0627\u0632\u06AF\u0634\u062A \u06A9\u0627\u0644\u0627 \u062A\u0627 \u06F1\u06F5 \u0631\u0648\u0632 \u067E\u0633 \u0627\u0632 \u062E\u0631\u06CC\u062F")), /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sama_icon_item"
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets_images_check_png__WEBPACK_IMPORTED_MODULE_4__,
    alt: "Check"
  })), /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama_text"
  }, "\u0628\u0627\u0632\u067E\u0631\u062F\u0627\u062E\u062A \u0622\u0646\u06CC \u0648\u062C\u0647 \u062F\u0631\u0635\u0648\u0631\u062A \u0645\u063A\u0627\u06CC\u0631\u062A \u06A9\u0627\u0644\u0627 \u0628\u0627 \u0633\u0641\u0627\u0631\u0634")), /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sama_icon_item"
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets_images_check_png__WEBPACK_IMPORTED_MODULE_4__,
    alt: "Check"
  })), /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama_text"
  }, "\u0628\u0627\u0632\u067E\u0631\u062F\u0627\u062E\u062A \u0622\u0646\u06CC \u0648\u062C\u0647 \u062F\u0631\u0635\u0648\u0631\u062A \u0627\u0646\u0635\u0631\u0627\u0641 \u0627\u0632 \u062E\u0631\u06CC\u062F")), /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sama_icon_item"
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets_images_check_png__WEBPACK_IMPORTED_MODULE_4__,
    alt: "Check"
  })), /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama_text"
  }, "\u0628\u0627\u0632\u067E\u0631\u062F\u0627\u062E\u062A \u0622\u0646\u06CC \u0648\u062C\u0647 \u062F\u0631\u0635\u0648\u0631\u062A \u0639\u062F\u0645\u200C\u0627\u0631\u0633\u0627\u0644 \u06A9\u0627\u0644\u0627 \u062A\u0648\u0633\u0637 \u0641\u0631\u0648\u0634\u06AF\u0627\u0647"))))), /*#__PURE__*/React.createElement("div", {
    className: "sama_option",
    id: "etebari_payment"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payment_descriptions"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payment_title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payment_icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets_images_payment_date_png__WEBPACK_IMPORTED_MODULE_5__,
    alt: "Payment Date"
  })), /*#__PURE__*/React.createElement("div", {
    className: "payment_title_txt"
  }, "\u067E\u0631\u062F\u0627\u062E\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC \u0633\u0645\u0627"), /*#__PURE__*/React.createElement("div", {
    className: "payment_select_btn_side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payment_select_button disable_all_and_enable_sama pardakht_etebari"
  }, "\u0627\u0646\u062A\u062E\u0627\u0628 \u067E\u0631\u062F\u0627\u062E\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC"), /*#__PURE__*/React.createElement("div", {
    className: "payment_select_button_remove w_en_all",
    style: {
      display: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets_images_remove_icon_png__WEBPACK_IMPORTED_MODULE_3__,
    alt: "Remove"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "payment_info_items"
  }, /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sama_icon_item"
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets_images_check_png__WEBPACK_IMPORTED_MODULE_4__,
    alt: "Check"
  })), /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama_text"
  }, "\u0645\u0632\u0627\u06CC\u0627\u06CC \u067E\u0631\u062F\u0627\u062E\u062A \u0628\u0627 \u0636\u0645\u0627\u0646\u062A \u0633\u0645\u0627")), /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sama_icon_item"
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets_images_check_png__WEBPACK_IMPORTED_MODULE_4__,
    alt: "Check"
  })), /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama_text"
  }, "\u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0633\u0631\u06CC\u0639 \u0648 \u0622\u0633\u0627\u0646 \u0627\u0632 \u0627\u0639\u062A\u0628\u0627\u0631")), /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sama_icon_item"
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets_images_check_png__WEBPACK_IMPORTED_MODULE_4__,
    alt: "Check"
  })), /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama_text"
  }, "\u0628\u062F\u0648\u0646 \u0646\u06CC\u0627\u0632 \u0628\u0647 \u0686\u06A9\u060C \u0633\u0641\u062A\u0647 \u06CC\u0627 \u0636\u0627\u0645\u0646")), /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sama_icon_item"
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets_images_check_png__WEBPACK_IMPORTED_MODULE_4__,
    alt: "Check"
  })), /*#__PURE__*/React.createElement("div", {
    className: "info_item_sama_text"
  }, "\u0627\u0645\u06A9\u0627\u0646 \u062A\u0633\u0648\u06CC\u0647 \u0627\u0642\u0633\u0627\u0637 \u062F\u0631 \u06F4 \u062A\u0627 \u06F1\u06F2 \u0645\u0627\u0647"))))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/eot/IRANSansWeb_Bold.eot */ "./src/assets/fonts/eot/IRANSansWeb_Bold.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/woff2/IRANSansWeb_Bold.woff2 */ "./src/assets/fonts/woff2/IRANSansWeb_Bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/woff/IRANSansWeb_Bold.woff */ "./src/assets/fonts/woff/IRANSansWeb_Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/ttf/IRANSansWeb_Bold.ttf */ "./src/assets/fonts/ttf/IRANSansWeb_Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/eot/IRANSansWeb_Medium.eot */ "./src/assets/fonts/eot/IRANSansWeb_Medium.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/woff2/IRANSansWeb_Medium.woff2 */ "./src/assets/fonts/woff2/IRANSansWeb_Medium.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/woff/IRANSansWeb_Medium.woff */ "./src/assets/fonts/woff/IRANSansWeb_Medium.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/ttf/IRANSansWeb_Medium.ttf */ "./src/assets/fonts/ttf/IRANSansWeb_Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/eot/IRANSansWeb_Light.eot */ "./src/assets/fonts/eot/IRANSansWeb_Light.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/woff2/IRANSansWeb_Light.woff2 */ "./src/assets/fonts/woff2/IRANSansWeb_Light.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/woff/IRANSansWeb_Light.woff */ "./src/assets/fonts/woff/IRANSansWeb_Light.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/ttf/IRANSansWeb_Light.ttf */ "./src/assets/fonts/ttf/IRANSansWeb_Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/eot/IRANSansWeb_UltraLight.eot */ "./src/assets/fonts/eot/IRANSansWeb_UltraLight.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/woff2/IRANSansWeb_UltraLight.woff2 */ "./src/assets/fonts/woff2/IRANSansWeb_UltraLight.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/woff/IRANSansWeb_UltraLight.woff */ "./src/assets/fonts/woff/IRANSansWeb_UltraLight.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/ttf/IRANSansWeb_UltraLight.ttf */ "./src/assets/fonts/ttf/IRANSansWeb_UltraLight.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/eot/IRANSansWeb.eot */ "./src/assets/fonts/eot/IRANSansWeb.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/woff2/IRANSansWeb.woff2 */ "./src/assets/fonts/woff2/IRANSansWeb.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/woff/IRANSansWeb.woff */ "./src/assets/fonts/woff/IRANSansWeb.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/ttf/IRANSansWeb.ttf */ "./src/assets/fonts/ttf/IRANSansWeb.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ../images/plugin-bg.png */ "./src/assets/images/plugin-bg.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_20___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
	font-family: IRANSans;
	font-style: normal;
	font-weight: bold;
	src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
	src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('embedded-opentype'),  /* IE6-8 */
	url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
	url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
	url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format('truetype');
}
@font-face {
	font-family: IRANSans;
	font-style: normal;
	font-weight: 500;
	src: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
	src: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) format('embedded-opentype'),  /* IE6-8 */
	url(${___CSS_LOADER_URL_REPLACEMENT_7___}) format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
	url(${___CSS_LOADER_URL_REPLACEMENT_8___}) format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
	url(${___CSS_LOADER_URL_REPLACEMENT_9___}) format('truetype');
}
@font-face {
	font-family: IRANSans;
	font-style: normal;
	font-weight: 300;
	src: url(${___CSS_LOADER_URL_REPLACEMENT_10___});
	src: url(${___CSS_LOADER_URL_REPLACEMENT_11___}) format('embedded-opentype'),  /* IE6-8 */
	url(${___CSS_LOADER_URL_REPLACEMENT_12___}) format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
	url(${___CSS_LOADER_URL_REPLACEMENT_13___}) format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
	url(${___CSS_LOADER_URL_REPLACEMENT_14___}) format('truetype');
}
@font-face {
	font-family: IRANSans;
	font-style: normal;
	font-weight: 200;
	src: url(${___CSS_LOADER_URL_REPLACEMENT_15___});
	src: url(${___CSS_LOADER_URL_REPLACEMENT_16___}) format('embedded-opentype'),  /* IE6-8 */
	url(${___CSS_LOADER_URL_REPLACEMENT_17___}) format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
	url(${___CSS_LOADER_URL_REPLACEMENT_18___}) format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
	url(${___CSS_LOADER_URL_REPLACEMENT_19___}) format('truetype');
}
@font-face {
	font-family: IRANSans;
	font-style: normal;
	font-weight: normal;
	src: url(${___CSS_LOADER_URL_REPLACEMENT_20___});
	src: url(${___CSS_LOADER_URL_REPLACEMENT_21___}) format('embedded-opentype'),  /* IE6-8 */
	url(${___CSS_LOADER_URL_REPLACEMENT_22___}) format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
	url(${___CSS_LOADER_URL_REPLACEMENT_23___}) format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
	url(${___CSS_LOADER_URL_REPLACEMENT_24___}) format('truetype');
}

.iran_sans_font {
	font-family: IRANSans !important;
}

.sama_bg_box,
.sama_bg_box * {
	direction: rtl !important;
	font-family: IRANSans;
}

.sama_bg_box {
	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_25___});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	border: 1px solid rgba(217, 217, 217, 1);
	border-radius: 8px;
}

.sama_main {
	background: linear-gradient(249.92deg, rgba(225, 246, 255, 0.24) 30.88%, rgba(204, 255, 225, 0.24) 103.87%);
	background-size: cover;
}

.sama_main_content {
	padding: 2rem;
	/*width: 90%;
	margin: auto;*/
	display: flex;
}

.sama_header_box {
	/*
	display: flex;
	align-items: stretch;
	*/
	width: 17%;
}

.logo_sama img {
	width: 100%;
}

.logo_sama {
	margin-bottom: 1.3rem;
	width: 35%;
	margin-left: auto;
	display: flex;
	align-items: center;
	justify-content: center;
}

.sama_link_read_more {
	margin-right: auto;
	display: flex;
	align-items: end;
	font-size: 16px;
	font-weight: 500;
	line-height: 16px;
	text-align: left;
	color: rgba(0, 168, 232, 1);
	cursor: pointer;
}

.sama_link_read_more i {
	margin-right: 1rem;
	line-height: 16px;
	transform: scaleX(-1);
	color: rgba(0, 168, 232, 1);
}

.sama_head_title {
	display: flex;
	align-items: end;
	font-size: 16px;
	font-weight: 800;
	line-height: 24px;
	text-align: right;
}

.sama_head_title {
	color: rgba(25, 70, 137, 1);
}

.sama_boxs_holder {
	display: flex;
	width: 90%;
	align-items: stretch;
	justify-content: space-between;
}

.sama_option {
	backdrop-filter: blur(3px);
	width: 49%;
	border: 1px solid rgba(25, 70, 137, 1);
	border-radius: 6px;
	padding: 16px;
	display: flex;
	align-items: stretch;
}

.payment_icon {
	width: 8%;
}

.payment_descriptions {
	width: 100%;
}

.payment_select_btn_side {
	width: 50%;
	display: flex;
	margin-right: auto;
	justify-content: end;
	align-items: end;
}

.payment_icon img {
	width: 70%;
	margin-left: auto;
}

.payment_title {
	font-size: 20px;
	font-weight: 600;
	line-height: 30px;
	text-align: right;
	color: rgba(25, 70, 137, 1);
	margin-bottom: 10px;
	display: flex;
	justify-content: space-between;
}

.info_item_sama {
	display: flex;
	width: 100%;
	align-items: center;
	margin-bottom: 1px;
	color: rgba(25, 70, 137, 1);
	font-size: 16px;
	font-weight: 500;
	line-height: 24px;
	text-align: right;
}

.info_item_sama:last-child {
	margin-bottom: 0px;
}

.payment_select_button {
	background: rgba(0, 150, 89, 1);
	padding: 7px 13px;
	font-size: 14px;
	font-weight: 500;
	line-height: 24px;
	text-align: right;
	color: #fff;
	border-radius: 5px;
	cursor: pointer;
}

.sama_icon_item img {
	width: 80%;
}

.sama_icon_item {
	display: flex;
	width: 5%;
	align-items: center;
	justify-content: right;
	margin-left: 10px;
}

.sama_option.selected_option_sama {
	border: 1px solid rgba(0, 150, 89, 1);
	background: rgba(0, 150, 89, 0.08);
}

.info_item_sama_text {
	opacity: 80%;
	width: calc(95% - 10px);
}

.payment_select_button_remove img {
	width: 90%;
	margin: auto;
}

.payment_select_button_remove {
	width: 28%;
	background: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5px;
	border-radius: 8px;
	border: 1px solid rgba(217, 217, 217, 1);
	cursor: pointer;
}

/* this is for themes that use --wp--style--global--content-size for checkout page */
.woocommerce-checkout .woocommerce {
	max-width: 1200px;
}

@media only screen and (max-width: 1199px) {
	.woocommerce-checkout .woocommerce {
		max-width: 720px;
	}
}

@media only screen and (max-width: 700px) {
	.woocommerce-checkout .woocommerce {
		max-width: 380px;
	}
}



/* responsive part (phone responsive 700 px) */
@media only screen and (max-width: 700px) {
	.woocommerce-checkout .woocommerce {
		max-width: 380px;
	}

	.sama_main_content {
		display: block;
		padding: 1rem;
	}

	.sama_header_box {
		width: 100%;
		display: flex;
		align-items: center;
	}

	.sama_boxs_holder {
		display: block;
		width: 100%;
	}

	.sama_option {
		width: 100%;
		padding: 0;
		margin-bottom: 1rem;
	}

	.logo_sama {
		margin-bottom: 0rem;
		width: 10%;
		margin-left: 0.5rem;
	}

	.sama_header_box {
		margin-bottom: 1rem;
	}

	.payment_title {
		width: 100%;
		margin: auto;
		margin-bottom: 1rem;
		font-size: 12px;
	}

	.payment_select_button {
		font-size: 10px;
	}

	.payment_descriptions {
		padding: 1rem;
	}

	.payment_title>div {
		display: flex;
		align-items: center;
	}

	.info_item_sama_text {
		font-size: 12px;
	}

	.payment_select_button_remove {
		width: 25%;
		padding: 4px;
	}

	.payment_select_button_remove img {
		width: 100%;
		margin: auto;
		padding: 0px 0px;
	}

	.sama_head_title {
		width: 53%;
	}
}



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


.disabled_payments {
	filter: brightness(0.8);
	background: #fff;
	cursor: no-drop;
}

.sama_bg_box {
	width: 1200px;
	margin: 2rem auto auto;
}`, "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"AAAA;CACC,qBAAqB;CACrB,kBAAkB;CAClB,iBAAiB;CACjB,4CAA6C;CAC7C;;;2DAG2D;AAC5D;AACA;CACC,qBAAqB;CACrB,kBAAkB;CAClB,gBAAgB;CAChB,4CAA+C;CAC/C;;;2DAG6D;AAC9D;AACA;CACC,qBAAqB;CACrB,kBAAkB;CAClB,gBAAgB;CAChB,6CAA8C;CAC9C;;;4DAG4D;AAC7D;AACA;CACC,qBAAqB;CACrB,kBAAkB;CAClB,gBAAgB;CAChB,6CAAmD;CACnD;;;4DAGiE;AAClE;AACA;CACC,qBAAqB;CACrB,kBAAkB;CAClB,mBAAmB;CACnB,6CAAwC;CACxC;;;4DAGsD;AACvD;;AAEA;CACC,gCAAgC;AACjC;;AAEA;;CAEC,yBAAyB;CACzB,qBAAqB;AACtB;;AAEA;CACC,0DAA8C;CAC9C,2BAA2B;CAC3B,4BAA4B;CAC5B,sBAAsB;CACtB,wCAAwC;CACxC,kBAAkB;AACnB;;AAEA;CACC,2GAA2G;CAC3G,sBAAsB;AACvB;;AAEA;CACC,aAAa;CACb;eACc;CACd,aAAa;AACd;;AAEA;CACC;;;EAGC;CACD,UAAU;AACX;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,qBAAqB;CACrB,UAAU;CACV,iBAAiB;CACjB,aAAa;CACb,mBAAmB;CACnB,uBAAuB;AACxB;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,gBAAgB;CAChB,eAAe;CACf,gBAAgB;CAChB,iBAAiB;CACjB,gBAAgB;CAChB,2BAA2B;CAC3B,eAAe;AAChB;;AAEA;CACC,kBAAkB;CAClB,iBAAiB;CACjB,qBAAqB;CACrB,2BAA2B;AAC5B;;AAEA;CACC,aAAa;CACb,gBAAgB;CAChB,eAAe;CACf,gBAAgB;CAChB,iBAAiB;CACjB,iBAAiB;AAClB;;AAEA;CACC,2BAA2B;AAC5B;;AAEA;CACC,aAAa;CACb,UAAU;CACV,oBAAoB;CACpB,8BAA8B;AAC/B;;AAEA;CACC,0BAA0B;CAC1B,UAAU;CACV,sCAAsC;CACtC,kBAAkB;CAClB,aAAa;CACb,aAAa;CACb,oBAAoB;AACrB;;AAEA;CACC,SAAS;AACV;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,UAAU;CACV,aAAa;CACb,kBAAkB;CAClB,oBAAoB;CACpB,gBAAgB;AACjB;;AAEA;CACC,UAAU;CACV,iBAAiB;AAClB;;AAEA;CACC,eAAe;CACf,gBAAgB;CAChB,iBAAiB;CACjB,iBAAiB;CACjB,2BAA2B;CAC3B,mBAAmB;CACnB,aAAa;CACb,8BAA8B;AAC/B;;AAEA;CACC,aAAa;CACb,WAAW;CACX,mBAAmB;CACnB,kBAAkB;CAClB,2BAA2B;CAC3B,eAAe;CACf,gBAAgB;CAChB,iBAAiB;CACjB,iBAAiB;AAClB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,+BAA+B;CAC/B,iBAAiB;CACjB,eAAe;CACf,gBAAgB;CAChB,iBAAiB;CACjB,iBAAiB;CACjB,WAAW;CACX,kBAAkB;CAClB,eAAe;AAChB;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,aAAa;CACb,SAAS;CACT,mBAAmB;CACnB,sBAAsB;CACtB,iBAAiB;AAClB;;AAEA;CACC,qCAAqC;CACrC,kCAAkC;AACnC;;AAEA;CACC,YAAY;CACZ,uBAAuB;AACxB;;AAEA;CACC,UAAU;CACV,YAAY;AACb;;AAEA;CACC,UAAU;CACV,gBAAgB;CAChB,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,YAAY;CACZ,kBAAkB;CAClB,wCAAwC;CACxC,eAAe;AAChB;;AAEA,oFAAoF;AACpF;CACC,iBAAiB;AAClB;;AAEA;CACC;EACC,gBAAgB;CACjB;AACD;;AAEA;CACC;EACC,gBAAgB;CACjB;AACD;;;;AAIA,8CAA8C;AAC9C;CACC;EACC,gBAAgB;CACjB;;CAEA;EACC,cAAc;EACd,aAAa;CACd;;CAEA;EACC,WAAW;EACX,aAAa;EACb,mBAAmB;CACpB;;CAEA;EACC,cAAc;EACd,WAAW;CACZ;;CAEA;EACC,WAAW;EACX,UAAU;EACV,mBAAmB;CACpB;;CAEA;EACC,mBAAmB;EACnB,UAAU;EACV,mBAAmB;CACpB;;CAEA;EACC,mBAAmB;CACpB;;CAEA;EACC,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,eAAe;CAChB;;CAEA;EACC,eAAe;CAChB;;CAEA;EACC,aAAa;CACd;;CAEA;EACC,aAAa;EACb,mBAAmB;CACpB;;CAEA;EACC,eAAe;CAChB;;CAEA;EACC,UAAU;EACV,YAAY;CACb;;CAEA;EACC,WAAW;EACX,YAAY;EACZ,gBAAgB;CACjB;;CAEA;EACC,UAAU;CACX;AACD;;;;AAIA;CACC,eAAe;AAChB;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,wBAAwB;AACzB;;;AAGA;CACC,uBAAuB;CACvB,gBAAgB;CAChB,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,sBAAsB;AACvB","sourcesContent":["@font-face {\r\n\tfont-family: IRANSans;\r\n\tfont-style: normal;\r\n\tfont-weight: bold;\r\n\tsrc: url('../fonts/eot/IRANSansWeb_Bold.eot');\r\n\tsrc: url('../fonts/eot/IRANSansWeb_Bold.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */\r\n\turl('../fonts/woff2/IRANSansWeb_Bold.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/\r\n\turl('../fonts/woff/IRANSansWeb_Bold.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/\r\n\turl('../fonts/ttf/IRANSansWeb_Bold.ttf') format('truetype');\r\n}\r\n@font-face {\r\n\tfont-family: IRANSans;\r\n\tfont-style: normal;\r\n\tfont-weight: 500;\r\n\tsrc: url('../fonts/eot/IRANSansWeb_Medium.eot');\r\n\tsrc: url('../fonts/eot/IRANSansWeb_Medium.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */\r\n\turl('../fonts/woff2/IRANSansWeb_Medium.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/\r\n\turl('../fonts/woff/IRANSansWeb_Medium.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/\r\n\turl('../fonts/ttf/IRANSansWeb_Medium.ttf') format('truetype');\r\n}\r\n@font-face {\r\n\tfont-family: IRANSans;\r\n\tfont-style: normal;\r\n\tfont-weight: 300;\r\n\tsrc: url('../fonts/eot/IRANSansWeb_Light.eot');\r\n\tsrc: url('../fonts/eot/IRANSansWeb_Light.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */\r\n\turl('../fonts/woff2/IRANSansWeb_Light.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/\r\n\turl('../fonts/woff/IRANSansWeb_Light.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/\r\n\turl('../fonts/ttf/IRANSansWeb_Light.ttf') format('truetype');\r\n}\r\n@font-face {\r\n\tfont-family: IRANSans;\r\n\tfont-style: normal;\r\n\tfont-weight: 200;\r\n\tsrc: url('../fonts/eot/IRANSansWeb_UltraLight.eot');\r\n\tsrc: url('../fonts/eot/IRANSansWeb_UltraLight.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */\r\n\turl('../fonts/woff2/IRANSansWeb_UltraLight.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/\r\n\turl('../fonts/woff/IRANSansWeb_UltraLight.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/\r\n\turl('../fonts/ttf/IRANSansWeb_UltraLight.ttf') format('truetype');\r\n}\r\n@font-face {\r\n\tfont-family: IRANSans;\r\n\tfont-style: normal;\r\n\tfont-weight: normal;\r\n\tsrc: url('../fonts/eot/IRANSansWeb.eot');\r\n\tsrc: url('../fonts/eot/IRANSansWeb.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */\r\n\turl('../fonts/woff2/IRANSansWeb.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/\r\n\turl('../fonts/woff/IRANSansWeb.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/\r\n\turl('../fonts/ttf/IRANSansWeb.ttf') format('truetype');\r\n}\r\n\r\n.iran_sans_font {\r\n\tfont-family: IRANSans !important;\r\n}\r\n\r\n.sama_bg_box,\r\n.sama_bg_box * {\r\n\tdirection: rtl !important;\r\n\tfont-family: IRANSans;\r\n}\r\n\r\n.sama_bg_box {\r\n\tbackground-image: url(../images/plugin-bg.png);\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\tborder: 1px solid rgba(217, 217, 217, 1);\r\n\tborder-radius: 8px;\r\n}\r\n\r\n.sama_main {\r\n\tbackground: linear-gradient(249.92deg, rgba(225, 246, 255, 0.24) 30.88%, rgba(204, 255, 225, 0.24) 103.87%);\r\n\tbackground-size: cover;\r\n}\r\n\r\n.sama_main_content {\r\n\tpadding: 2rem;\r\n\t/*width: 90%;\r\n\tmargin: auto;*/\r\n\tdisplay: flex;\r\n}\r\n\r\n.sama_header_box {\r\n\t/*\r\n\tdisplay: flex;\r\n\talign-items: stretch;\r\n\t*/\r\n\twidth: 17%;\r\n}\r\n\r\n.logo_sama img {\r\n\twidth: 100%;\r\n}\r\n\r\n.logo_sama {\r\n\tmargin-bottom: 1.3rem;\r\n\twidth: 35%;\r\n\tmargin-left: auto;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n.sama_link_read_more {\r\n\tmargin-right: auto;\r\n\tdisplay: flex;\r\n\talign-items: end;\r\n\tfont-size: 16px;\r\n\tfont-weight: 500;\r\n\tline-height: 16px;\r\n\ttext-align: left;\r\n\tcolor: rgba(0, 168, 232, 1);\r\n\tcursor: pointer;\r\n}\r\n\r\n.sama_link_read_more i {\r\n\tmargin-right: 1rem;\r\n\tline-height: 16px;\r\n\ttransform: scaleX(-1);\r\n\tcolor: rgba(0, 168, 232, 1);\r\n}\r\n\r\n.sama_head_title {\r\n\tdisplay: flex;\r\n\talign-items: end;\r\n\tfont-size: 16px;\r\n\tfont-weight: 800;\r\n\tline-height: 24px;\r\n\ttext-align: right;\r\n}\r\n\r\n.sama_head_title {\r\n\tcolor: rgba(25, 70, 137, 1);\r\n}\r\n\r\n.sama_boxs_holder {\r\n\tdisplay: flex;\r\n\twidth: 90%;\r\n\talign-items: stretch;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.sama_option {\r\n\tbackdrop-filter: blur(3px);\r\n\twidth: 49%;\r\n\tborder: 1px solid rgba(25, 70, 137, 1);\r\n\tborder-radius: 6px;\r\n\tpadding: 16px;\r\n\tdisplay: flex;\r\n\talign-items: stretch;\r\n}\r\n\r\n.payment_icon {\r\n\twidth: 8%;\r\n}\r\n\r\n.payment_descriptions {\r\n\twidth: 100%;\r\n}\r\n\r\n.payment_select_btn_side {\r\n\twidth: 50%;\r\n\tdisplay: flex;\r\n\tmargin-right: auto;\r\n\tjustify-content: end;\r\n\talign-items: end;\r\n}\r\n\r\n.payment_icon img {\r\n\twidth: 70%;\r\n\tmargin-left: auto;\r\n}\r\n\r\n.payment_title {\r\n\tfont-size: 20px;\r\n\tfont-weight: 600;\r\n\tline-height: 30px;\r\n\ttext-align: right;\r\n\tcolor: rgba(25, 70, 137, 1);\r\n\tmargin-bottom: 10px;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.info_item_sama {\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\talign-items: center;\r\n\tmargin-bottom: 1px;\r\n\tcolor: rgba(25, 70, 137, 1);\r\n\tfont-size: 16px;\r\n\tfont-weight: 500;\r\n\tline-height: 24px;\r\n\ttext-align: right;\r\n}\r\n\r\n.info_item_sama:last-child {\r\n\tmargin-bottom: 0px;\r\n}\r\n\r\n.payment_select_button {\r\n\tbackground: rgba(0, 150, 89, 1);\r\n\tpadding: 7px 13px;\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tline-height: 24px;\r\n\ttext-align: right;\r\n\tcolor: #fff;\r\n\tborder-radius: 5px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.sama_icon_item img {\r\n\twidth: 80%;\r\n}\r\n\r\n.sama_icon_item {\r\n\tdisplay: flex;\r\n\twidth: 5%;\r\n\talign-items: center;\r\n\tjustify-content: right;\r\n\tmargin-left: 10px;\r\n}\r\n\r\n.sama_option.selected_option_sama {\r\n\tborder: 1px solid rgba(0, 150, 89, 1);\r\n\tbackground: rgba(0, 150, 89, 0.08);\r\n}\r\n\r\n.info_item_sama_text {\r\n\topacity: 80%;\r\n\twidth: calc(95% - 10px);\r\n}\r\n\r\n.payment_select_button_remove img {\r\n\twidth: 90%;\r\n\tmargin: auto;\r\n}\r\n\r\n.payment_select_button_remove {\r\n\twidth: 28%;\r\n\tbackground: #fff;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tpadding: 5px;\r\n\tborder-radius: 8px;\r\n\tborder: 1px solid rgba(217, 217, 217, 1);\r\n\tcursor: pointer;\r\n}\r\n\r\n/* this is for themes that use --wp--style--global--content-size for checkout page */\r\n.woocommerce-checkout .woocommerce {\r\n\tmax-width: 1200px;\r\n}\r\n\r\n@media only screen and (max-width: 1199px) {\r\n\t.woocommerce-checkout .woocommerce {\r\n\t\tmax-width: 720px;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n\t.woocommerce-checkout .woocommerce {\r\n\t\tmax-width: 380px;\r\n\t}\r\n}\r\n\r\n\r\n\r\n/* responsive part (phone responsive 700 px) */\r\n@media only screen and (max-width: 700px) {\r\n\t.woocommerce-checkout .woocommerce {\r\n\t\tmax-width: 380px;\r\n\t}\r\n\r\n\t.sama_main_content {\r\n\t\tdisplay: block;\r\n\t\tpadding: 1rem;\r\n\t}\r\n\r\n\t.sama_header_box {\r\n\t\twidth: 100%;\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t}\r\n\r\n\t.sama_boxs_holder {\r\n\t\tdisplay: block;\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.sama_option {\r\n\t\twidth: 100%;\r\n\t\tpadding: 0;\r\n\t\tmargin-bottom: 1rem;\r\n\t}\r\n\r\n\t.logo_sama {\r\n\t\tmargin-bottom: 0rem;\r\n\t\twidth: 10%;\r\n\t\tmargin-left: 0.5rem;\r\n\t}\r\n\r\n\t.sama_header_box {\r\n\t\tmargin-bottom: 1rem;\r\n\t}\r\n\r\n\t.payment_title {\r\n\t\twidth: 100%;\r\n\t\tmargin: auto;\r\n\t\tmargin-bottom: 1rem;\r\n\t\tfont-size: 12px;\r\n\t}\r\n\r\n\t.payment_select_button {\r\n\t\tfont-size: 10px;\r\n\t}\r\n\r\n\t.payment_descriptions {\r\n\t\tpadding: 1rem;\r\n\t}\r\n\r\n\t.payment_title>div {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t}\r\n\r\n\t.info_item_sama_text {\r\n\t\tfont-size: 12px;\r\n\t}\r\n\r\n\t.payment_select_button_remove {\r\n\t\twidth: 25%;\r\n\t\tpadding: 4px;\r\n\t}\r\n\r\n\t.payment_select_button_remove img {\r\n\t\twidth: 100%;\r\n\t\tmargin: auto;\r\n\t\tpadding: 0px 0px;\r\n\t}\r\n\r\n\t.sama_head_title {\r\n\t\twidth: 53%;\r\n\t}\r\n}\r\n\r\n\r\n\r\n.disabled_by_sama_plugin * {\r\n\tcursor: no-drop;\r\n}\r\n\r\n#sama_payment_type_f_field {\r\n\tdisplay: none !important;\r\n}\r\n\r\n.disabled_by_sama_plugin {\r\n\tbackground: #5552;\r\n}\r\n\r\n#sama_payment_type_f {\r\n\tdisplay: none !important;\r\n}\r\n\r\n\r\n.disabled_payments {\r\n\tfilter: brightness(0.8);\r\n\tbackground: #fff;\r\n\tcursor: no-drop;\r\n}\r\n\r\n.sama_bg_box {\r\n\twidth: 1200px;\r\n\tmargin: 2rem auto auto;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/eot/IRANSansWeb.eot":
/*!**********************************************!*\
  !*** ./src/assets/fonts/eot/IRANSansWeb.eot ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c7d40bb2f4cca4c4cf7.eot";

/***/ }),

/***/ "./src/assets/fonts/eot/IRANSansWeb_Bold.eot":
/*!***************************************************!*\
  !*** ./src/assets/fonts/eot/IRANSansWeb_Bold.eot ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "904911984f95689efa46.eot";

/***/ }),

/***/ "./src/assets/fonts/eot/IRANSansWeb_Light.eot":
/*!****************************************************!*\
  !*** ./src/assets/fonts/eot/IRANSansWeb_Light.eot ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "49400d81cb5257b9f9fa.eot";

/***/ }),

/***/ "./src/assets/fonts/eot/IRANSansWeb_Medium.eot":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/eot/IRANSansWeb_Medium.eot ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf8067f65ec29d6397ae.eot";

/***/ }),

/***/ "./src/assets/fonts/eot/IRANSansWeb_UltraLight.eot":
/*!*********************************************************!*\
  !*** ./src/assets/fonts/eot/IRANSansWeb_UltraLight.eot ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97a2b6dd14f7e52bfe6b.eot";

/***/ }),

/***/ "./src/assets/fonts/ttf/IRANSansWeb.ttf":
/*!**********************************************!*\
  !*** ./src/assets/fonts/ttf/IRANSansWeb.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "84fda3e85b2ec3885be1.ttf";

/***/ }),

/***/ "./src/assets/fonts/ttf/IRANSansWeb_Bold.ttf":
/*!***************************************************!*\
  !*** ./src/assets/fonts/ttf/IRANSansWeb_Bold.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf3c52575acbe02d6fc2.ttf";

/***/ }),

/***/ "./src/assets/fonts/ttf/IRANSansWeb_Light.ttf":
/*!****************************************************!*\
  !*** ./src/assets/fonts/ttf/IRANSansWeb_Light.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "00ee5b29c5221d5e5f90.ttf";

/***/ }),

/***/ "./src/assets/fonts/ttf/IRANSansWeb_Medium.ttf":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/ttf/IRANSansWeb_Medium.ttf ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3c04f87129f5db9255a.ttf";

/***/ }),

/***/ "./src/assets/fonts/ttf/IRANSansWeb_UltraLight.ttf":
/*!*********************************************************!*\
  !*** ./src/assets/fonts/ttf/IRANSansWeb_UltraLight.ttf ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "99c7469de3679d88bf66.ttf";

/***/ }),

/***/ "./src/assets/fonts/woff2/IRANSansWeb.woff2":
/*!**************************************************!*\
  !*** ./src/assets/fonts/woff2/IRANSansWeb.woff2 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca92bd17e3211d6b29b9.woff2";

/***/ }),

/***/ "./src/assets/fonts/woff2/IRANSansWeb_Bold.woff2":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/woff2/IRANSansWeb_Bold.woff2 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88680563434b5dc5286b.woff2";

/***/ }),

/***/ "./src/assets/fonts/woff2/IRANSansWeb_Light.woff2":
/*!********************************************************!*\
  !*** ./src/assets/fonts/woff2/IRANSansWeb_Light.woff2 ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fa9da5833df1aa71fcae.woff2";

/***/ }),

/***/ "./src/assets/fonts/woff2/IRANSansWeb_Medium.woff2":
/*!*********************************************************!*\
  !*** ./src/assets/fonts/woff2/IRANSansWeb_Medium.woff2 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "193decd24d2f07287dfe.woff2";

/***/ }),

/***/ "./src/assets/fonts/woff2/IRANSansWeb_UltraLight.woff2":
/*!*************************************************************!*\
  !*** ./src/assets/fonts/woff2/IRANSansWeb_UltraLight.woff2 ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9056684ca3119fc8f5b7.woff2";

/***/ }),

/***/ "./src/assets/fonts/woff/IRANSansWeb.woff":
/*!************************************************!*\
  !*** ./src/assets/fonts/woff/IRANSansWeb.woff ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56ae948d2fcc0d8bf409.woff";

/***/ }),

/***/ "./src/assets/fonts/woff/IRANSansWeb_Bold.woff":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/woff/IRANSansWeb_Bold.woff ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc6a0d944985f3c9d366.woff";

/***/ }),

/***/ "./src/assets/fonts/woff/IRANSansWeb_Light.woff":
/*!******************************************************!*\
  !*** ./src/assets/fonts/woff/IRANSansWeb_Light.woff ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bfe40ac88fc3fc2e5a3f.woff";

/***/ }),

/***/ "./src/assets/fonts/woff/IRANSansWeb_Medium.woff":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/woff/IRANSansWeb_Medium.woff ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9bdc41e2af41dfdfe29c.woff";

/***/ }),

/***/ "./src/assets/fonts/woff/IRANSansWeb_UltraLight.woff":
/*!***********************************************************!*\
  !*** ./src/assets/fonts/woff/IRANSansWeb_UltraLight.woff ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97fa1db82a8c0cd94042.woff";

/***/ }),

/***/ "./src/assets/images/check.png":
/*!*************************************!*\
  !*** ./src/assets/images/check.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "317a3ec5d0e5876e4d65.png";

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f762308f8f94004a9fbd.png";

/***/ }),

/***/ "./src/assets/images/payment_checked.png":
/*!***********************************************!*\
  !*** ./src/assets/images/payment_checked.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37cc0a129fd42df3eee6.png";

/***/ }),

/***/ "./src/assets/images/payment_date.png":
/*!********************************************!*\
  !*** ./src/assets/images/payment_date.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0c33d6d92e20fb59da1.png";

/***/ }),

/***/ "./src/assets/images/plugin-bg.png":
/*!*****************************************!*\
  !*** ./src/assets/images/plugin-bg.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d208e35495fd84676947.png";

/***/ }),

/***/ "./src/assets/images/remove_icon.png":
/*!*******************************************!*\
  !*** ./src/assets/images/remove_icon.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4acb4a0611f05d1642b3.png";

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":3,"name":"woocommerce/sama-block","title":"Sama Block","description":"Sama Payment type boxes","category":"woocommerce","parent":["woocommerce/checkout-block"],"textdomain":"sama","supports":{"align":["wide"]},"attributes":{"align":{"type":"string","default":"wide"},"lock":{"type":"object","default":{"remove":true,"move":true}},"sama_payment_type_f":{"type":"string","default":""},"title":{"type":"string"}},"editorScript":"file:build/block-sama-gateway.js","style":"file:src/assets/css/style.css","editorStyle":"src/assets/css/style.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"block-sama-gateway": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/edit */ "./src/components/edit.js");
/* harmony import */ var _components_save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/save */ "./src/components/save.js");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../block.json */ "./block.json");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__, {
  edit: _components_edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _components_save__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/******/ })()
;
//# sourceMappingURL=block-sama-gateway.js.map