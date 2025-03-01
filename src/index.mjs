import debug from 'debug'

const log = debug('shinkansen-pantograph')

log('`shinkansen` is awake')

export {
  default as Pantograph,
  graphite
} from './pantograph/index.mjs'
