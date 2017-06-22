'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pantograph = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _shinkansenSignals = require('shinkansen-signals');

var _shinkansenRails = require('shinkansen-rails');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALPHA = {
  CHANGE: 'ALPHA_CHANGE',
  FETCH: 'ALPHA_FETCH',
  STORE: 'ALPHA_STORE',
  QUERY: 'ALPHA_QUERY'
};

var OMEGA = {
  CHANGE: 'OMEGA_CHANGE',
  FETCH: 'OMEGA_FETCH',
  STORE: 'OMEGA_STORE',
  QUERY: 'OMEGA_QUERY'
};

var EMBARK = {
  ROUTE: 'EMBARK_ROUTE',
  FETCH: 'EMBARK_FETCH',
  STORE: 'EMBARK_STORE'
};

var DEBARK = {
  ROUTE: 'DEBARK_ROUTE',
  FETCH: 'DEBARK_FETCH',
  STORE: 'DEBARK_STORE'
};

var ACTION = {};
var STORE = {
  getState: function getState() {
    return {};
  }
};
var HISTORY = {
  push: function push() {},
  getCurrentLocation: function getCurrentLocation() {}
};

function REDIRECT_TO_ALPHA(_ref) {
  var history = _ref.history,
      alpha = _ref.alpha;

  // console.log('REDIRECT_TO_ALPHA', route) // eslint-disable-line
  var _history$getCurrentLo = history.getCurrentLocation(),
      PATHNAME = _history$getCurrentLo.pathname;

  var pathname = _shinkansenRails.Rails.path((0, _defineProperty3.default)({}, _shinkansenSignals.Signals.ALPHA, alpha), _shinkansenSignals.Signals.ALPHA_PATTERN);

  if (PATHNAME !== pathname) history.push(pathname);
}

function REDIRECT_TO_OMEGA(_ref2) {
  var _Rails$path2;

  var history = _ref2.history,
      alpha = _ref2.alpha,
      omega = _ref2.omega;

  // console.log('REDIRECT_TO_OMEGA', route) // eslint-disable-line
  var _history$getCurrentLo2 = history.getCurrentLocation(),
      PATHNAME = _history$getCurrentLo2.pathname;

  var pathname = _shinkansenRails.Rails.path((_Rails$path2 = {}, (0, _defineProperty3.default)(_Rails$path2, _shinkansenSignals.Signals.ALPHA, alpha), (0, _defineProperty3.default)(_Rails$path2, _shinkansenSignals.Signals.OMEGA, omega), _Rails$path2), _shinkansenSignals.Signals.OMEGA_PATTERN);

  if (PATHNAME !== pathname) history.push(pathname);
}

function REDIRECT_TO_EMBARK(_ref3) {
  var history = _ref3.history,
      embark = _ref3.embark;

  // console.log('REDIRECT_TO_EMBARK', embark) // eslint-disable-line
  var _history$getCurrentLo3 = history.getCurrentLocation(),
      PATHNAME = _history$getCurrentLo3.pathname;

  var pathname = _shinkansenRails.Rails.path((0, _defineProperty3.default)({}, _shinkansenSignals.Signals.EMBARK, embark), _shinkansenSignals.Signals.EMBARK_PATTERN);

  if (PATHNAME !== pathname) history.push(pathname);
}

function REDIRECT_TO_DEBARK(_ref4) {
  var history = _ref4.history,
      debark = _ref4.debark;

  // console.log('REDIRECT_TO_DEBARK', debark) // eslint-disable-line
  var _history$getCurrentLo4 = history.getCurrentLocation(),
      PATHNAME = _history$getCurrentLo4.pathname;

  var pathname = _shinkansenRails.Rails.path((0, _defineProperty3.default)({}, _shinkansenSignals.Signals.DEBARK, debark), _shinkansenSignals.Signals.DEBARK_PATTERN);

  if (PATHNAME !== pathname) history.push(pathname);
}

function REDIRECT(_ref5) {
  var alpha = _ref5[_shinkansenSignals.Signals.ALPHA],
      omega = _ref5[_shinkansenSignals.Signals.OMEGA],
      embark = _ref5[_shinkansenSignals.Signals.EMBARK],
      debark = _ref5[_shinkansenSignals.Signals.DEBARK],
      history = _ref5.history;
  // console.log('REDIRECT()', alpha, omega, debark, embark) // eslint-disable-line
  if (alpha && omega) {
    REDIRECT_TO_OMEGA({ alpha: alpha, omega: omega, history: history });
  } else if (embark) {
    REDIRECT_TO_EMBARK({ embark: embark, history: history });
  } else if (debark) {
    REDIRECT_TO_DEBARK({ debark: debark, history: history });
  } else if (alpha) {
    REDIRECT_TO_ALPHA({ alpha: alpha, history: history });
  } else if (omega) {
    throw Error('Pantograph encountered a route error in REDIRECT()');
  }
}

function redirectFromAlpha(_ref6) {
  var redirect = _ref6[_shinkansenSignals.Signals.ALPHA].redirect,
      history = _ref6.history;
  // console.log('redirectFromAlpha()', redirect) // eslint-disable-line
  if (redirect) REDIRECT((0, _extends3.default)({}, redirect, { history: history }));
}

function redirectFromOmega(_ref7) {
  var redirect = _ref7[_shinkansenSignals.Signals.OMEGA].redirect,
      history = _ref7.history;
  // console.log('redirectFromOmega()', redirect) // eslint-disable-line
  if (redirect) REDIRECT((0, _extends3.default)({}, redirect, { history: history }));
}

function redirectFromEmbark(_ref8) {
  var redirect = _ref8[_shinkansenSignals.Signals.EMBARK].redirect,
      history = _ref8.history;
  // console.log('redirectFromEmbark()', redirect) // eslint-disable-line
  if (redirect) REDIRECT((0, _extends3.default)({}, redirect, { history: history }));
}

function redirectFromDebark(_ref9) {
  var redirect = _ref9[_shinkansenSignals.Signals.DEBARK].redirect,
      history = _ref9.history;
  // console.log('redirectFromDebark()', redirect) // eslint-disable-line
  if (redirect) REDIRECT((0, _extends3.default)({}, redirect, { history: history }));
}

function graphite(_ref10) {
  var _ref10$action = _ref10.action;
  _ref10$action = _ref10$action === undefined ? ACTION : _ref10$action;
  var type = _ref10$action.type,
      rest = (0, _objectWithoutProperties3.default)(_ref10$action, ['type']),
      _ref10$store = _ref10.store,
      store = _ref10$store === undefined ? STORE : _ref10$store,
      _ref10$history = _ref10.history,
      history = _ref10$history === undefined ? HISTORY : _ref10$history;

  switch (type) {
    case 'OMEGA_QUERY':
      // console.log('Pantograph.graphite():OMEGA_QUERY', { ...rest, type }) // eslint-disable-line
      {
        var state = store.getState();

        redirectFromOmega((0, _extends3.default)({}, state, { history: history }));
      }
      break;
    case 'EMBARK_ROUTE':
      // console.log('Pantograph.graphite():EMBARK_ROUTE', { ...rest, type }) // eslint-disable-line
      {
        var _state = store.getState();

        redirectFromEmbark((0, _extends3.default)({}, _state, { history: history }));
      }
      break;
    case 'DEBARK_ROUTE':
      // console.log('Pantograph.graphite():DEBARK_ROUTE', { ...rest, type }) // eslint-disable-line
      {
        var _state2 = store.getState();

        redirectFromDebark((0, _extends3.default)({}, _state2, { history: history }));
      }
      break;
    case 'ALPHA_QUERY':
      // console.log('Pantograph.graphite():ALPHA_QUERY', { ...rest, type }) // eslint-disable-line
      {
        var _state3 = store.getState();

        redirectFromAlpha((0, _extends3.default)({}, _state3, { history: history }));
      }
      break;
  }

  return (0, _extends3.default)({}, rest, { type: type });
}

var Pantograph = exports.Pantograph = function () {
  function Pantograph() {
    (0, _classCallCheck3.default)(this, Pantograph);
  }

  (0, _createClass3.default)(Pantograph, null, [{
    key: 'ALPHA',
    get: function get() {
      return ALPHA;
    }
  }, {
    key: 'OMEGA',
    get: function get() {
      return OMEGA;
    }
  }, {
    key: 'EMBARK',
    get: function get() {
      return EMBARK;
    }
  }, {
    key: 'DEBARK',
    get: function get() {
      return DEBARK;
    }
  }]);
  return Pantograph;
}();

Pantograph.graphite = graphite;