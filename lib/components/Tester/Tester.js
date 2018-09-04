"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var Tester = function Tester(_ref) {
  var msg = _ref.msg;
  return _react.default.createElement("div", null, "".concat(msg.id, ": ").concat(msg.text));
};

var _default = (0, _reactRelay.createFragmentContainer)(Tester, {
  msg: function msg() {
    var node = require("./__generated__/Tester_msg.graphql");

    if (node.hash && node.hash !== "20f96e764b4469ebe7dbc8b79152fa43") {
      console.error("The definition of 'Tester_msg' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("./__generated__/Tester_msg.graphql");
  }
});

exports.default = _default;