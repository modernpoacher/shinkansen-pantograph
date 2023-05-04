console.log('(cjs) shinkansen-pantograph')

require('@babel/register')({ configFile: require.resolve('../babel.config.cjs') })

const { default: Pantograph } = require('./pantograph/index.mjs')

module.exports.Pantograph = Pantograph
