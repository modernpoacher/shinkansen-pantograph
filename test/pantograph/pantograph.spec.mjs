import {
  use,
  expect
} from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import {
  ALPHA,
  OMEGA,
  EMBARK,
  DEBARK,
  CONFIRM
} from '#pantograph/pantograph/pantograph'

use(sinonChai)

describe('#pantograph/pantograph/pantograph', () => {
  describe('`ALPHA`', () => {
    it('is an object', () => {
      return expect(ALPHA)
        .to.be.an('object')
    })

    describe('`ALPHA.ERROR`', () => {
      it('is a string', () => {
        return expect(ALPHA.ERROR)
          .to.be.a('string')
      })

      it('is `ALPHA_ERROR`', () => {
        return expect(ALPHA.ERROR)
          .to.equal('ALPHA_ERROR')
      })
    })

    describe('`ALPHA.ROUTE`', () => {
      it('is a string', () => {
        return expect(ALPHA.ROUTE)
          .to.be.a('string')
      })

      it('is `ALPHA_ROUTE`', () => {
        return expect(ALPHA.ROUTE)
          .to.equal('ALPHA_ROUTE')
      })
    })

    describe('`ALPHA.MOUNT`', () => {
      it('is a string', () => {
        return expect(ALPHA.MOUNT)
          .to.be.a('string')
      })

      it('is `ALPHA_MOUNT`', () => {
        return expect(ALPHA.MOUNT)
          .to.equal('ALPHA_MOUNT')
      })
    })

    describe('`ALPHA.FETCH`', () => {
      it('is a string', () => {
        return expect(ALPHA.FETCH)
          .to.be.a('string')
      })

      it('is `ALPHA_FETCH`', () => {
        return expect(ALPHA.FETCH)
          .to.equal('ALPHA_FETCH')
      })
    })

    describe('`ALPHA.STORE`', () => {
      it('is a string', () => {
        return expect(ALPHA.STORE)
          .to.be.a('string')
      })

      it('is `ALPHA_STORE`', () => {
        return expect(ALPHA.STORE)
          .to.equal('ALPHA_STORE')
      })
    })

    describe('`ALPHA.QUERY`', () => {
      it('is a string', () => {
        return expect(ALPHA.QUERY)
          .to.be.a('string')
      })

      it('is `ALPHA_QUERY`', () => {
        return expect(ALPHA.QUERY)
          .to.equal('ALPHA_QUERY')
      })
    })

    describe('`ALPHA.CHANGE`', () => {
      it('is a string', () => {
        return expect(ALPHA.CHANGE)
          .to.be.a('string')
      })

      it('is `ALPHA_CHANGE`', () => {
        return expect(ALPHA.CHANGE)
          .to.equal('ALPHA_CHANGE')
      })
    })

    describe('`ALPHA.SUBMIT`', () => {
      it('is a string', () => {
        return expect(ALPHA.SUBMIT)
          .to.be.a('string')
      })

      it('is `ALPHA_SUBMIT`', () => {
        return expect(ALPHA.SUBMIT)
          .to.equal('ALPHA_SUBMIT')
      })
    })
  })

  describe('`OMEGA`', () => {
    it('is an object', () => {
      return expect(OMEGA)
        .to.be.an('object')
    })

    describe('`OMEGA.ERROR`', () => {
      it('is a string', () => {
        return expect(OMEGA.ERROR)
          .to.be.a('string')
      })

      it('is `OMEGA_ERROR`', () => {
        return expect(OMEGA.ERROR)
          .to.equal('OMEGA_ERROR')
      })
    })

    describe('`OMEGA.ROUTE`', () => {
      it('is a string', () => {
        return expect(OMEGA.ROUTE)
          .to.be.a('string')
      })

      it('is `OMEGA_ROUTE`', () => {
        return expect(OMEGA.ROUTE)
          .to.equal('OMEGA_ROUTE')
      })
    })

    describe('`OMEGA.MOUNT`', () => {
      it('is a string', () => {
        return expect(OMEGA.MOUNT)
          .to.be.a('string')
      })

      it('is `OMEGA_MOUNT`', () => {
        return expect(OMEGA.MOUNT)
          .to.equal('OMEGA_MOUNT')
      })
    })

    describe('`OMEGA.FETCH`', () => {
      it('is a string', () => {
        return expect(OMEGA.FETCH)
          .to.be.a('string')
      })

      it('is `OMEGA_FETCH`', () => {
        return expect(OMEGA.FETCH)
          .to.equal('OMEGA_FETCH')
      })
    })

    describe('`OMEGA.STORE`', () => {
      it('is a string', () => {
        return expect(OMEGA.STORE)
          .to.be.a('string')
      })

      it('is `OMEGA_STORE`', () => {
        return expect(OMEGA.STORE)
          .to.equal('OMEGA_STORE')
      })
    })

    describe('`OMEGA.QUERY`', () => {
      it('is a string', () => {
        return expect(OMEGA.QUERY)
          .to.be.a('string')
      })

      it('is `OMEGA_QUERY`', () => {
        return expect(OMEGA.QUERY)
          .to.equal('OMEGA_QUERY')
      })
    })

    describe('`OMEGA.CHANGE`', () => {
      it('is a string', () => {
        return expect(OMEGA.CHANGE)
          .to.be.a('string')
      })

      it('is `OMEGA_CHANGE`', () => {
        return expect(OMEGA.CHANGE)
          .to.equal('OMEGA_CHANGE')
      })
    })

    describe('`OMEGA.SUBMIT`', () => {
      it('is a string', () => {
        return expect(OMEGA.SUBMIT)
          .to.be.a('string')
      })

      it('is `OMEGA_SUBMIT`', () => {
        return expect(OMEGA.SUBMIT)
          .to.equal('OMEGA_SUBMIT')
      })
    })
  })

  describe('`EMBARK`', () => {
    it('is an object', () => {
      return expect(EMBARK)
        .to.be.an('object')
    })

    describe('`EMBARK.ERROR`', () => {
      it('is a string', () => {
        return expect(EMBARK.ERROR)
          .to.be.a('string')
      })

      it('is `EMBARK_ERROR`', () => {
        return expect(EMBARK.ERROR)
          .to.equal('EMBARK_ERROR')
      })
    })

    describe('`EMBARK.ROUTE`', () => {
      it('is a string', () => {
        return expect(EMBARK.ROUTE)
          .to.be.a('string')
      })

      it('is `EMBARK_ROUTE`', () => {
        return expect(EMBARK.ROUTE)
          .to.equal('EMBARK_ROUTE')
      })
    })

    describe('`EMBARK.MOUNT`', () => {
      it('is a string', () => {
        return expect(EMBARK.MOUNT)
          .to.be.a('string')
      })

      it('is `EMBARK_MOUNT`', () => {
        return expect(EMBARK.MOUNT)
          .to.equal('EMBARK_MOUNT')
      })
    })

    describe('`EMBARK.FETCH`', () => {
      it('is a string', () => {
        return expect(EMBARK.FETCH)
          .to.be.a('string')
      })

      it('is `EMBARK_FETCH`', () => {
        return expect(EMBARK.FETCH)
          .to.equal('EMBARK_FETCH')
      })
    })

    describe('`EMBARK.STORE`', () => {
      it('is a string', () => {
        return expect(EMBARK.STORE)
          .to.be.a('string')
      })

      it('is `EMBARK_STORE`', () => {
        return expect(EMBARK.STORE)
          .to.equal('EMBARK_STORE')
      })
    })

    describe('`EMBARK.CHANGE`', () => {
      it('is a string', () => {
        return expect(EMBARK.CHANGE)
          .to.be.a('string')
      })

      it('is `EMBARK_CHANGE`', () => {
        return expect(EMBARK.CHANGE)
          .to.equal('EMBARK_CHANGE')
      })
    })

    describe('`EMBARK.SUBMIT`', () => {
      it('is a string', () => {
        return expect(EMBARK.SUBMIT)
          .to.be.a('string')
      })

      it('is `EMBARK_SUBMIT`', () => {
        return expect(EMBARK.SUBMIT)
          .to.equal('EMBARK_SUBMIT')
      })
    })
  })

  describe('`DEBARK`', () => {
    it('is an object', () => {
      return expect(DEBARK)
        .to.be.an('object')
    })

    describe('`DEBARK.ERROR`', () => {
      it('is a string', () => {
        return expect(DEBARK.ERROR)
          .to.be.a('string')
      })

      it('is `DEBARK_ERROR`', () => {
        return expect(DEBARK.ERROR)
          .to.equal('DEBARK_ERROR')
      })
    })

    describe('`DEBARK.ROUTE`', () => {
      it('is a string', () => {
        return expect(DEBARK.ROUTE)
          .to.be.a('string')
      })

      it('is `DEBARK_ROUTE`', () => {
        return expect(DEBARK.ROUTE)
          .to.equal('DEBARK_ROUTE')
      })
    })

    describe('`DEBARK.MOUNT`', () => {
      it('is a string', () => {
        return expect(DEBARK.MOUNT)
          .to.be.a('string')
      })

      it('is `DEBARK_MOUNT`', () => {
        return expect(DEBARK.MOUNT)
          .to.equal('DEBARK_MOUNT')
      })
    })

    describe('`DEBARK.FETCH`', () => {
      it('is a string', () => {
        return expect(DEBARK.FETCH)
          .to.be.a('string')
      })

      it('is `DEBARK_FETCH`', () => {
        return expect(DEBARK.FETCH)
          .to.equal('DEBARK_FETCH')
      })
    })

    describe('`DEBARK.STORE`', () => {
      it('is a string', () => {
        return expect(DEBARK.STORE)
          .to.be.a('string')
      })

      it('is `DEBARK_STORE`', () => {
        return expect(DEBARK.STORE)
          .to.equal('DEBARK_STORE')
      })
    })

    describe('`DEBARK.CHANGE`', () => {
      it('is a string', () => {
        return expect(DEBARK.CHANGE)
          .to.be.a('string')
      })

      it('is `DEBARK_CHANGE`', () => {
        return expect(DEBARK.CHANGE)
          .to.equal('DEBARK_CHANGE')
      })
    })

    describe('`DEBARK.SUBMIT`', () => {
      it('is a string', () => {
        return expect(DEBARK.SUBMIT)
          .to.be.a('string')
      })

      it('is `DEBARK_SUBMIT`', () => {
        return expect(DEBARK.SUBMIT)
          .to.equal('DEBARK_SUBMIT')
      })
    })
  })

  describe('`CONFIRM`', () => {
    it('is an object', () => {
      return expect(CONFIRM)
        .to.be.an('object')
    })

    describe('`CONFIRM.ERROR`', () => {
      it('is a string', () => {
        return expect(CONFIRM.ERROR)
          .to.be.a('string')
      })

      it('is `CONFIRM_ERROR`', () => {
        return expect(CONFIRM.ERROR)
          .to.equal('CONFIRM_ERROR')
      })
    })

    describe('`CONFIRM.ROUTE`', () => {
      it('is a string', () => {
        return expect(CONFIRM.ROUTE)
          .to.be.a('string')
      })

      it('is `CONFIRM_ROUTE`', () => {
        return expect(CONFIRM.ROUTE)
          .to.equal('CONFIRM_ROUTE')
      })
    })

    describe('`CONFIRM.MOUNT`', () => {
      it('is a string', () => {
        return expect(CONFIRM.MOUNT)
          .to.be.a('string')
      })

      it('is `CONFIRM_MOUNT`', () => {
        return expect(CONFIRM.MOUNT)
          .to.equal('CONFIRM_MOUNT')
      })
    })

    describe('`CONFIRM.FETCH`', () => {
      it('is a string', () => {
        return expect(CONFIRM.FETCH)
          .to.be.a('string')
      })

      it('is `CONFIRM_FETCH`', () => {
        return expect(CONFIRM.FETCH)
          .to.equal('CONFIRM_FETCH')
      })
    })

    describe('`CONFIRM.STORE`', () => {
      it('is a string', () => {
        return expect(CONFIRM.STORE)
          .to.be.a('string')
      })

      it('is `CONFIRM_STORE`', () => {
        return expect(CONFIRM.STORE)
          .to.equal('CONFIRM_STORE')
      })
    })

    describe('`CONFIRM.CHANGE`', () => {
      it('is a string', () => {
        return expect(CONFIRM.CHANGE)
          .to.be.a('string')
      })

      it('is `CONFIRM_CHANGE`', () => {
        return expect(CONFIRM.CHANGE)
          .to.equal('CONFIRM_CHANGE')
      })
    })

    describe('`CONFIRM.SUBMIT`', () => {
      it('is a string', () => {
        return expect(CONFIRM.SUBMIT)
          .to.be.a('string')
      })

      it('is `CONFIRM_SUBMIT`', () => {
        return expect(CONFIRM.SUBMIT)
          .to.equal('CONFIRM_SUBMIT')
      })
    })
  })
})
