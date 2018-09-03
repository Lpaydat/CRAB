

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

const _react = _interopRequireDefault(require('react'));

const _reactDom = _interopRequireDefault(require('react-dom'));

const _App = _interopRequireDefault(require('./App'));

it('renders without crashing', () => {
  const div = document.createElement('div');

  _reactDom.default.render(_react.default.createElement(_App.default, null), div);

  _reactDom.default.unmountComponentAtNode(div);
});
