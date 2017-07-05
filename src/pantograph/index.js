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

function REDIRECT_TO_ALPHA ({ history, alpha }) { // console.log('REDIRECT_TO_ALPHA', route) // eslint-disable-line
  const {
    pathname: PATHNAME
  } = history.getCurrentLocation()

  const pathname = Rails.path({ [Signals.ALPHA]: alpha }, Signals.ALPHA_PATTERN)

  if (PATHNAME !== pathname) history.push(pathname)
}

function REDIRECT_TO_OMEGA ({ history, alpha, omega }) { // console.log('REDIRECT_TO_OMEGA', route) // eslint-disable-line
  const {
    pathname: PATHNAME
  } = history.getCurrentLocation()

  const pathname = Rails.path({ [Signals.ALPHA]: alpha, [Signals.OMEGA]: omega }, Signals.OMEGA_PATTERN)

  if (PATHNAME !== pathname) history.push(pathname)
}

function REDIRECT_TO_EMBARK ({ history, embark }) { // console.log('REDIRECT_TO_EMBARK', embark) // eslint-disable-line
  const {
    pathname: PATHNAME
  } = history.getCurrentLocation()

  const pathname = Rails.path({ [Signals.EMBARK]: embark }, Signals.EMBARK_PATTERN)

  if (PATHNAME !== pathname) history.push(pathname)
}

function REDIRECT_TO_DEBARK ({ history, debark }) { // console.log('REDIRECT_TO_DEBARK', debark) // eslint-disable-line
  const {
    pathname: PATHNAME
  } = history.getCurrentLocation()

  const pathname = Rails.path({ [Signals.DEBARK]: debark }, Signals.DEBARK_PATTERN)

  if (PATHNAME !== pathname) history.push(pathname)
}

function REDIRECT ({ [Signals.ALPHA]: alpha, [Signals.OMEGA]: omega, [Signals.EMBARK]: embark, [Signals.DEBARK]: debark, exception, history }) { // console.log('REDIRECT()', alpha, omega, embark, debark, exception) // eslint-disable-line
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

function redirectFromAlpha ({ [Signals.ALPHA]: { redirect } = {}, history }) { // console.log('redirectFromAlpha()', redirect) // eslint-disable-line
  if (redirect) REDIRECT({ ...redirect, history })
}

function redirectFromOmega ({ [Signals.OMEGA]: { redirect } = {}, history }) { // console.log('redirectFromOmega()', redirect) // eslint-disable-line
  if (redirect) REDIRECT({ ...redirect, history })
}

function redirectFromEmbark ({ [Signals.EMBARK]: { redirect } = {}, history }) { // console.log('redirectFromEmbark()', redirect) // eslint-disable-line
  if (redirect) REDIRECT({ ...redirect, history })
}

function redirectFromDebark ({ [Signals.DEBARK]: { redirect } = {}, history }) { // console.log('redirectFromDebark()', redirect) // eslint-disable-line
  if (redirect) REDIRECT({ ...redirect, history })
}

function graphite ({ action: { type, ...action } = ACTION, store = STORE, history = HISTORY }) {
  switch (type) {
    case 'OMEGA_QUERY': // console.log('Pantograph.graphite():OMEGA_QUERY', { ...action, type }) // eslint-disable-line
      {
        const state = store.getState()

        redirectFromOmega({ ...state, history })
      }
      break
    case 'EMBARK_ROUTE': // console.log('Pantograph.graphite():EMBARK_ROUTE', { ...action, type }) // eslint-disable-line
      {
        const state = store.getState()

        redirectFromEmbark({ ...state, history })
      }
      break
    case 'DEBARK_ROUTE': // console.log('Pantograph.graphite():DEBARK_ROUTE', { ...action, type }) // eslint-disable-line
      {
        const state = store.getState()

        redirectFromDebark({ ...state, history })
      }
      break
    case 'ALPHA_QUERY': // console.log('Pantograph.graphite():ALPHA_QUERY', { ...action, type }) // eslint-disable-line
      {
        const state = store.getState()

        redirectFromAlpha({ ...state, history })
      }
      break
  }

  return { ...action, type }
}

export class Pantograph {
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
