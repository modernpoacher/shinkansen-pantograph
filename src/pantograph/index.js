import {
  Rails
} from 'shinkansen-rails'

import {
  Signals
} from 'shinkansen-signals'

const ALPHA = {
  ERROR: 'ALPHA_ERROR',
  ROUTE: 'ALPHA_ROUTE',
  CHANGE: 'ALPHA_CHANGE',
  SUBMIT: 'ALPHA_SUBMIT',
  FETCH: 'ALPHA_FETCH',
  STORE: 'ALPHA_STORE',
  QUERY: 'ALPHA_QUERY'
}

const OMEGA = {
  ERROR: 'OMEGA_ERROR',
  ROUTE: 'OMEGA_ROUTE',
  CHANGE: 'OMEGA_CHANGE',
  SUBMIT: 'OMEGA_SUBMIT',
  FETCH: 'OMEGA_FETCH',
  STORE: 'OMEGA_STORE',
  QUERY: 'OMEGA_QUERY'
}

const EMBARK = {
  ERROR: 'EMBARK_ERROR',
  ROUTE: 'EMBARK_ROUTE',
  SUBMIT: 'EMBARK_SUBMIT',
  FETCH: 'EMBARK_FETCH',
  STORE: 'EMBARK_STORE'
}

const DEBARK = {
  ERROR: 'DEBARK_ERROR',
  ROUTE: 'DEBARK_ROUTE',
  SUBMIT: 'DEBARK_SUBMIT',
  FETCH: 'DEBARK_FETCH',
  STORE: 'DEBARK_STORE'
}

const ACTION = {}

const STATE = {}

const HISTORY = {
  push: () => {},
  getCurrentLocation: () => ({})
}

function redirectToAlpha ({ alpha, history }) { // console.log('redirectToAlpha', alpha)
  const pathname = Rails.to({ [Signals.ALPHA]: alpha }, Signals.ALPHA_PATTERN)
  const {
    pathname: currentPathname
  } = history.getCurrentLocation()

  if (pathname !== currentPathname) history.push(pathname)
}

function redirectToOmega ({ alpha, omega, history }) { // console.log('redirectToOmega', alpha, omega)
  const pathname = Rails.to({ [Signals.ALPHA]: alpha, [Signals.OMEGA]: omega }, Signals.OMEGA_PATTERN)
  const {
    pathname: currentPathname
  } = history.getCurrentLocation()

  if (pathname !== currentPathname) history.push(pathname)
}

function redirectToEmbark ({ embark, history }) { // console.log('redirectToEmbark', embark)
  const pathname = Rails.to({ [Signals.EMBARK]: embark }, Signals.EMBARK_PATTERN)
  const {
    pathname: currentPathname
  } = history.getCurrentLocation()

  if (pathname !== currentPathname) history.push(pathname)
}

function redirectToDebark ({ debark, history }) { // console.log('redirectToDebark', debark)
  const pathname = Rails.to({ [Signals.DEBARK]: debark }, Signals.DEBARK_PATTERN)
  const {
    pathname: currentPathname
  } = history.getCurrentLocation()

  if (pathname !== currentPathname) history.push(pathname)
}

function redirect ({
  redirect: {
    [Signals.ALPHA]: alpha,
    [Signals.OMEGA]: omega,
    [Signals.EMBARK]: embark,
    [Signals.DEBARK]: debark
  } = {},
  history
}) { // console.log('redirect()', alpha, omega, embark, debark)
  if (alpha && omega) {
    redirectToOmega({ alpha, omega, history })
  } else if (embark) {
    redirectToEmbark({ embark, history })
  } else if (debark) {
    redirectToDebark({ debark, history })
  } else if (alpha) { // can appear on its own
    redirectToAlpha({ alpha, history })
  } else if (omega) { // can not appear on its own
    throw Error('Pantograph encountered a route error in `redirect()`')
  }
}

function redirectFromAlpha ({ state: { [Signals.ALPHA]: { redirect: route } = {} } = {}, history }) { // console.log('redirectFromAlpha()', route)
  if (route) redirect({ redirect: route, history })
}

function redirectFromOmega ({ state: { [Signals.OMEGA]: { redirect: route } = {} } = {}, history }) { // console.log('redirectFromOmega()', route)
  if (route) redirect({ redirect: route, history })
}

function redirectFromEmbark ({ state: { [Signals.EMBARK]: { redirect: route } = {} } = {}, history }) { // console.log('redirectFromEmbark()', route)
  if (route) redirect({ redirect: route, history })
}

function redirectFromDebark ({ state: { [Signals.DEBARK]: { redirect: route } = {} } = {}, history }) { // console.log('redirectFromDebark()', route)
  if (route) redirect({ redirect: route, history })
}

function graphite ({ action: { type } = ACTION, state = STATE, history = HISTORY }) {
  switch (type) {
    case OMEGA.ROUTE: // console.log(`Pantograph.graphite():${OMEGA.ROUTE}`, { type })
      redirectFromOmega({ state, history })
      break
    case EMBARK.ROUTE: // console.log(`Pantograph.graphite():${EMBARK.ROUTE}`, { type })
      redirectFromEmbark({ state, history })
      break
    case DEBARK.ROUTE: // console.log(`Pantograph.graphite():${DEBARK.ROUTE}`, { type })
      redirectFromDebark({ state, history })
      break
    case ALPHA.ROUTE: // console.log(`Pantograph.graphite():${ALPHA.ROUTE}`, { type })
      redirectFromAlpha({ state, history })
      break
  }
}

export default class Pantograph {
  /**
   *  Getters ensure that these fields are read-only
   */
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
