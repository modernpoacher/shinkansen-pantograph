/**
 *  @typedef {PantographTypes.ActionType} ActionType
 *  @typedef {PantographTypes.StateType} StateType
 *  @typedef {PantographTypes.RouteType} RouteType
 *
 *  @typedef {PantographTypes.RedirectToAlphaParams} RedirectToAlphaParams
 *  @typedef {PantographTypes.RedirectToOmegaParams} RedirectToOmegaParams
 *  @typedef {PantographTypes.RedirectToEmbarkParams} RedirectToEmbarkParams
 *  @typedef {PantographTypes.RedirectToDebarkParams} RedirectToDebarkParams
 *  @typedef {PantographTypes.RedirectToConfirmParams} RedirectToConfirmParams
 *  @typedef {PantographTypes.RedirectToParams} RedirectToParams
 *
 *  @typedef {PantographTypes.RedirectFromAlphaParams} RedirectFromAlphaParams
 *  @typedef {PantographTypes.RedirectFromOmegaParams} RedirectFromOmegaParams
 *  @typedef {PantographTypes.RedirectFromEmbarkParams} RedirectFromEmbarkParams
 *  @typedef {PantographTypes.RedirectFromDebarkParams} RedirectFromDebarkParams
 *  @typedef {PantographTypes.RedirectFromConfirmParams} RedirectFromConfirmParams
 *  @typedef {PantographTypes.GraphiteParams} GraphiteParams
 */

import debug from 'debug'

import {
  Signals
} from 'shinkansen-signals'

import {
  Rails
} from 'shinkansen-rails'

import pantograph, {
  ALPHA,
  OMEGA,
  EMBARK,
  DEBARK,
  CONFIRM
} from './pantograph.mjs'

const log = debug('shinkansen-pantograph/pantograph')

log('`shinkansen` is awake')

/**
 *  @type {ActionType}
 */
const ACTION = {}

/**
 *  @type {StateType}
 */
const STATE = {}

/**
 *  @type {RouteType}
 */
const ROUTE = {}

/**
 *  @param {RedirectToAlphaParams} params
 *  @returns {string | undefined | void}
 */
export function getRedirectToAlpha ({ alpha, route }) {
  log('getRedirectToAlpha')

  const pathname = Rails.to({ [Signals.ALPHA]: alpha }, Signals.ALPHA_PATTERN)
  const {
    pathname: currentPathname
  } = route

  if (pathname !== currentPathname) return pathname
}

/**
 *  @param {RedirectToOmegaParams} params
 *  @returns {string | undefined | void}
 */
export function getRedirectToOmega ({ alpha, omega, route }) {
  log('getRedirectToOmega')

  const pathname = Rails.to({ [Signals.ALPHA]: alpha, [Signals.OMEGA]: omega }, Signals.OMEGA_PATTERN)
  const {
    pathname: currentPathname
  } = route

  if (pathname !== currentPathname) return pathname
}

/**
 *  @param {RedirectToEmbarkParams} params
 *  @returns {string | undefined | void}
 */
export function getRedirectToEmbark ({ embark, route }) {
  log('getRedirectToEmbark')

  const pathname = Rails.to({ [Signals.EMBARK]: embark }, Signals.EMBARK_PATTERN)
  const {
    pathname: currentPathname
  } = route

  if (pathname !== currentPathname) return pathname
}

/**
 *  @param {RedirectToDebarkParams} params
 *  @returns {string | undefined | void}
 */
export function getRedirectToDebark ({ debark, route }) {
  log('getRedirectToDebark')

  const pathname = Rails.to({ [Signals.DEBARK]: debark }, Signals.DEBARK_PATTERN)
  const {
    pathname: currentPathname
  } = route

  if (pathname !== currentPathname) return pathname
}

/**
 *  @param {RedirectToConfirmParams} params
 *  @returns {string | undefined | void}
 */
export function getRedirectToConfirm ({ confirm, route }) {
  log('getRedirectToDebark')

  const pathname = Rails.to({ [Signals.CONFIRM]: confirm }, Signals.CONFIRM_PATTERN)
  const {
    pathname: currentPathname
  } = route

  if (pathname !== currentPathname) return pathname
}

/**
 *  @param {RedirectToParams} params
 *  @returns {string | undefined | void}
 */
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
    return getRedirectToConfirm({ confirm, route })
  } else if (alpha) { // can appear on its own
    return getRedirectToAlpha({ alpha, route })
  } else if (omega) { // can not appear on its own
    throw Error('Pantograph encountered a route error in `getRedirectTo()`')
  }
}

/**
 *  @param {RedirectFromAlphaParams} params
 *  @returns {string | undefined | void}
 */
export function getRedirectFromAlpha ({ state: { [Signals.ALPHA]: { redirect } = {} } = {}, route }) {
  log('getRedirectFromAlpha')

  if (redirect) return getRedirectTo({ redirect, route })
}

/**
 *  @param {RedirectFromOmegaParams} params
 *  @returns {string | undefined | void}
 */

export function getRedirectFromOmega ({ state: { [Signals.OMEGA]: { redirect } = {} } = {}, route }) {
  log('getRedirectFromOmega')

  if (redirect) return getRedirectTo({ redirect, route })
}

/**
 *  @param {RedirectFromEmbarkParams} params
 *  @returns {string | undefined | void}
 */
export function getRedirectFromEmbark ({ state: { [Signals.EMBARK]: { redirect } = {} } = {}, route }) {
  log('getRedirectFromEmbark')

  if (redirect) return getRedirectTo({ redirect, route })
}

/**
 *  @param {RedirectFromDebarkParams} params
 *  @returns {string | undefined | void}
 */
export function getRedirectFromDebark ({ state: { [Signals.DEBARK]: { redirect } = {} } = {}, route }) {
  log('getRedirectFromDebark')

  if (redirect) return getRedirectTo({ redirect, route })
}

/**
 *  @param {RedirectFromConfirmParams} params
 *  @returns {string | undefined | void}
 */
export function getRedirectFromConfirm ({ state: { [Signals.CONFIRM]: { redirect } = {} } = {}, route }) {
  log('getRedirectFromConfirm')

  if (redirect) return getRedirectTo({ redirect, route })
}

/**
 *  @param {GraphiteParams} params
 *  @returns {string | undefined | void}
 */
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

export default Object.freeze(pantograph)
