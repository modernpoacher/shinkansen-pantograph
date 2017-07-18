'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pantograph = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _shinkansenRails = require('shinkansen-rails');

var _shinkansenSignals = require('shinkansen-signals');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var OMEGA_QUERY = OMEGA.QUERY + '_FULFILLED';
var EMBARK_ROUTE = EMBARK.ROUTE + '_FULFILLED';
var DEBARK_ROUTE = DEBARK.ROUTE + '_FULFILLED';
var ALPHA_QUERY = ALPHA.QUERY + '_FULFILLED';

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

  // console.log('REDIRECT_TO_ALPHA', alpha) // eslint-disable-line
  var _history$getCurrentLo = history.getCurrentLocation(),
      PATHNAME = _history$getCurrentLo.pathname;

  var pathname = _shinkansenRails.Rails.path(_defineProperty({}, _shinkansenSignals.Signals.ALPHA, alpha), _shinkansenSignals.Signals.ALPHA_PATTERN);

  if (PATHNAME !== pathname) history.push(pathname);
}

function REDIRECT_TO_OMEGA(_ref2) {
  var _Rails$path2;

  var history = _ref2.history,
      alpha = _ref2.alpha,
      omega = _ref2.omega;

  // console.log('REDIRECT_TO_OMEGA', alpha, omega) // eslint-disable-line
  var _history$getCurrentLo2 = history.getCurrentLocation(),
      PATHNAME = _history$getCurrentLo2.pathname;

  var pathname = _shinkansenRails.Rails.path((_Rails$path2 = {}, _defineProperty(_Rails$path2, _shinkansenSignals.Signals.ALPHA, alpha), _defineProperty(_Rails$path2, _shinkansenSignals.Signals.OMEGA, omega), _Rails$path2), _shinkansenSignals.Signals.OMEGA_PATTERN);

  if (PATHNAME !== pathname) history.push(pathname);
}

function REDIRECT_TO_EMBARK(_ref3) {
  var history = _ref3.history,
      embark = _ref3.embark;

  // console.log('REDIRECT_TO_EMBARK', embark) // eslint-disable-line
  var _history$getCurrentLo3 = history.getCurrentLocation(),
      PATHNAME = _history$getCurrentLo3.pathname;

  var pathname = _shinkansenRails.Rails.path(_defineProperty({}, _shinkansenSignals.Signals.EMBARK, embark), _shinkansenSignals.Signals.EMBARK_PATTERN);

  if (PATHNAME !== pathname) history.push(pathname);
}

function REDIRECT_TO_DEBARK(_ref4) {
  var history = _ref4.history,
      debark = _ref4.debark;

  // console.log('REDIRECT_TO_DEBARK', debark) // eslint-disable-line
  var _history$getCurrentLo4 = history.getCurrentLocation(),
      PATHNAME = _history$getCurrentLo4.pathname;

  var pathname = _shinkansenRails.Rails.path(_defineProperty({}, _shinkansenSignals.Signals.DEBARK, debark), _shinkansenSignals.Signals.DEBARK_PATTERN);

  if (PATHNAME !== pathname) history.push(pathname);
}

function REDIRECT(_ref5) {
  var alpha = _ref5[_shinkansenSignals.Signals.ALPHA],
      omega = _ref5[_shinkansenSignals.Signals.OMEGA],
      embark = _ref5[_shinkansenSignals.Signals.EMBARK],
      debark = _ref5[_shinkansenSignals.Signals.DEBARK],
      exception = _ref5.exception,
      history = _ref5.history;
  // console.log('REDIRECT()', alpha, omega, embark, debark, exception) // eslint-disable-line
  if (alpha && omega) {
    REDIRECT_TO_OMEGA({ alpha: alpha, omega: omega, history: history });
  } else if (embark) {
    REDIRECT_TO_EMBARK({ embark: embark, history: history });
  } else if (debark) {
    REDIRECT_TO_DEBARK({ debark: debark, history: history });
  } else if (alpha) {
    // can appear on its own
    REDIRECT_TO_ALPHA({ alpha: alpha, history: history });
  } else if (omega) {
    // can not appear on its own
    throw Error('Pantograph encountered a route error in REDIRECT()');
  }
}

function redirectFromAlpha(_ref6) {
  var _ref6$Signals$ALPHA = _ref6[_shinkansenSignals.Signals.ALPHA];
  _ref6$Signals$ALPHA = _ref6$Signals$ALPHA === undefined ? {} : _ref6$Signals$ALPHA;
  var redirect = _ref6$Signals$ALPHA.redirect,
      history = _ref6.history;
  // console.log('redirectFromAlpha()', redirect) // eslint-disable-line
  if (redirect) REDIRECT(_extends({}, redirect, { history: history }));
}

function redirectFromOmega(_ref7) {
  var _ref7$Signals$OMEGA = _ref7[_shinkansenSignals.Signals.OMEGA];
  _ref7$Signals$OMEGA = _ref7$Signals$OMEGA === undefined ? {} : _ref7$Signals$OMEGA;
  var redirect = _ref7$Signals$OMEGA.redirect,
      history = _ref7.history;
  // console.log('redirectFromOmega()', redirect) // eslint-disable-line
  if (redirect) REDIRECT(_extends({}, redirect, { history: history }));
}

function redirectFromEmbark(_ref8) {
  var _ref8$Signals$EMBARK = _ref8[_shinkansenSignals.Signals.EMBARK];
  _ref8$Signals$EMBARK = _ref8$Signals$EMBARK === undefined ? {} : _ref8$Signals$EMBARK;
  var redirect = _ref8$Signals$EMBARK.redirect,
      history = _ref8.history;
  // console.log('redirectFromEmbark()', redirect) // eslint-disable-line
  if (redirect) REDIRECT(_extends({}, redirect, { history: history }));
}

function redirectFromDebark(_ref9) {
  var _ref9$Signals$DEBARK = _ref9[_shinkansenSignals.Signals.DEBARK];
  _ref9$Signals$DEBARK = _ref9$Signals$DEBARK === undefined ? {} : _ref9$Signals$DEBARK;
  var redirect = _ref9$Signals$DEBARK.redirect,
      history = _ref9.history;
  // console.log('redirectFromDebark()', redirect) // eslint-disable-line
  if (redirect) REDIRECT(_extends({}, redirect, { history: history }));
}

function graphite(_ref10) {
  var _ref10$action = _ref10.action;
  _ref10$action = _ref10$action === undefined ? ACTION : _ref10$action;
  var type = _ref10$action.type,
      _ref10$action$payload = _ref10$action.payload;
  _ref10$action$payload = _ref10$action$payload === undefined ? {} : _ref10$action$payload;

  var data = _ref10$action$payload.data,
      payload = _objectWithoutProperties(_ref10$action$payload, ['data']),
      action = _objectWithoutProperties(_ref10$action, ['type', 'payload']),
      _ref10$store = _ref10.store,
      store = _ref10$store === undefined ? STORE : _ref10$store,
      _ref10$history = _ref10.history,
      history = _ref10$history === undefined ? HISTORY : _ref10$history;

  switch (type) {
    case OMEGA_QUERY:
      // console.log(`Pantograph.graphite():${OMEGA_QUERY}`, { ...data, type }) // eslint-disable-line
      {
        var state = store.getState();

        redirectFromOmega(_extends({}, state, { history: history }));
      }
      break;
    case EMBARK_ROUTE:
      // console.log(`Pantograph.graphite():${EMBARK_ROUTE}`, { ...data, type }) // eslint-disable-line
      {
        var _state = store.getState();

        redirectFromEmbark(_extends({}, _state, { history: history }));
      }
      break;
    case DEBARK_ROUTE:
      // console.log(`Pantograph.graphite():${DEBARK_ROUTE}`, { ...data, type }) // eslint-disable-line
      {
        var _state2 = store.getState();

        redirectFromDebark(_extends({}, _state2, { history: history }));
      }
      break;
    case ALPHA_QUERY:
      // console.log(`Pantograph.graphite():${ALPHA_QUERY}`, { ...data, type }) // eslint-disable-line
      {
        var _state3 = store.getState();

        redirectFromAlpha(_extends({}, _state3, { history: history }));
      }
      break;
  }

  return _extends({}, action, { payload: _extends({}, payload, { data: data }), type: type });
}

var Pantograph = exports.Pantograph = function () {
  function Pantograph() {
    _classCallCheck(this, Pantograph);
  }

  _createClass(Pantograph, null, [{
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