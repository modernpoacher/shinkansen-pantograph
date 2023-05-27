require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-pantograph')

log('`shinkansen` is awake')

const {
  default: Pantograph
} = require('./pantograph/index.mjs')

module.exports.Pantograph = Pantograph
