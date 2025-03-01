const {
  use,
  expect // @ts-expect-error @types/chai
} = require('chai')
const sinonChai = require('@sequencemedia/sinon-chai')

const {
  Pantograph,
  graphite
} = require('#pantograph')

use(sinonChai)

describe('#pantograph', () => {
  it('is an object', () => {
    return expect(Pantograph)
      .to.be.an('object')
  })

  describe('`graphite`', () => {
    it('is a function', () => {
      return expect(graphite)
        .to.be.a('function')
    })
  })
})
