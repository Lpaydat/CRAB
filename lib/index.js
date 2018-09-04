"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./index.css");

var _App = _interopRequireDefault(require("./App"));

var _registerServiceWorker = _interopRequireDefault(require("./registerServiceWorker"));

_reactDom.default.render(_react.default.createElement(_App.default, null), document.getElementById('root'));

(0, _registerServiceWorker.default)();