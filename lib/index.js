"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./index.css");

var _App = _interopRequireDefault(require("./App"));

var _registerServiceWorker = _interopRequireDefault(require("./registerServiceWorker"));

_reactDom.default.render((0, _jsx2.default)(_App.default, {}), document.getElementById('root'));

(0, _registerServiceWorker.default)();