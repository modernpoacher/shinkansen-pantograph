import {
  Boiler
} from 'shinkansen-boiler'

import {
  Gears
} from 'shinkansen-gears'

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

  const pathname = Gears.path({ [Boiler.ALPHA]: alpha }, Boiler.ALPHA_PATTERN)

  if (PATHNAME !== pathname) history.push(pathname)
}

function REDIRECT_TO_OMEGA ({ history, alpha, omega }) { // console.log('REDIRECT_TO_OMEGA', route) // eslint-disable-line
  const {
    pathname: PATHNAME
  } = history.getCurrentLocation()

  const pathname = Gears.path({ [Boiler.ALPHA]: alpha, [Boiler.OMEGA]: omega }, Boiler.OMEGA_PATTERN)

  if (PATHNAME !== pathname) history.push(pathname)
}

function REDIRECT_TO_EMBARK ({ history, embark }) { // console.log('REDIRECT_TO_EMBARK', embark) // eslint-disable-line
  const {
    pathname: PATHNAME
  } = history.getCurrentLocation()

  const pathname = Gears.path({ [Boiler.EMBARK]: embark }, Boiler.EMBARK_PATTERN)

  if (PATHNAME !== pathname) history.push(pathname)
}

function REDIRECT_TO_DEBARK ({ history, debark }) { // console.log('REDIRECT_TO_DEBARK', debark) // eslint-disable-line
  const {
    pathname: PATHNAME
  } = history.getCurrentLocation()

  const pathname = Gears.path({ [Boiler.DEBARK]: debark }, Boiler.DEBARK_PATTERN)

  if (PATHNAME !== pathname) history.push(pathname)
}

function REDIRECT ({ [Boiler.ALPHA]: alpha, [Boiler.OMEGA]: omega, [Boiler.EMBARK]: embark, [Boiler.DEBARK]: debark, history }) { // console.log('REDIRECT()', alpha, omega, debark, embark) // eslint-disable-line
  if (alpha && omega) {
    REDIRECT_TO_OMEGA({ alpha, omega, history })
  } else if (embark) {
    REDIRECT_TO_EMBARK({ embark, history })
  } else if (debark) {
    REDIRECT_TO_DEBARK({ debark, history })
  } else if (alpha) {
    REDIRECT_TO_ALPHA({ alpha, history })
  } else if (omega) {
    throw Error('Valves encountered a route error in REDIRECT()')
  }
}

function redirectFromAlpha ({ [Boiler.ALPHA]: { redirect }, history }) { // console.log('redirectFromAlpha()', redirect) // eslint-disable-line
  if (redirect) REDIRECT({ ...redirect, history })
}

function redirectFromOmega ({ [Boiler.OMEGA]: { redirect }, history }) { // console.log('redirectFromOmega()', redirect) // eslint-disable-line
  if (redirect) REDIRECT({ ...redirect, history })
}

function redirectFromEmbark ({ [Boiler.EMBARK]: { redirect }, history }) { // console.log('redirectFromEmbark()', redirect) // eslint-disable-line
  if (redirect) REDIRECT({ ...redirect, history })
}

function redirectFromDebark ({ [Boiler.DEBARK]: { redirect }, history }) { // console.log('redirectFromDebark()', redirect) // eslint-disable-line
  if (redirect) REDIRECT({ ...redirect, history })
}

function poppet ({ action: { type, ...rest } = ACTION, store = STORE, history = HISTORY }) {
  switch (type) {
    case 'OMEGA_QUERY': // console.log('Valves.poppet():OMEGA_QUERY', { ...rest, type }) // eslint-disable-line
      {
        const state = store.getState()

        redirectFromOmega({ ...state, history })
      }
      break
    case 'EMBARK_ROUTE': // console.log('Valves.poppet():EMBARK_ROUTE', { ...rest, type }) // eslint-disable-line
      {
        const state = store.getState()

        redirectFromEmbark({ ...state, history })
      }
      break
    case 'DEBARK_ROUTE': // console.log('Valves.poppet():DEBARK_ROUTE', { ...rest, type }) // eslint-disable-line
      {
        const state = store.getState()

        redirectFromDebark({ ...state, history })
      }
      break
    case 'ALPHA_QUERY': // console.log('Valves.poppet():ALPHA_QUERY', { ...rest, type }) // eslint-disable-line
      {
        const state = store.getState()

        redirectFromAlpha({ ...state, history })
      }
      break
  }

  return { ...rest, type }
}

export class Valves {
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

  static poppet = poppet
}
