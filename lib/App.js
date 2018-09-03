

const _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

const _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

const _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

const _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

const _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

const _react = _interopRequireWildcard(require('react'));

const _logo = _interopRequireDefault(require('./logo.svg'));

require('./App.css');

const App =
/* #__PURE__ */
(function (_Component) {
  (0, _inherits2.default)(App, _Component);

  function App() {
    (0, _classCallCheck2.default)(this, App);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
  }

  (0, _createClass2.default)(App, [{
    key: 'render',
    value: function render() {
      return _react.default.createElement('div', {
        className: 'App',
      }, _react.default.createElement('header', {
        className: 'App-header',
      }, _react.default.createElement('img', {
        src: _logo.default,
        className: 'App-logo',
        alt: 'logo',
      }), _react.default.createElement('h1', {
        className: 'App-title',
      }, 'Welcome to React')), _react.default.createElement('p', {
        className: 'App-intro',
      }, 'To get started, edit ', _react.default.createElement('code', null, 'src/App.js'), ' and save to reload.'));
    },
  }]);
  return App;
}(_react.Component));

const _default = App;
exports.default = _default;
