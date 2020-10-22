const debug = require('debug')

const log = debug('shinkansen:pantograph')

log('`pantograph` is awake')

module.exports = require('./lib')
