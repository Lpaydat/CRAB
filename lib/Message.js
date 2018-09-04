"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var Message = function Message(_ref) {
  var msg = _ref.msg;
  return _react.default.createElement("div", null, "".concat(msg.id, ": ").concat(msg.text));
};

var _default = (0, _reactRelay.createFragmentContainer)(Message, {
  msg: function msg() {
    var node = require("./__generated__/Message_msg.graphql");

    if (node.hash && node.hash !== "ab291bbb0dfb90631c3f16e0c977c61f") {
      console.error("The definition of 'Message_msg' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("./__generated__/Message_msg.graphql");
  }
});

exports.default = _default;