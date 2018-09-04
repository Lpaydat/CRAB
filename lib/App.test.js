"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = _interopRequireDefault(require("./App"));

var _ref =
/*#__PURE__*/
(0, _jsx2.default)(_App.default, {});

it('renders without crashing', function () {
  var div = document.createElement('div');

  _reactDom.default.render(_ref, div);

  _reactDom.default.unmountComponentAtNode(div);
});