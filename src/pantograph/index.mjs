import debug from 'debug'

import {
  Rails
} from 'shinkansen-rails'

import {
  Signals
} from 'shinkansen-signals'

const log = debug('shinkansen-pantograph')

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

const HISTORY = {
  push () {},
  getCurrentLocation () {
    return {}
  }
}

export function redirectToAlpha ({ alpha, history }) {
  log('redirectToAlpha')

  const pathname = Rails.to({ [Signals.ALPHA]: alpha }, Signals.ALPHA_PATTERN)
  const {
    pathname: currentPathname
  } = history.getCurrentLocation()

  if (pathname !== currentPathname) history.push(pathname)
}

export function redirectToOmega ({ alpha, omega, history }) {
  log('redirectToOmega')

  const pathname = Rails.to({ [Signals.ALPHA]: alpha, [Signals.OMEGA]: omega }, Signals.OMEGA_PATTERN)
  const {
    pathname: currentPathname
  } = history.getCurrentLocation()

  if (pathname !== currentPathname) history.push(pathname)
}

export function redirectToEmbark ({ embark, history }) {
  log('redirectToEmbark')

  const pathname = Rails.to({ [Signals.EMBARK]: embark }, Signals.EMBARK_PATTERN)
  const {
    pathname: currentPathname
  } = history.getCurrentLocation()

  if (pathname !== currentPathname) history.push(pathname)
}

export function redirectToDebark ({ debark, history }) {
  log('redirectToDebark')

  const pathname = Rails.to({ [Signals.DEBARK]: debark }, Signals.DEBARK_PATTERN)
  const {
    pathname: currentPathname
  } = history.getCurrentLocation()

  if (pathname !== currentPathname) history.push(pathname)
}

export function redirectToConfirm ({ confirm, history }) {
  log('redirectToDebark')

  const pathname = Rails.to({ [Signals.CONFIRM]: confirm }, Signals.CONFIRM_PATTERN)
  const {
    pathname: currentPathname
  } = history.getCurrentLocation()

  if (pathname !== currentPathname) history.push(pathname)
}

export function redirectTo ({
  redirect: {
    [Signals.ALPHA]: alpha,
    [Signals.OMEGA]: omega,
    [Signals.EMBARK]: embark,
    [Signals.DEBARK]: debark,
    [Signals.CONFIRM]: confirm
  } = {},
  history
}) {
  log('`redirectTo`')

  if (alpha && omega) {
    redirectToOmega({ alpha, omega, history })
  } else if (embark) {
    redirectToEmbark({ embark, history })
  } else if (debark) {
    redirectToDebark({ debark, history })
  } else if (confirm) {
    redirectToDebark({ confirm, history })
  } else if (alpha) { // can appear on its own
    redirectToAlpha({ alpha, history })
  } else if (omega) { // can not appear on its own
    throw Error('Pantograph encountered a route error in `redirectTo()`')
  }
}

export function redirectFromAlpha ({ state: { [Signals.ALPHA]: { redirect } = {} } = {}, history }) {
  log('redirectFromAlpha()')

  if (redirect) redirectTo({ redirect, history })
}

export function redirectFromOmega ({ state: { [Signals.OMEGA]: { redirect } = {} } = {}, history }) {
  log('redirectFromOmega()')

  if (redirect) redirectTo({ redirect, history })
}

export function redirectFromEmbark ({ state: { [Signals.EMBARK]: { redirect } = {} } = {}, history }) {
  log('redirectFromEmbark()')

  if (redirect) redirectTo({ redirect, history })
}

export function redirectFromDebark ({ state: { [Signals.DEBARK]: { redirect } = {} } = {}, history }) {
  log('redirectFromDebark()')

  if (redirect) redirectTo({ redirect, history })
}

export function redirectFromConfirm ({ state: { [Signals.CONFIRM]: { redirect } = {} } = {}, history }) {
  log('redirectFromConfirm()')

  if (redirect) redirectTo({ redirect, history })
}

export function graphite ({ action: { type } = ACTION, state = STATE, history = HISTORY }) {
  switch (type) {
    case OMEGA.ROUTE:
      redirectFromOmega({ state, history })
      break
    case EMBARK.ROUTE:
      redirectFromEmbark({ state, history })
      break
    case DEBARK.ROUTE:
      redirectFromDebark({ state, history })
      break
    case CONFIRM.ROUTE:
      redirectFromDebark({ state, history })
      break
    case ALPHA.ROUTE:
      redirectFromAlpha({ state, history })
      break
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
