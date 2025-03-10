import {
  use,
  expect
} from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import {
  Pantograph,
  graphite
} from '#pantograph'

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
