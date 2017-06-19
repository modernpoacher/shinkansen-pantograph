'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Valves = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _reactSteam = require('react-steam');

var _reactGears = require('react-gears');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALPHA_STATE = _reactSteam.Steam.ALPHA,
    DEBARK_STATE = _reactSteam.Steam.DEBARK,
    EMBARK_STATE = _reactSteam.Steam.EMBARK,
    OMEGA_STATE = _reactSteam.Steam.OMEGA;


var ALPHA = {
  CHANGE: 'ALPHA_CHANGE',
  FETCH: 'ALPHA_FETCH',
  STORE: 'ALPHA_STORE',
  QUERY: 'ALPHA_QUERY'
};

var DEBARK = {
  ROUTE: 'DEBARK_ROUTE',
  FETCH: 'DEBARK_FETCH',
  STORE: 'DEBARK_STORE'
};

var EMBARK = {
  ROUTE: 'EMBARK_ROUTE',
  FETCH: 'EMBARK_FETCH',
  STORE: 'EMBARK_STORE'
};

var OMEGA = {
  CHANGE: 'OMEGA_CHANGE',
  FETCH: 'OMEGA_FETCH',
  STORE: 'OMEGA_STORE',
  QUERY: 'OMEGA_QUERY'
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

function REDIRECT_ROUTE(_ref) {
  var history = _ref.history,
      route = _ref.route;

  // console.log('REDIRECT_ROUTE', route) // eslint-disable-line
  var _history$getCurrentLo = history.getCurrentLocation(),
      PATHNAME = _history$getCurrentLo.pathname;

  var pathname = _reactGears.Gears.path(route);

  if (PATHNAME !== pathname) history.push(pathname);
}

function REDIRECT_TO_DEBARK(_ref2) {
  var history = _ref2.history,
      debark = _ref2.debark;

  // console.log('REDIRECT_TO_DEBARK', debark) // eslint-disable-line
  var _history$getCurrentLo2 = history.getCurrentLocation(),
      PATHNAME = _history$getCurrentLo2.pathname;

  var pathname = '/' + debark;

  if (PATHNAME !== pathname) history.push(pathname);
}

function REDIRECT_TO_EMBARK(_ref3) {
  var history = _ref3.history,
      embark = _ref3.embark;

  // console.log('REDIRECT_TO_EMBARK', embark) // eslint-disable-line
  var _history$getCurrentLo3 = history.getCurrentLocation(),
      PATHNAME = _history$getCurrentLo3.pathname;

  var pathname = '/' + embark;

  if (PATHNAME !== pathname) history.push(pathname);
}

function REDIRECT(_ref4) {
  var alpha = _ref4[ALPHA_STATE],
      omega = _ref4[OMEGA_STATE],
      debark = _ref4[DEBARK_STATE],
      embark = _ref4[EMBARK_STATE],
      history = _ref4.history;
  // console.log('REDIRECT()', alpha, omega, debark, embark) // eslint-disable-line
  if (alpha && omega) {
    REDIRECT_ROUTE({ route: { alpha: alpha, omega: omega }, history: history });
  } else if (debark) {
    REDIRECT_TO_DEBARK({ debark: debark, history: history });
  } else if (embark) {
    REDIRECT_TO_EMBARK({ embark: embark, history: history });
  }
}

function redirectFromAlpha(_ref5) {
  var redirect = _ref5[ALPHA_STATE].redirect,
      history = _ref5.history;
  // console.log('redirectFromAlpha()', redirect) // eslint-disable-line
  if (redirect) REDIRECT((0, _extends3.default)({}, redirect, { history: history }));
}

function redirectFromDebark(_ref6) {
  var redirect = _ref6[DEBARK_STATE].redirect,
      history = _ref6.history;
  // console.log('redirectFromDebark()', redirect) // eslint-disable-line
  if (redirect) REDIRECT((0, _extends3.default)({}, redirect, { history: history }));
}

function redirectFromEmbark(_ref7) {
  var redirect = _ref7[EMBARK_STATE].redirect,
      history = _ref7.history;
  // console.log('redirectFromEmbark()', redirect) // eslint-disable-line
  if (redirect) REDIRECT((0, _extends3.default)({}, redirect, { history: history }));
}

function redirectFromOmega(_ref8) {
  var redirect = _ref8[OMEGA_STATE].redirect,
      history = _ref8.history;
  // console.log('redirectFromOmega()', redirect) // eslint-disable-line
  if (redirect) REDIRECT((0, _extends3.default)({}, redirect, { history: history }));
}

function poppet(_ref9) {
  var _ref9$action = _ref9.action;
  _ref9$action = _ref9$action === undefined ? ACTION : _ref9$action;
  var type = _ref9$action.type,
      rest = (0, _objectWithoutProperties3.default)(_ref9$action, ['type']),
      _ref9$store = _ref9.store,
      store = _ref9$store === undefined ? STORE : _ref9$store,
      _ref9$history = _ref9.history,
      history = _ref9$history === undefined ? HISTORY : _ref9$history;

  switch (type) {
    case OMEGA.QUERY:
      // console.log('Valves.poppet():OMEGA.QUERY', OMEGA.QUERY, { ...rest, type }) // eslint-disable-line
      {
        var state = store.getState();

        redirectFromOmega((0, _extends3.default)({}, state, { history: history }));
      }
      break;
    case EMBARK.ROUTE:
      // console.log('Valves.poppet():EMBARK.ROUTE', EMBARK.ROUTE, { ...rest, type }) // eslint-disable-line
      {
        var _state = store.getState();

        redirectFromEmbark((0, _extends3.default)({}, _state, { history: history }));
      }
      break;
    case DEBARK.ROUTE:
      // console.log('Valves.poppet():DEBARK.ROUTE', DEBARK.ROUTE, { ...rest, type }) // eslint-disable-line
      {
        var _state2 = store.getState();

        redirectFromDebark((0, _extends3.default)({}, _state2, { history: history }));
      }
      break;
    case ALPHA.QUERY:
      // console.log('Valves.poppet():ALPHA.QUERY', ALPHA.QUERY, { ...rest, type }) // eslint-disable-line
      {
        var _state3 = store.getState();

        redirectFromAlpha((0, _extends3.default)({}, _state3, { history: history }));
      }
      break;
  }

  return (0, _extends3.default)({}, rest, { type: type });
}

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