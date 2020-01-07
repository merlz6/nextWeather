webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Weather.js":
/*!*******************************!*\
  !*** ./components/Weather.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var _jsxFileName = "/Users/michaelmerlo/newProjects/nextProj/components/Weather.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var Weather =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Weather, _Component);

  function Weather(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Weather);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Weather).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Weather, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "HEY this is the weather page"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        className: "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, this.props.currentWeather.weather[0].description === 'overcast clouds' ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardImg"], {
        top: true,
        width: "100%",
        src: "/static/cloud.png",
        alt: "Card image cap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }) : __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, this.props.info.name, " Weather"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardSubtitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Country: ", this.props.info.country), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Lattitude: ", this.props.info.coord.lat), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Longitude: ", this.props.info.coord.lon), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Temp: ", (this.props.currentWeather.main.temp * 9 / 5 - 459.67).toFixed(2)), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Feels Like: ", (this.props.currentWeather.main.feels_like * 9 / 5 - 459.67).toFixed(2)), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Humidity: ", this.props.currentWeather.main.humidity, " %"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Windspeed: ", this.props.currentWeather.wind.speed)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Button"))));
    }
  }]);

  return Weather;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Weather);

/***/ })

})
//# sourceMappingURL=index.js.b6a11b50815ca8496bc2.hot-update.js.map