"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_app_views_auth_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/app/views/auth/Register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/app/views/auth/Register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/validate */ "./resources/js/app/mixins/validate.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: "Register",
  mixins: [_mixins_validate__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      errors: [],
      form: {
        email: '',
        name: '',
        password: '',
        password_confirmation: ''
      }
    };
  },
  computed: {
    getErrors: function getErrors() {
      return this.errors;
    }
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)(['A_LOGIN', 'A_REGISTER', 'A_SET_ALERT'])), {}, {
    register: function register() {
      var _this = this;

      if (!this.validate()) {
        return false;
      }

      this.A_REGISTER(this.form).then( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(res) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!res) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", _this.$router.push('/dashboard'));

                case 2:
                  _context.next = 4;
                  return _this.A_SET_ALERT({
                    text: 'Errors server request',
                    type: 'error',
                    timeout: 2000
                  });

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }())["catch"](function (error) {
        _this.errors = error;

        _this.A_SET_ALERT({
          text: 'Errors server request',
          type: 'error',
          timeout: 2000
        });
      });
    }
  })
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

/***/ "./resources/js/app/views/auth/Register.vue":
/*!**************************************************!*\
  !*** ./resources/js/app/views/auth/Register.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_03dc20ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=03dc20ed&scoped=true& */ "./resources/js/app/views/auth/Register.vue?vue&type=template&id=03dc20ed&scoped=true&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/app/views/auth/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_03dc20ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_03dc20ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "03dc20ed",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/app/views/auth/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/app/views/auth/Register.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/app/views/auth/Register.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/app/views/auth/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/app/views/auth/Register.vue?vue&type=template&id=03dc20ed&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/app/views/auth/Register.vue?vue&type=template&id=03dc20ed&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_03dc20ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_03dc20ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_03dc20ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=03dc20ed&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/app/views/auth/Register.vue?vue&type=template&id=03dc20ed&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/app/views/auth/Register.vue?vue&type=template&id=03dc20ed&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/app/views/auth/Register.vue?vue&type=template&id=03dc20ed&scoped=true& ***!
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
    { staticClass: "form-auth", attrs: { "max-width": "600" } },
    [
      _c("v-card-title", { staticClass: "color-main" }, [
        _vm._v("\n        Register\n    "),
      ]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-form",
            { ref: "form", staticClass: "mt-4" },
            [
              _c("v-text-field", {
                attrs: {
                  "error-messages": _vm.getErrors.email,
                  dense: "",
                  outlined: "",
                  rules: _vm.rules.emailRules,
                  label: "Email",
                },
                model: {
                  value: _vm.form.email,
                  callback: function ($$v) {
                    _vm.$set(_vm.form, "email", $$v)
                  },
                  expression: "form.email",
                },
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  "error-messages": _vm.getErrors.name,
                  dense: "",
                  outlined: "",
                  rules: _vm.rules.nameRules,
                  label: "Name",
                },
                model: {
                  value: _vm.form.name,
                  callback: function ($$v) {
                    _vm.$set(_vm.form, "name", $$v)
                  },
                  expression: "form.name",
                },
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  "error-messages": _vm.getErrors.password,
                  dense: "",
                  outlined: "",
                  rules: _vm.rules.passwordRules,
                  label: "Password",
                  type: "password",
                },
                model: {
                  value: _vm.form.password,
                  callback: function ($$v) {
                    _vm.$set(_vm.form, "password", $$v)
                  },
                  expression: "form.password",
                },
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  "error-messages": _vm.getErrors.password,
                  dense: "",
                  outlined: "",
                  label: "Confirmed",
                  type: "password",
                },
                model: {
                  value: _vm.form.password_confirmation,
                  callback: function ($$v) {
                    _vm.$set(_vm.form, "password_confirmation", $$v)
                  },
                  expression: "form.password_confirmation",
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
          _c("router-link", { attrs: { to: "/login" } }, [_vm._v("Login")]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { color: "primary" }, on: { click: _vm.register } },
            [_vm._v("Register")]
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