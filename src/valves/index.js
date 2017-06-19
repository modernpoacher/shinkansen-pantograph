import {
  Steam
} from 'react-steam'

import {
  Gears
} from 'react-gears'

const {
  ALPHA: ALPHA_STATE,
  DEBARK: DEBARK_STATE,
  EMBARK: EMBARK_STATE,
  OMEGA: OMEGA_STATE
} = Steam

const ALPHA = {
  CHANGE: 'ALPHA_CHANGE',
  FETCH: 'ALPHA_FETCH',
  STORE: 'ALPHA_STORE',
  QUERY: 'ALPHA_QUERY'
}

const DEBARK = {
  ROUTE: 'DEBARK_ROUTE',
  FETCH: 'DEBARK_FETCH',
  STORE: 'DEBARK_STORE'
}

const EMBARK = {
  ROUTE: 'EMBARK_ROUTE',
  FETCH: 'EMBARK_FETCH',
  STORE: 'EMBARK_STORE',
}

const OMEGA = {
  CHANGE: 'OMEGA_CHANGE',
  FETCH: 'OMEGA_FETCH',
  STORE: 'OMEGA_STORE',
  QUERY: 'OMEGA_QUERY'
}

const ACTION = {}
const STORE = {
  getState: () => ({})
}
const HISTORY = {
  push: () => {},
  getCurrentLocation: () => {}
}

function REDIRECT_ROUTE ({ history, route }) { // console.log('REDIRECT_ROUTE', route) // eslint-disable-line
  const {
    pathname: PATHNAME
  } = history.getCurrentLocation()

  const pathname = Gears.path(route)

  if (PATHNAME !== pathname) history.push(pathname)
}

function REDIRECT_TO_DEBARK ({ history, debark }) { // console.log('REDIRECT_TO_DEBARK', debark) // eslint-disable-line
  const {
    pathname: PATHNAME
  } = history.getCurrentLocation()

  const pathname = `/${debark}`

  if (PATHNAME !== pathname) history.push(pathname)
}

function REDIRECT_TO_EMBARK ({ history, embark }) { // console.log('REDIRECT_TO_EMBARK', embark) // eslint-disable-line
  const {
    pathname: PATHNAME
  } = history.getCurrentLocation()

  const pathname = `/${embark}`

  if (PATHNAME !== pathname) history.push(pathname)
}

function REDIRECT ({ [ALPHA_STATE]: alpha, [OMEGA_STATE]: omega, [DEBARK_STATE]: debark, [EMBARK_STATE]: embark, history }) { // console.log('REDIRECT()', alpha, omega, debark, embark) // eslint-disable-line
  if (alpha && omega) {
    REDIRECT_ROUTE({ route: { alpha, omega }, history })
  } else if (debark) {
    REDIRECT_TO_DEBARK({ debark, history })
  } else if (embark) {
    REDIRECT_TO_EMBARK({ embark, history })
  }
}

function redirectFromAlpha ({ [ALPHA_STATE]: { redirect }, history }) { // console.log('redirectFromAlpha()', redirect) // eslint-disable-line
  if (redirect) REDIRECT({ ...redirect, history })
}

function redirectFromDebark ({ [DEBARK_STATE]: { redirect }, history }) { // console.log('redirectFromDebark()', redirect) // eslint-disable-line
  if (redirect) REDIRECT({ ...redirect, history })
}

function redirectFromEmbark ({ [EMBARK_STATE]: { redirect }, history }) { // console.log('redirectFromEmbark()', redirect) // eslint-disable-line
  if (redirect) REDIRECT({ ...redirect, history })
}

function redirectFromOmega ({ [OMEGA_STATE]: { redirect }, history }) { // console.log('redirectFromOmega()', redirect) // eslint-disable-line
  if (redirect) REDIRECT({ ...redirect, history })
}

function poppet ({ action: { type, ...rest } = ACTION, store = STORE, history = HISTORY }) {
  switch (type) {
    case OMEGA.QUERY: // console.log('Valves.poppet():OMEGA.QUERY', OMEGA.QUERY, { ...rest, type }) // eslint-disable-line
      {
        const state = store.getState()

        redirectFromOmega({ ...state, history })
      }
      break
    case EMBARK.ROUTE: // console.log('Valves.poppet():EMBARK.ROUTE', EMBARK.ROUTE, { ...rest, type }) // eslint-disable-line
      {
        const state = store.getState()

        redirectFromEmbark({ ...state, history })
      }
      break
    case DEBARK.ROUTE: // console.log('Valves.poppet():DEBARK.ROUTE', DEBARK.ROUTE, { ...rest, type }) // eslint-disable-line
      {
        const state = store.getState()

        redirectFromDebark({ ...state, history })
      }
      break
    case ALPHA.QUERY: // console.log('Valves.poppet():ALPHA.QUERY', ALPHA.QUERY, { ...rest, type }) // eslint-disable-line
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
