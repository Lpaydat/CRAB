

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

const _react = _interopRequireDefault(require('react'));

const _reactDom = _interopRequireDefault(require('react-dom'));

require('./index.css');

const _App = _interopRequireDefault(require('./App'));

const _registerServiceWorker = _interopRequireDefault(require('./registerServiceWorker'));

_reactDom.default.render(_react.default.createElement(_App.default, null), document.getElementById('root'));

(0, _registerServiceWorker.default)();
