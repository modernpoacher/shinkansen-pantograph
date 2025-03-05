/**
 *  @typedef {PantographTypes.Pantograph.AlphaType} AlphaType
 *  @typedef {PantographTypes.Pantograph.OmegaType} OmegaType
 *  @typedef {PantographTypes.Pantograph.EmbarkType} EmbarkType
 *  @typedef {PantographTypes.Pantograph.DebarkType} DebarkType
 *  @typedef {PantographTypes.Pantograph.ConfirmType} ConfirmType
 *
 *  @typedef {PantographTypes.Pantograph.PantographType} PantographType
 */

import debug from 'debug'

const log = debug('shinkansen-pantograph/pantograph/pantograph')

log('`shinkansen` is awake')

/**
 *  @type {AlphaType}
 */
export const ALPHA = {
  ERROR: 'ALPHA_ERROR',
  ROUTE: 'ALPHA_ROUTE',
  MOUNT: 'ALPHA_MOUNT',
  FETCH: 'ALPHA_FETCH',
  STORE: 'ALPHA_STORE',
  QUERY: 'ALPHA_QUERY',
  CHANGE: 'ALPHA_CHANGE',
  SUBMIT: 'ALPHA_SUBMIT'
}

/**
 *  @type {OmegaType}
 */
export const OMEGA = {
  ERROR: 'OMEGA_ERROR',
  ROUTE: 'OMEGA_ROUTE',
  MOUNT: 'OMEGA_MOUNT',
  FETCH: 'OMEGA_FETCH',
  STORE: 'OMEGA_STORE',
  QUERY: 'OMEGA_QUERY',
  CHANGE: 'OMEGA_CHANGE',
  SUBMIT: 'OMEGA_SUBMIT'
}

/**
 *  @type {EmbarkType}
 */
export const EMBARK = {
  ERROR: 'EMBARK_ERROR',
  ROUTE: 'EMBARK_ROUTE',
  MOUNT: 'EMBARK_MOUNT',
  FETCH: 'EMBARK_FETCH',
  STORE: 'EMBARK_STORE',
  CHANGE: 'EMBARK_CHANGE',
  SUBMIT: 'EMBARK_SUBMIT'
}

/**
 *  @type {DebarkType}
 */
export const DEBARK = {
  ERROR: 'DEBARK_ERROR',
  ROUTE: 'DEBARK_ROUTE',
  MOUNT: 'DEBARK_MOUNT',
  FETCH: 'DEBARK_FETCH',
  STORE: 'DEBARK_STORE',
  CHANGE: 'DEBARK_CHANGE',
  SUBMIT: 'DEBARK_SUBMIT'
}

/**
 *  @type {ConfirmType}
 */
export const CONFIRM = {
  ERROR: 'CONFIRM_ERROR',
  ROUTE: 'CONFIRM_ROUTE',
  MOUNT: 'CONFIRM_MOUNT',
  FETCH: 'CONFIRM_FETCH',
  STORE: 'CONFIRM_STORE',
  CHANGE: 'CONFIRM_CHANGE',
  SUBMIT: 'CONFIRM_SUBMIT'
}

/**
 *  @type {PantographType}
 */
const Pantograph = {
  ALPHA,
  OMEGA,
  EMBARK,
  DEBARK,
  CONFIRM
}

export default Pantograph
