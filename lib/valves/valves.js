'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Valves = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _reactRouter = require('react-router');

var _reactSteam = require('react-steam');

var _reactGears = require('react-gears');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALPHA_STATE = _reactSteam.Steam.ALPHA,
    DEBARK_STATE = _reactSteam.Steam.DEBARK,
    EMBARK_STATE = _reactSteam.Steam.EMBARK,
    OMEGA_STATE = _reactSteam.Steam.OMEGA;


var ALPHA = {
  CHANGE: 'ALPHA CHANGE',
  FETCH: 'ALPHA FETCH',
  STORE: 'ALPHA STORE',
  QUERY: 'ALPHA QUERY'
};

var DEBARK = {
  ROUTE: 'DEBARK ROUTE',
  FETCH: 'DEBARK FETCH',
  STORE: 'DEBARK STORE'
};

var EMBARK = {
  ROUTE: 'EMBARK ROUTE',
  FETCH: 'EMBARK FETCH',
  STORE: 'EMBARK STORE'
};

var OMEGA = {
  CHANGE: 'OMEGA CHANGE',
  FETCH: 'OMEGA FETCH',
  STORE: 'OMEGA STORE',
  QUERY: 'OMEGA QUERY'
};

var ACTION = {};
var STORE = {
  getState: function getState() {
    return {};
  }
};

var REDIRECT_ROUTE = function REDIRECT_ROUTE(route) {
  // console.log('REDIRECT_ROUTE', route) // eslint-disable-line
  var _browserHistory$getCu = _reactRouter.browserHistory.getCurrentLocation(),
      PATHNAME = _browserHistory$getCu.pathname;

  var pathname = _reactGears.Gears.path(route);

  if (PATHNAME !== pathname) _reactRouter.browserHistory.push(pathname);
};

var REDIRECT_TO_DEBARK = function REDIRECT_TO_DEBARK(_ref) {
  var debark = _ref.debark;

  // console.log('REDIRECT_TO_DEBARK', debark) // eslint-disable-line
  var _browserHistory$getCu2 = _reactRouter.browserHistory.getCurrentLocation(),
      PATHNAME = _browserHistory$getCu2.pathname;

  var pathname = '/' + debark;

  if (PATHNAME !== pathname) _reactRouter.browserHistory.push(pathname);
};

var REDIRECT_TO_EMBARK = function REDIRECT_TO_EMBARK(_ref2) {
  var embark = _ref2.embark;

  // console.log('REDIRECT_TO_EMBARK', embark) // eslint-disable-line
  var _browserHistory$getCu3 = _reactRouter.browserHistory.getCurrentLocation(),
      PATHNAME = _browserHistory$getCu3.pathname;

  var pathname = '/' + embark;

  if (PATHNAME !== pathname) _reactRouter.browserHistory.push(pathname);
};

var REDIRECT = function REDIRECT(_ref3) {
  var alpha = _ref3[ALPHA_STATE],
      omega = _ref3[OMEGA_STATE],
      debark = _ref3[DEBARK_STATE],
      embark = _ref3[EMBARK_STATE];
  // console.log('REDIRECT()', alpha, omega, debark, embark) // eslint-disable-line
  if (alpha && omega) {
    REDIRECT_ROUTE({ alpha: alpha, omega: omega });
  } else if (debark) {
    REDIRECT_TO_DEBARK({ debark: debark });
  } else if (embark) {
    REDIRECT_TO_EMBARK({ embark: embark });
  }
};

var redirectFromAlpha = function redirectFromAlpha(_ref4) {
  var redirect = _ref4[ALPHA_STATE].redirect;
  // console.log('redirectFromAlpha()', redirect) // eslint-disable-line
  if (redirect) REDIRECT(redirect);
};

var redirectFromDebark = function redirectFromDebark(_ref5) {
  var redirect = _ref5[DEBARK_STATE].redirect;
  // console.log('redirectFromDebark()', redirect) // eslint-disable-line
  if (redirect) REDIRECT(redirect);
};

var redirectFromEmbark = function redirectFromEmbark(_ref6) {
  var redirect = _ref6[EMBARK_STATE].redirect;
  // console.log('redirectFromEmbark()', redirect) // eslint-disable-line
  if (redirect) REDIRECT(redirect);
};

var redirectFromOmega = function redirectFromOmega(_ref7) {
  var redirect = _ref7[OMEGA_STATE].redirect;
  // console.log('redirectFromOmega()', redirect) // eslint-disable-line
  if (redirect) REDIRECT(redirect);
};

var poppet = function poppet(_ref8) {
  var _ref8$action = _ref8.action;
  _ref8$action = _ref8$action === undefined ? ACTION : _ref8$action;
  var type = _ref8$action.type,
      rest = (0, _objectWithoutProperties3.default)(_ref8$action, ['type']),
      _ref8$store = _ref8.store,
      store = _ref8$store === undefined ? STORE : _ref8$store;

  switch (type) {
    case OMEGA.QUERY:
      // console.log('Valve.poppet():OMEGA.QUERY', OMEGA.QUERY, { ...rest, type }) // eslint-disable-line
      {
        var state = store.getState();

        redirectFromOmega(state);
      }
      break;
    case EMBARK.ROUTE:
      // console.log('Valve.poppet():EMBARK.ROUTE', EMBARK.ROUTE, { ...rest, type }) // eslint-disable-line
      {
        var _state = store.getState();

        redirectFromEmbark(_state);
      }
      break;
    case DEBARK.ROUTE:
      // console.log('Valve.poppet():DEBARK.ROUTE', DEBARK.ROUTE, { ...rest, type }) // eslint-disable-line
      {
        var _state2 = store.getState();

        redirectFromDebark(_state2);
      }
      break;
    case ALPHA.QUERY:
      // console.log('Valve.poppet():ALPHA.QUERY', ALPHA.QUERY, { ...rest, type }) // eslint-disable-line
      {
        var _state3 = store.getState();

        redirectFromAlpha(_state3);
      }
      break;
  }

  return (0, _extends3.default)({}, rest, { type: type });
};

var Valves = exports.Valves = function () {
  function Valves() {
    (0, _classCallCheck3.default)(this, Valves);
  }

  (0, _createClass3.default)(Valves, null, [{
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
  return Valves;
}();

Valves.poppet = poppet;