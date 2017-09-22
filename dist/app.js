'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tabs = require('material-ui/Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Card = require('material-ui/Card');

var _Card2 = _interopRequireDefault(_Card);

var _styles = require('material-ui/styles');

var _Snackbar = require('material-ui/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var appStyle = {
  Card: {
    marginTop: '10px',
    marginBottom: '10px'
  }
};

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      publicKey: '',
      secretKey: '',
      keyStatus: {
        type: '',
        message: '',
        color: ''
      },
      index: 0,
      clients: [],
      spinnerShow: false,
      snackbarShow: false,
      snackbarMessage: '',
      snackBarDuration: 6e3
    };
    return _this;
  }

  _createClass(App, [{
    key: 'onShowSnackNotification',
    value: function onShowSnackNotification(_ref) {
      var message = _ref.message,
          duration = _ref.duration;

      this.setState({
        snackbarShow: true,
        snackbarMessage: message,
        snackBarDuration: duration || 6e3
      });
    }
  }, {
    key: 'snackBarCloseAction',
    value: function snackBarCloseAction(event, reason) {
      this.setState({ snackbarShow: false });
    }
  }, {
    key: 'onShowSpinner',
    value: function onShowSpinner() {
      this.setState({ spinnerShow: true });
    }
  }, {
    key: 'onHideSpinner',
    value: function onHideSpinner() {
      this.setState({ spinnerShow: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;


      var handleChange = function handleChange(event, index) {
        _this2.setState({ index: index });
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Card2.default,
          { className: classes.Card },
          _react2.default.createElement(
            _Card.CardContent,
            null,
            _react2.default.createElement(
              'p',
              null,
              'Hello'
            )
          ),
          _react2.default.createElement(
            _Card.CardContent,
            null,
            _react2.default.createElement(
              _Tabs2.default,
              {
                value: this.state.index,
                onChange: handleChange,
                indicatorColor: 'primary',
                fullWidth: true
              },
              _react2.default.createElement(_Tabs.Tab, { label: 'Charges' }),
              _react2.default.createElement(_Tabs.Tab, { label: 'Clients' })
            )
          )
        ),
        _react2.default.createElement(_Snackbar2.default, {
          anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
          open: this.state.snackbarShow,
          onRequestClose: function onRequestClose(event, reason) {
            return _this2.snackBarCloseAction(event, reason);
          },
          autoHideDuration: this.state.snackBarDuration,
          message: this.state.snackbarMessage })
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = (0, _styles.withStyles)(appStyle)(App);