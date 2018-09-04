"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _environment = _interopRequireDefault(require("./data/environment"));

var _Tester = _interopRequireDefault(require("./components/Tester"));

var _logo = _interopRequireDefault(require("./logo.svg"));

require("./App.css");

var _graphql;

var App = function App() {
  return _react.default.createElement("div", {
    className: "App"
  }, _react.default.createElement("header", {
    className: "App-header"
  }, _react.default.createElement("img", {
    src: _logo.default,
    className: "App-logo",
    alt: "logo"
  }), _react.default.createElement("h1", {
    className: "App-title"
  }, "Welcome to React")), _react.default.createElement("p", {
    className: "App-intro"
  }, "To get started, edit ", _react.default.createElement("code", null, "src/App.js"), " and save to reload."), _react.default.createElement(_reactRelay.QueryRenderer, {
    environment: _environment.default,
    query: _graphql || (_graphql = function _graphql() {
      var node = require("./__generated__/AppQuery.graphql");

      if (node.hash && node.hash !== "fde76665dbd055d16e52358bde74f508") {
        console.error("The definition of 'AppQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("./__generated__/AppQuery.graphql");
    }),
    variables: {},
    render: function render(_ref) {
      var error = _ref.error,
          props = _ref.props;

      if (error) {
        return _react.default.createElement("div", null, error.message);
      }

      if (props) {
        return _react.default.createElement(_Tester.default, {
          msg: props.message
        });
      }

      return _react.default.createElement("div", null, "Loading...");
    }
  }));
};

var _default = App;
exports.default = _default;