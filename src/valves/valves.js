import {
  browserHistory
} from 'react-router'

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
  CHANGE: 'ALPHA CHANGE',
  FETCH: 'ALPHA FETCH',
  STORE: 'ALPHA STORE',
  QUERY: 'ALPHA QUERY'
}

const DEBARK = {
  ROUTE: 'DEBARK ROUTE',
  FETCH: 'DEBARK FETCH',
  STORE: 'DEBARK STORE'
}

const EMBARK = {
  ROUTE: 'EMBARK ROUTE',
  FETCH: 'EMBARK FETCH',
  STORE: 'EMBARK STORE',
}

const OMEGA = {
  CHANGE: 'OMEGA CHANGE',
  FETCH: 'OMEGA FETCH',
  STORE: 'OMEGA STORE',
  QUERY: 'OMEGA QUERY'
}

const ACTION = {}
const STORE = {
  getState: () => ({})
}

const REDIRECT_ROUTE = (route) => { // console.log('REDIRECT_ROUTE', route) // eslint-disable-line
  const {
    pathname: PATHNAME
  } = browserHistory.getCurrentLocation()

  const pathname = Gears.path(route)

  if (PATHNAME !== pathname) browserHistory.push(pathname)
}

const REDIRECT_TO_DEBARK = ({ debark }) => { // console.log('REDIRECT_TO_DEBARK', debark) // eslint-disable-line
  const {
    pathname: PATHNAME
  } = browserHistory.getCurrentLocation()

  const pathname = `/${debark}`

  if (PATHNAME !== pathname) browserHistory.push(pathname)
}

const REDIRECT_TO_EMBARK = ({ embark }) => { // console.log('REDIRECT_TO_EMBARK', embark) // eslint-disable-line
  const {
    pathname: PATHNAME
  } = browserHistory.getCurrentLocation()

  const pathname = `/${embark}`

  if (PATHNAME !== pathname) browserHistory.push(pathname)
}

const REDIRECT = ({ [ALPHA_STATE]: alpha, [OMEGA_STATE]: omega, [DEBARK_STATE]: debark, [EMBARK_STATE]: embark }) => { // console.log('REDIRECT()', alpha, omega, debark, embark) // eslint-disable-line
  if (alpha && omega) {
    REDIRECT_ROUTE({ alpha, omega })
  } else if (debark) {
    REDIRECT_TO_DEBARK({ debark })
  } else if (embark) {
    REDIRECT_TO_EMBARK({ embark })
  }
}

const redirectFromAlpha = ({ [ALPHA_STATE]: { redirect } }) => { // console.log('redirectFromAlpha()', redirect) // eslint-disable-line
  if (redirect) REDIRECT(redirect)
}

const redirectFromDebark = ({ [DEBARK_STATE]: { redirect } }) => { // console.log('redirectFromDebark()', redirect) // eslint-disable-line
  if (redirect) REDIRECT(redirect)
}

const redirectFromEmbark = ({ [EMBARK_STATE]: { redirect } }) => { // console.log('redirectFromEmbark()', redirect) // eslint-disable-line
  if (redirect) REDIRECT(redirect)
}

const redirectFromOmega = ({ [OMEGA_STATE]: { redirect } }) => { // console.log('redirectFromOmega()', redirect) // eslint-disable-line
  if (redirect) REDIRECT(redirect)
}

const poppet = ({ action: { type, ...rest } = ACTION, store = STORE }) => {
  switch (type) {
    case OMEGA.QUERY: // console.log('Valve.poppet():OMEGA.QUERY', OMEGA.QUERY, { ...rest, type }) // eslint-disable-line
      {
        const state = store.getState()

        redirectFromOmega(state)
      }
      break
    case EMBARK.ROUTE: // console.log('Valve.poppet():EMBARK.ROUTE', EMBARK.ROUTE, { ...rest, type }) // eslint-disable-line
      {
        const state = store.getState()

        redirectFromEmbark(state)
      }
      break
    case DEBARK.ROUTE: // console.log('Valve.poppet():DEBARK.ROUTE', DEBARK.ROUTE, { ...rest, type }) // eslint-disable-line
      {
        const state = store.getState()

        redirectFromDebark(state)
      }
      break
    case ALPHA.QUERY: // console.log('Valve.poppet():ALPHA.QUERY', ALPHA.QUERY, { ...rest, type }) // eslint-disable-line
      {
        const state = store.getState()

        redirectFromAlpha(state)
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
