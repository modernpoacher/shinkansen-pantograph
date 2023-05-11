import debug from 'debug'

import {
  Rails
} from 'shinkansen-rails'

import {
  Signals
} from 'shinkansen-signals'

const log = debug('shinkansen-pantograph/pantograph')

const ALPHA = {
  ERROR: 'ALPHA_ERROR',
  ROUTE: 'ALPHA_ROUTE',
  MOUNT: 'ALPHA_MOUNT',
  FETCH: 'ALPHA_FETCH',
  STORE: 'ALPHA_STORE',
  QUERY: 'ALPHA_QUERY',
  CHANGE: 'ALPHA_CHANGE',
  SUBMIT: 'ALPHA_SUBMIT'
}

const OMEGA = {
  ERROR: 'OMEGA_ERROR',
  ROUTE: 'OMEGA_ROUTE',
  MOUNT: 'OMEGA_MOUNT',
  FETCH: 'OMEGA_FETCH',
  STORE: 'OMEGA_STORE',
  QUERY: 'OMEGA_QUERY',
  CHANGE: 'OMEGA_CHANGE',
  SUBMIT: 'OMEGA_SUBMIT'
}

const EMBARK = {
  ERROR: 'EMBARK_ERROR',
  ROUTE: 'EMBARK_ROUTE',
  MOUNT: 'EMBARK_MOUNT',
  FETCH: 'EMBARK_FETCH',
  STORE: 'EMBARK_STORE',
  CHANGE: 'EMBARK_CHANGE',
  SUBMIT: 'EMBARK_SUBMIT'
}

const DEBARK = {
  ERROR: 'DEBARK_ERROR',
  ROUTE: 'DEBARK_ROUTE',
  MOUNT: 'DEBARK_MOUNT',
  FETCH: 'DEBARK_FETCH',
  STORE: 'DEBARK_STORE',
  CHANGE: 'DEBARK_CHANGE',
  SUBMIT: 'DEBARK_SUBMIT'
}

const CONFIRM = {
  ERROR: 'CONFIRM_ERROR',
  ROUTE: 'CONFIRM_ROUTE',
  MOUNT: 'CONFIRM_MOUNT',
  FETCH: 'CONFIRM_FETCH',
  STORE: 'CONFIRM_STORE',
  CHANGE: 'CONFIRM_CHANGE',
  SUBMIT: 'CONFIRM_SUBMIT'
}

const ACTION = {}

const STATE = {}

const ROUTE = {}

log('`shinkansen` is awake')

export function getRedirectToAlpha ({ alpha, route }) {
  log('getRedirectToAlpha')

  const pathname = Rails.to({ [Signals.ALPHA]: alpha }, Signals.ALPHA_PATTERN)
  const {
    pathname: currentPathname
  } = route

  if (pathname !== currentPathname) return pathname
}

export function getRedirectToOmega ({ alpha, omega, route }) {
  log('getRedirectToOmega')

  const pathname = Rails.to({ [Signals.ALPHA]: alpha, [Signals.OMEGA]: omega }, Signals.OMEGA_PATTERN)
  const {
    pathname: currentPathname
  } = route

  if (pathname !== currentPathname) return pathname
}

export function getRedirectToEmbark ({ embark, route }) {
  log('getRedirectToEmbark')

  const pathname = Rails.to({ [Signals.EMBARK]: embark }, Signals.EMBARK_PATTERN)
  const {
    pathname: currentPathname
  } = route

  if (pathname !== currentPathname) return pathname
}

export function getRedirectToDebark ({ debark, route }) {
  log('getRedirectToDebark')

  const pathname = Rails.to({ [Signals.DEBARK]: debark }, Signals.DEBARK_PATTERN)
  const {
    pathname: currentPathname
  } = route

  if (pathname !== currentPathname) return pathname
}

export function getRedirectToConfirm ({ confirm, route }) {
  log('getRedirectToDebark')

  const pathname = Rails.to({ [Signals.CONFIRM]: confirm }, Signals.CONFIRM_PATTERN)
  const {
    pathname: currentPathname
  } = route

  if (pathname !== currentPathname) return pathname
}

export function getRedirectTo ({
  redirect: {
    [Signals.ALPHA]: alpha,
    [Signals.OMEGA]: omega,
    [Signals.EMBARK]: embark,
    [Signals.DEBARK]: debark,
    [Signals.CONFIRM]: confirm
  } = {},
  route
}) {
  log('getRedirectTo')

  if (alpha && omega) {
    return getRedirectToOmega({ alpha, omega, route })
  } else if (embark) {
    return getRedirectToEmbark({ embark, route })
  } else if (debark) {
    return getRedirectToDebark({ debark, route })
  } else if (confirm) {
    return getRedirectToDebark({ confirm, route })
  } else if (alpha) { // can appear on its own
    return getRedirectToAlpha({ alpha, route })
  } else if (omega) { // can not appear on its own
    throw Error('Pantograph encountered a route error in `getRedirectTo()`')
  }
}

export function getRedirectFromAlpha ({ state: { [Signals.ALPHA]: { redirect } = {} } = {}, route }) {
  log('getRedirectFromAlpha')

  if (redirect) return getRedirectTo({ redirect, route })
}

export function getRedirectFromOmega ({ state: { [Signals.OMEGA]: { redirect } = {} } = {}, route }) {
  log('getRedirectFromOmega')

  if (redirect) return getRedirectTo({ redirect, route })
}

export function getRedirectFromEmbark ({ state: { [Signals.EMBARK]: { redirect } = {} } = {}, route }) {
  log('getRedirectFromEmbark')

  if (redirect) return getRedirectTo({ redirect, route })
}

export function getRedirectFromDebark ({ state: { [Signals.DEBARK]: { redirect } = {} } = {}, route }) {
  log('getRedirectFromDebark')

  if (redirect) return getRedirectTo({ redirect, route })
}

export function getRedirectFromConfirm ({ state: { [Signals.CONFIRM]: { redirect } = {} } = {}, route }) {
  log('getRedirectFromConfirm')

  if (redirect) return getRedirectTo({ redirect, route })
}

export function graphite ({ action: { type } = ACTION, state = STATE, route = ROUTE }) {
  switch (type) {
    case OMEGA.ROUTE:
      return getRedirectFromOmega({ state, route })
    case EMBARK.ROUTE:
      return getRedirectFromEmbark({ state, route })
    case DEBARK.ROUTE:
      return getRedirectFromDebark({ state, route })
    case CONFIRM.ROUTE:
      return getRedirectFromDebark({ state, route })
    case ALPHA.ROUTE:
      return getRedirectFromAlpha({ state, route })
  }
}

/**
 *  Getters without setters ensure that these fields are read-only
 */
class Pantograph {
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

  static get CONFIRM () {
    return CONFIRM
  }

  static graphite = graphite
}

/**
 *  As does `freeze`
 */
export default Object.freeze(Pantograph)
