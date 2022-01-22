"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_app_views_base64_Base64_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/app/views/base64/Base64.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/app/views/base64/Base64.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/validate */ "./resources/js/app/mixins/validate.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Base64",
  mixins: [_mixins_validate__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      text: '',
      result: '',
      color: 'indigo'
    };
  },
  methods: {
    decode: function decode() {
      var _this = this;

      if (!this.validate()) {
        return false;
      }

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/base64/decode', {
        string: this.text
      }).then(function (res) {
        _this.result = res.data.result;
      });
    },
    encode: function encode() {
      var _this2 = this;

      if (!this.validate()) {
        return false;
      }

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/base64/encode', {
        string: this.text
      }).then(function (res) {
        _this2.result = res.data.result;
      });
    },
    copyCode: function copyCode() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this3.color = 'gray';
                _context.next = 3;
                return navigator.clipboard.writeText(_this3.result);

              case 3:
                setTimeout(function () {
                  _this3.color = 'indigo';
                }, 3000);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    clear: function clear() {
      this.result = '';
      this.text = '';
    }
  }
});

/***/ }),

/***/ "./resources/js/app/mixins/validate.js":
/*!*********************************************!*\
  !*** ./resources/js/app/mixins/validate.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      valid: false,
      rules: {
        required: [function (v) {
          return !!v || 'Заполните поле';
        }],
        emailRules: [function (v) {
          return !!v || 'Заполните поле "email"';
        }, function (v) {
          return /.+@.+\..+/.test(v) || 'Введите правильный "email"';
        }],
        passwordRules: [function (v) {
          return !!v.trim() || 'Заполните поле "Password"';
        }, function (v) {
          return v.trim().length <= 20 || 'Поле "Password" должно содержать не более 20 символов';
        }, function (v) {
          return v.trim().length >= 6 || 'Поле "Password" должно содержать не менее 6 символов';
        }],
        nameRules: [function (v) {
          return !!v.trim() || 'Заполните поле "Name"';
        }, function (v) {
          return v.trim().length <= 20 || 'Поле "Name" должно содержать не более 30 символов';
        }, function (v) {
          return v.trim().length >= 3 || 'Поле "Name" должно содержать не менее 2 символов';
        }]
      }
    };
  },
  methods: {
    validate: function validate() {
      return this.$refs.form.validate();
    }
  }
});

/***/ }),

/***/ "./resources/js/app/views/base64/Base64.vue":
/*!**************************************************!*\
  !*** ./resources/js/app/views/base64/Base64.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Base64_vue_vue_type_template_id_e3538d5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base64.vue?vue&type=template&id=e3538d5c&scoped=true& */ "./resources/js/app/views/base64/Base64.vue?vue&type=template&id=e3538d5c&scoped=true&");
/* harmony import */ var _Base64_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base64.vue?vue&type=script&lang=js& */ "./resources/js/app/views/base64/Base64.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Base64_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Base64_vue_vue_type_template_id_e3538d5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Base64_vue_vue_type_template_id_e3538d5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e3538d5c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/app/views/base64/Base64.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/app/views/base64/Base64.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/app/views/base64/Base64.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Base64_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Base64.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/app/views/base64/Base64.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Base64_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/app/views/base64/Base64.vue?vue&type=template&id=e3538d5c&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/app/views/base64/Base64.vue?vue&type=template&id=e3538d5c&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Base64_vue_vue_type_template_id_e3538d5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Base64_vue_vue_type_template_id_e3538d5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Base64_vue_vue_type_template_id_e3538d5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Base64.vue?vue&type=template&id=e3538d5c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/app/views/base64/Base64.vue?vue&type=template&id=e3538d5c&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/app/views/base64/Base64.vue?vue&type=template&id=e3538d5c&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/app/views/base64/Base64.vue?vue&type=template&id=e3538d5c&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { attrs: { "max-width": "1200" } },
    [
      _c("v-card-title", [_vm._v("Base 64 translate")]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-form",
            { ref: "form" },
            [
              _c("v-textarea", {
                attrs: {
                  label: "Enter text",
                  rows: "3",
                  rules: _vm.rules.required,
                },
                model: {
                  value: _vm.text,
                  callback: function ($$v) {
                    _vm.text = $$v
                  },
                  expression: "text",
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-actions",
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { color: "orange" }, on: { click: _vm.decode } },
            [_vm._v("decode")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { color: "primary" }, on: { click: _vm.encode } },
            [_vm._v("encode")]
          ),
          _vm._v(" "),
          _c("v-btn", { attrs: { color: "red" }, on: { click: _vm.clear } }, [
            _vm._v("clear"),
          ]),
          _vm._v(" "),
          _c("v-spacer"),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-subtitle", [_vm._v("Result:")]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-row",
            [
              _c("v-col", { attrs: { cols: "11" } }, [
                _c("p", [_vm._v(_vm._s(_vm.result))]),
              ]),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "1" } },
                [
                  _c(
                    "v-btn",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.result,
                          expression: "result",
                        },
                      ],
                      attrs: { icon: "" },
                      on: { click: _vm.copyCode },
                    },
                    [
                      _c("v-icon", { attrs: { color: _vm.color } }, [
                        _vm._v("mdi-content-copy"),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);