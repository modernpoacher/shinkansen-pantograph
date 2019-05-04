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
  getCurrentLocation: () => ({})
}

function redirectToAlpha ({ alpha, history }) { // console.log('redirectToAlpha', alpha) // eslint-disable-line
  const pathname = Rails.to({ [Signals.ALPHA]: alpha }, Signals.ALPHA_PATTERN)
  const {
    pathname: currentPathname
  } = history.getCurrentLocation()

  if (pathname !== currentPathname) history.push(pathname)
}

function redirectToOmega ({ alpha, omega, history }) { // console.log('redirectToOmega', alpha, omega) // eslint-disable-line
  const pathname = Rails.to({ [Signals.ALPHA]: alpha, [Signals.OMEGA]: omega }, Signals.OMEGA_PATTERN)
  const {
    pathname: currentPathname
  } = history.getCurrentLocation()

  if (pathname !== currentPathname) history.push(pathname)
}

function redirectToEmbark ({ embark, history }) { // console.log('redirectToEmbark', embark) // eslint-disable-line
  const pathname = Rails.to({ [Signals.EMBARK]: embark }, Signals.EMBARK_PATTERN)
  const {
    pathname: currentPathname
  } = history.getCurrentLocation()

  if (pathname !== currentPathname) history.push(pathname)
}

function redirectToDebark ({ debark, history }) { // console.log('redirectToDebark', debark) // eslint-disable-line
  const pathname = Rails.to({ [Signals.DEBARK]: debark }, Signals.DEBARK_PATTERN)
  const {
    pathname: currentPathname
  } = history.getCurrentLocation()

  if (pathname !== currentPathname) history.push(pathname)
}

function redirect ({ redirect: { [Signals.ALPHA]: alpha, [Signals.OMEGA]: omega, [Signals.EMBARK]: embark, [Signals.DEBARK]: debark, exception } = {}, history }) { // console.log('redirect()', alpha, omega, embark, debark, exception) // eslint-disable-line
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

function redirectFromAlpha ({ state: { [Signals.ALPHA]: { redirect: route } = {} }, history }) { // console.log('redirectFromAlpha()', route) // eslint-disable-line
  if (route) redirect({ redirect: route, history })
}

function redirectFromOmega ({ state: { [Signals.OMEGA]: { redirect: route } = {} }, history }) { // console.log('redirectFromOmega()', route) // eslint-disable-line
  if (route) redirect({ redirect: route, history })
}

function redirectFromEmbark ({ state: { [Signals.EMBARK]: { redirect: route } = {} }, history }) { // console.log('redirectFromEmbark()', route) // eslint-disable-line
  if (route) redirect({ redirect: route, history })
}

function redirectFromDebark ({ state: { [Signals.DEBARK]: { redirect: route } = {} }, history }) { // console.log('redirectFromDebark()', route) // eslint-disable-line
  if (route) redirect({ redirect: route, history })
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
