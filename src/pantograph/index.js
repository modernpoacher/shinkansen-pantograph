import {
  Rails
} from 'shinkansen-rails'

import {
  Signals
} from 'shinkansen-signals'

const ALPHA = {
  CHANGE: 'ALPHA_CHANGE',
  FETCH: 'ALPHA_FETCH',
  STORE: 'ALPHA_STORE',
  QUERY: 'ALPHA_QUERY'
}

const OMEGA = {
  CHANGE: 'OMEGA_CHANGE',
  FETCH: 'OMEGA_FETCH',
  STORE: 'OMEGA_STORE',
  QUERY: 'OMEGA_QUERY'
}

const EMBARK = {
  ROUTE: 'EMBARK_ROUTE',
  FETCH: 'EMBARK_FETCH',
  STORE: 'EMBARK_STORE'
}

const DEBARK = {
  ROUTE: 'DEBARK_ROUTE',
  FETCH: 'DEBARK_FETCH',
  STORE: 'DEBARK_STORE'
}

const ACTION = {}
const STORE = {
  getState: () => ({})
}
const HISTORY = {
  push: () => {},
  getCurrentLocation: () => {}
}

function REDIRECT_TO_ALPHA ({ alpha, history }) { // console.log('REDIRECT_TO_ALPHA', alpha) // eslint-disable-line
  const PATHNAME = Rails.to({ [Signals.ALPHA]: alpha }, Signals.ALPHA_PATTERN)
  const {
    pathname
  } = history.getCurrentLocation()

  if (PATHNAME !== pathname) history.push(PATHNAME)
}

function REDIRECT_TO_OMEGA ({ alpha, omega, history }) { // console.log('REDIRECT_TO_OMEGA', alpha, omega) // eslint-disable-line
  const PATHNAME = Rails.to({ [Signals.ALPHA]: alpha, [Signals.OMEGA]: omega }, Signals.OMEGA_PATTERN)
  const {
    pathname
  } = history.getCurrentLocation()

  if (PATHNAME !== pathname) history.push(PATHNAME)
}

function REDIRECT_TO_EMBARK ({ embark, history }) { // console.log('REDIRECT_TO_EMBARK', embark) // eslint-disable-line
  const PATHNAME = Rails.to({ [Signals.EMBARK]: embark }, Signals.EMBARK_PATTERN)
  const {
    pathname
  } = history.getCurrentLocation()

  if (PATHNAME !== pathname) history.push(PATHNAME)
}

function REDIRECT_TO_DEBARK ({ debark, history }) { // console.log('REDIRECT_TO_DEBARK', debark) // eslint-disable-line
  const PATHNAME = Rails.to({ [Signals.DEBARK]: debark }, Signals.DEBARK_PATTERN)
  const {
    pathname
  } = history.getCurrentLocation()

  if (PATHNAME !== pathname) history.push(PATHNAME)
}

function REDIRECT ({ redirect: { [Signals.ALPHA]: alpha, [Signals.OMEGA]: omega, [Signals.EMBARK]: embark, [Signals.DEBARK]: debark, exception } = {}, history }) { // console.log('REDIRECT()', alpha, omega, embark, debark, exception) // eslint-disable-line
  if (alpha && omega) {
    REDIRECT_TO_OMEGA({ alpha, omega, history })
  } else if (embark) {
    REDIRECT_TO_EMBARK({ embark, history })
  } else if (debark) {
    REDIRECT_TO_DEBARK({ debark, history })
  } else if (alpha) { // can appear on its own
    REDIRECT_TO_ALPHA({ alpha, history })
  } else if (omega) { // can not appear on its own
    throw Error('Pantograph encountered a route error in REDIRECT()')
  }
}

function redirectFromAlpha ({ state: { [Signals.ALPHA]: { redirect } = {} }, history }) { // console.log('redirectFromAlpha()', redirect) // eslint-disable-line
  if (redirect) REDIRECT({ redirect, history })
}

function redirectFromOmega ({ state: { [Signals.OMEGA]: { redirect } = {} }, history }) { // console.log('redirectFromOmega()', redirect) // eslint-disable-line
  if (redirect) REDIRECT({ redirect, history })
}

function redirectFromEmbark ({ state: { [Signals.EMBARK]: { redirect } = {} }, history }) { // console.log('redirectFromEmbark()', redirect) // eslint-disable-line
  if (redirect) REDIRECT({ redirect, history })
}

function redirectFromDebark ({ state: { [Signals.DEBARK]: { redirect } = {} }, history }) { // console.log('redirectFromDebark()', redirect) // eslint-disable-line
  if (redirect) REDIRECT({ redirect, history })
}

function graphite ({ action: { type } = ACTION, store = STORE, history = HISTORY }) {
  switch (type) {
    case OMEGA.QUERY: // console.log(`Pantograph.graphite():${OMEGA.QUERY}`, { type }) // eslint-disable-line
      redirectFromOmega({ state: store.getState(), history })
      break
    case EMBARK.ROUTE: // console.log(`Pantograph.graphite():${EMBARK.ROUTE}`, { type }) // eslint-disable-line
      redirectFromEmbark({ state: store.getState(), history })
      break
    case DEBARK.ROUTE: // console.log(`Pantograph.graphite():${DEBARK.ROUTE}`, { type }) // eslint-disable-line
      redirectFromDebark({ state: store.getState(), history })
      break
    case ALPHA.QUERY: // console.log(`Pantograph.graphite():${ALPHA.QUERY}`, { type }) // eslint-disable-line
      redirectFromAlpha({ state: store.getState(), history })
      break
  }
}

export default class Pantograph {
  static get ALPHA () {
    return ALPHA
  }

  static get OMEGA () {
    return OMEGA
  }

  static get EMBARK () {
    return EMBARK
  }

  static get DEBARK () {
    return DEBARK
  }

  static graphite = graphite
}
