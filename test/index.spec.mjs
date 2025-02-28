import {
  use,
  expect
} from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import {
  Pantograph
} from '#pantograph'

use(sinonChai)

describe('#pantograph', () => {
  it('is an object', () => {
    return expect(Pantograph)
      .to.be.an('object')
  })
})
