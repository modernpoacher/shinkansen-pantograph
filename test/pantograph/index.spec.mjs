// @ts-nocheck

import {
  use,
  expect
} from 'chai'
import sinon from 'sinon'
import sinonChai from '@sequencemedia/sinon-chai'

import {
  Signals
} from 'shinkansen-signals'

import {
  Rails
} from 'shinkansen-rails'

import Pantograph, {
  getRedirectToAlpha,
  getRedirectToOmega,
  getRedirectToEmbark,
  getRedirectToDebark,
  getRedirectToConfirm,
  getRedirectFromAlpha,
  getRedirectFromOmega,
  getRedirectFromEmbark,
  getRedirectFromDebark,
  getRedirectFromConfirm,
  getRedirectTo,
  graphite
} from '#pantograph/pantograph'

use(sinonChai)

describe('#pantograph/pantograph', () => {
  it('is an object', () => {
    return expect(Pantograph)
      .to.be.an('object')
  })

  describe('`Pantograph.ALPHA`', () => {
    it('is an object', () => {
      return expect(Pantograph.ALPHA)
        .to.be.an('object')
    })

    describe('`Pantograph.ALPHA.ERROR`', () => {
      it('is a string', () => {
        return expect(Pantograph.ALPHA.ERROR)
          .to.be.a('string')
      })

      it('is `ALPHA_ERROR`', () => {
        return expect(Pantograph.ALPHA.ERROR)
          .to.equal('ALPHA_ERROR')
      })
    })

    describe('`Pantograph.ALPHA.ROUTE`', () => {
      it('is a string', () => {
        return expect(Pantograph.ALPHA.ROUTE)
          .to.be.a('string')
      })

      it('is `ALPHA_ROUTE`', () => {
        return expect(Pantograph.ALPHA.ROUTE)
          .to.equal('ALPHA_ROUTE')
      })
    })

    describe('`Pantograph.ALPHA.MOUNT`', () => {
      it('is a string', () => {
        return expect(Pantograph.ALPHA.MOUNT)
          .to.be.a('string')
      })

      it('is `ALPHA_MOUNT`', () => {
        return expect(Pantograph.ALPHA.MOUNT)
          .to.equal('ALPHA_MOUNT')
      })
    })

    describe('`Pantograph.ALPHA.FETCH`', () => {
      it('is a string', () => {
        return expect(Pantograph.ALPHA.FETCH)
          .to.be.a('string')
      })

      it('is `ALPHA_FETCH`', () => {
        return expect(Pantograph.ALPHA.FETCH)
          .to.equal('ALPHA_FETCH')
      })
    })

    describe('`Pantograph.ALPHA.STORE`', () => {
      it('is a string', () => {
        return expect(Pantograph.ALPHA.STORE)
          .to.be.a('string')
      })

      it('is `ALPHA_STORE`', () => {
        return expect(Pantograph.ALPHA.STORE)
          .to.equal('ALPHA_STORE')
      })
    })

    describe('`Pantograph.ALPHA.QUERY`', () => {
      it('is a string', () => {
        return expect(Pantograph.ALPHA.QUERY)
          .to.be.a('string')
      })

      it('is `ALPHA_QUERY`', () => {
        return expect(Pantograph.ALPHA.QUERY)
          .to.equal('ALPHA_QUERY')
      })
    })

    describe('`Pantograph.ALPHA.CHANGE`', () => {
      it('is a string', () => {
        return expect(Pantograph.ALPHA.CHANGE)
          .to.be.a('string')
      })

      it('is `ALPHA_CHANGE`', () => {
        return expect(Pantograph.ALPHA.CHANGE)
          .to.equal('ALPHA_CHANGE')
      })
    })

    describe('`Pantograph.ALPHA.SUBMIT`', () => {
      it('is a string', () => {
        return expect(Pantograph.ALPHA.SUBMIT)
          .to.be.a('string')
      })

      it('is `ALPHA_SUBMIT`', () => {
        return expect(Pantograph.ALPHA.SUBMIT)
          .to.equal('ALPHA_SUBMIT')
      })
    })
  })

  describe('`Pantograph.OMEGA`', () => {
    it('is an object', () => {
      return expect(Pantograph.OMEGA)
        .to.be.an('object')
    })

    describe('`Pantograph.OMEGA.ERROR`', () => {
      it('is a string', () => {
        return expect(Pantograph.OMEGA.ERROR)
          .to.be.a('string')
      })

      it('is `OMEGA_ERROR`', () => {
        return expect(Pantograph.OMEGA.ERROR)
          .to.equal('OMEGA_ERROR')
      })
    })

    describe('`Pantograph.OMEGA.ROUTE`', () => {
      it('is a string', () => {
        return expect(Pantograph.OMEGA.ROUTE)
          .to.be.a('string')
      })

      it('is `OMEGA_ROUTE`', () => {
        return expect(Pantograph.OMEGA.ROUTE)
          .to.equal('OMEGA_ROUTE')
      })
    })

    describe('`Pantograph.OMEGA.MOUNT`', () => {
      it('is a string', () => {
        return expect(Pantograph.OMEGA.MOUNT)
          .to.be.a('string')
      })

      it('is `OMEGA_MOUNT`', () => {
        return expect(Pantograph.OMEGA.MOUNT)
          .to.equal('OMEGA_MOUNT')
      })
    })

    describe('`Pantograph.OMEGA.FETCH`', () => {
      it('is a string', () => {
        return expect(Pantograph.OMEGA.FETCH)
          .to.be.a('string')
      })

      it('is `OMEGA_FETCH`', () => {
        return expect(Pantograph.OMEGA.FETCH)
          .to.equal('OMEGA_FETCH')
      })
    })

    describe('`Pantograph.OMEGA.STORE`', () => {
      it('is a string', () => {
        return expect(Pantograph.OMEGA.STORE)
          .to.be.a('string')
      })

      it('is `OMEGA_STORE`', () => {
        return expect(Pantograph.OMEGA.STORE)
          .to.equal('OMEGA_STORE')
      })
    })

    describe('`Pantograph.OMEGA.QUERY`', () => {
      it('is a string', () => {
        return expect(Pantograph.OMEGA.QUERY)
          .to.be.a('string')
      })

      it('is `OMEGA_QUERY`', () => {
        return expect(Pantograph.OMEGA.QUERY)
          .to.equal('OMEGA_QUERY')
      })
    })

    describe('`Pantograph.OMEGA.CHANGE`', () => {
      it('is a string', () => {
        return expect(Pantograph.OMEGA.CHANGE)
          .to.be.a('string')
      })

      it('is `OMEGA_CHANGE`', () => {
        return expect(Pantograph.OMEGA.CHANGE)
          .to.equal('OMEGA_CHANGE')
      })
    })

    describe('`Pantograph.OMEGA.SUBMIT`', () => {
      it('is a string', () => {
        return expect(Pantograph.OMEGA.SUBMIT)
          .to.be.a('string')
      })

      it('is `OMEGA_SUBMIT`', () => {
        return expect(Pantograph.OMEGA.SUBMIT)
          .to.equal('OMEGA_SUBMIT')
      })
    })
  })

  describe('`Pantograph.EMBARK`', () => {
    it('is an object', () => {
      return expect(Pantograph.EMBARK)
        .to.be.an('object')
    })

    describe('`Pantograph.EMBARK.ERROR`', () => {
      it('is a string', () => {
        return expect(Pantograph.EMBARK.ERROR)
          .to.be.a('string')
      })

      it('is `EMBARK_ERROR`', () => {
        return expect(Pantograph.EMBARK.ERROR)
          .to.equal('EMBARK_ERROR')
      })
    })

    describe('`Pantograph.EMBARK.ROUTE`', () => {
      it('is a string', () => {
        return expect(Pantograph.EMBARK.ROUTE)
          .to.be.a('string')
      })

      it('is `EMBARK_ROUTE`', () => {
        return expect(Pantograph.EMBARK.ROUTE)
          .to.equal('EMBARK_ROUTE')
      })
    })

    describe('`Pantograph.EMBARK.MOUNT`', () => {
      it('is a string', () => {
        return expect(Pantograph.EMBARK.MOUNT)
          .to.be.a('string')
      })

      it('is `EMBARK_MOUNT`', () => {
        return expect(Pantograph.EMBARK.MOUNT)
          .to.equal('EMBARK_MOUNT')
      })
    })

    describe('`Pantograph.EMBARK.FETCH`', () => {
      it('is a string', () => {
        return expect(Pantograph.EMBARK.FETCH)
          .to.be.a('string')
      })

      it('is `EMBARK_FETCH`', () => {
        return expect(Pantograph.EMBARK.FETCH)
          .to.equal('EMBARK_FETCH')
      })
    })

    describe('`Pantograph.EMBARK.STORE`', () => {
      it('is a string', () => {
        return expect(Pantograph.EMBARK.STORE)
          .to.be.a('string')
      })

      it('is `EMBARK_STORE`', () => {
        return expect(Pantograph.EMBARK.STORE)
          .to.equal('EMBARK_STORE')
      })
    })

    describe('`Pantograph.EMBARK.CHANGE`', () => {
      it('is a string', () => {
        return expect(Pantograph.EMBARK.CHANGE)
          .to.be.a('string')
      })

      it('is `EMBARK_CHANGE`', () => {
        return expect(Pantograph.EMBARK.CHANGE)
          .to.equal('EMBARK_CHANGE')
      })
    })

    describe('`Pantograph.EMBARK.SUBMIT`', () => {
      it('is a string', () => {
        return expect(Pantograph.EMBARK.SUBMIT)
          .to.be.a('string')
      })

      it('is `EMBARK_SUBMIT`', () => {
        return expect(Pantograph.EMBARK.SUBMIT)
          .to.equal('EMBARK_SUBMIT')
      })
    })
  })

  describe('`Pantograph.DEBARK`', () => {
    it('is an object', () => {
      return expect(Pantograph.DEBARK)
        .to.be.an('object')
    })

    describe('`Pantograph.DEBARK.ERROR`', () => {
      it('is a string', () => {
        return expect(Pantograph.DEBARK.ERROR)
          .to.be.a('string')
      })

      it('is `DEBARK_ERROR`', () => {
        return expect(Pantograph.DEBARK.ERROR)
          .to.equal('DEBARK_ERROR')
      })
    })

    describe('`Pantograph.DEBARK.ROUTE`', () => {
      it('is a string', () => {
        return expect(Pantograph.DEBARK.ROUTE)
          .to.be.a('string')
      })

      it('is `DEBARK_ROUTE`', () => {
        return expect(Pantograph.DEBARK.ROUTE)
          .to.equal('DEBARK_ROUTE')
      })
    })

    describe('`Pantograph.DEBARK.MOUNT`', () => {
      it('is a string', () => {
        return expect(Pantograph.DEBARK.MOUNT)
          .to.be.a('string')
      })

      it('is `DEBARK_MOUNT`', () => {
        return expect(Pantograph.DEBARK.MOUNT)
          .to.equal('DEBARK_MOUNT')
      })
    })

    describe('`Pantograph.DEBARK.FETCH`', () => {
      it('is a string', () => {
        return expect(Pantograph.DEBARK.FETCH)
          .to.be.a('string')
      })

      it('is `DEBARK_FETCH`', () => {
        return expect(Pantograph.DEBARK.FETCH)
          .to.equal('DEBARK_FETCH')
      })
    })

    describe('`Pantograph.DEBARK.STORE`', () => {
      it('is a string', () => {
        return expect(Pantograph.DEBARK.STORE)
          .to.be.a('string')
      })

      it('is `DEBARK_STORE`', () => {
        return expect(Pantograph.DEBARK.STORE)
          .to.equal('DEBARK_STORE')
      })
    })

    describe('`Pantograph.DEBARK.CHANGE`', () => {
      it('is a string', () => {
        return expect(Pantograph.DEBARK.CHANGE)
          .to.be.a('string')
      })

      it('is `DEBARK_CHANGE`', () => {
        return expect(Pantograph.DEBARK.CHANGE)
          .to.equal('DEBARK_CHANGE')
      })
    })

    describe('`Pantograph.DEBARK.SUBMIT`', () => {
      it('is a string', () => {
        return expect(Pantograph.DEBARK.SUBMIT)
          .to.be.a('string')
      })

      it('is `DEBARK_SUBMIT`', () => {
        return expect(Pantograph.DEBARK.SUBMIT)
          .to.equal('DEBARK_SUBMIT')
      })
    })
  })

  describe('`Pantograph.CONFIRM`', () => {
    it('is an object', () => {
      return expect(Pantograph.CONFIRM)
        .to.be.an('object')
    })

    describe('`Pantograph.CONFIRM.ERROR`', () => {
      it('is a string', () => {
        return expect(Pantograph.CONFIRM.ERROR)
          .to.be.a('string')
      })

      it('is `CONFIRM_ERROR`', () => {
        return expect(Pantograph.CONFIRM.ERROR)
          .to.equal('CONFIRM_ERROR')
      })
    })

    describe('`Pantograph.CONFIRM.ROUTE`', () => {
      it('is a string', () => {
        return expect(Pantograph.CONFIRM.ROUTE)
          .to.be.a('string')
      })

      it('is `CONFIRM_ROUTE`', () => {
        return expect(Pantograph.CONFIRM.ROUTE)
          .to.equal('CONFIRM_ROUTE')
      })
    })

    describe('`Pantograph.CONFIRM.MOUNT`', () => {
      it('is a string', () => {
        return expect(Pantograph.CONFIRM.MOUNT)
          .to.be.a('string')
      })

      it('is `CONFIRM_MOUNT`', () => {
        return expect(Pantograph.CONFIRM.MOUNT)
          .to.equal('CONFIRM_MOUNT')
      })
    })

    describe('`Pantograph.CONFIRM.FETCH`', () => {
      it('is a string', () => {
        return expect(Pantograph.CONFIRM.FETCH)
          .to.be.a('string')
      })

      it('is `CONFIRM_FETCH`', () => {
        return expect(Pantograph.CONFIRM.FETCH)
          .to.equal('CONFIRM_FETCH')
      })
    })

    describe('`Pantograph.CONFIRM.STORE`', () => {
      it('is a string', () => {
        return expect(Pantograph.CONFIRM.STORE)
          .to.be.a('string')
      })

      it('is `CONFIRM_STORE`', () => {
        return expect(Pantograph.CONFIRM.STORE)
          .to.equal('CONFIRM_STORE')
      })
    })

    describe('`Pantograph.CONFIRM.CHANGE`', () => {
      it('is a string', () => {
        return expect(Pantograph.CONFIRM.CHANGE)
          .to.be.a('string')
      })

      it('is `CONFIRM_CHANGE`', () => {
        return expect(Pantograph.CONFIRM.CHANGE)
          .to.equal('CONFIRM_CHANGE')
      })
    })

    describe('`Pantograph.CONFIRM.SUBMIT`', () => {
      it('is a string', () => {
        return expect(Pantograph.CONFIRM.SUBMIT)
          .to.be.a('string')
      })

      it('is `CONFIRM_SUBMIT`', () => {
        return expect(Pantograph.CONFIRM.SUBMIT)
          .to.equal('CONFIRM_SUBMIT')
      })
    })
  })

  describe('`graphite`', () => {
    it('is a function', () => {
      return expect(graphite)
        .to.be.a('function')
    })
  })

  describe('`getRedirectToAlpha`', () => {
    it('is a function', () => {
      return expect(getRedirectToAlpha)
        .to.be.a('function')
    })
  })

  describe('`getRedirectToOmega`', () => {
    it('is a function', () => {
      return expect(getRedirectToOmega)
        .to.be.a('function')
    })
  })

  describe('`getRedirectToEmbark`', () => {
    it('is a function', () => {
      return expect(getRedirectToEmbark)
        .to.be.a('function')
    })
  })

  describe('`getRedirectFromAlpha`', () => {
    it('is a function', () => {
      return expect(getRedirectFromAlpha)
        .to.be.a('function')
    })
  })

  describe('`getRedirectFromOmega`', () => {
    it('is a function', () => {
      return expect(getRedirectFromOmega)
        .to.be.a('function')
    })
  })

  describe('`getRedirectFromEmbark`', () => {
    it('is a function', () => {
      return expect(getRedirectFromEmbark)
        .to.be.a('function')
    })
  })

  describe('`getRedirectFromDebark`', () => {
    it('is a function', () => {
      return expect(getRedirectFromDebark)
        .to.be.a('function')
    })
  })

  describe('`getRedirectToAlpha`', () => {
    it('is a function', () => {
      return expect(getRedirectToAlpha)
        .to.be.a('function')
    })
  })

  describe('`getRedirectTo`', () => {
    it('is a function', () => {
      return expect(getRedirectTo)
        .to.be.a('function')
    })
  })

  describe('`graphite`', () => {
    it('is a function', () => {
      return expect(graphite)
        .to.be.a('function')
    })
  })

  describe('`getRedirectToAlpha()`', () => {
    /**
     *  @type {PantographTypes.ResourceType}
     */
    const alpha = {}

    beforeEach(() => {
      sinon.stub(Rails, 'to')

      Rails.to.returns('MOCK PATHNAME')
    })

    afterEach(() => {
      Rails.to.restore()
    })

    describe('Always', () => {
      /**
       *  @type {PantographTypes.RouteType}
       */
      const route = {
        pathname: 'MOCK PATHNAME'
      }

      beforeEach(() => {
        getRedirectToAlpha({ alpha, route })
      })

      it('invokes `Rails.to()`', () => {
        return expect(Rails.to)
          .to.have.been.calledWith({ [Signals.ALPHA]: alpha }, Signals.ALPHA_PATTERN)
      })
    })

    describe('`Rails.to()` pathname is the same as `route` pathname', () => {
      it('returns undefined', () => {
        /**
         *  @type {PantographTypes.RouteType}
         */
        const route = {
          pathname: 'MOCK PATHNAME'
        }

        return expect(getRedirectToAlpha({ alpha, route }))
          .to.be.undefined
      })
    })

    describe('`Rails.to()` pathname is not the same as `route` pathname', () => {
      it('returns a string', () => {
        /**
         *  @type {PantographTypes.RouteType}
         */
        const route = {
          pathname: 'MOCK CURRENT LOCATION PATHNAME'
        }

        return expect(getRedirectToAlpha({ alpha, route }))
          .to.equal('MOCK PATHNAME')
      })
    })
  })

  describe('`getRedirectToOmega()`', () => {
    /**
     *  @type {PantographTypes.ResourceType}
     */
    const alpha = {}

    /**
     *  @type {PantographTypes.ResourceType}
     */
    const omega = {}

    beforeEach(() => {
      sinon.stub(Rails, 'to')

      Rails.to.returns('MOCK PATHNAME')
    })

    afterEach(() => {
      Rails.to.restore()
    })

    describe('Always', () => {
      /**
       *  @type {PantographTypes.RouteType}
       */
      const route = {
        pathname: 'MOCK PATHNAME'
      }

      beforeEach(() => {
        getRedirectToOmega({ alpha, omega, route })
      })

      it('invokes `Rails.to()`', () => {
        return expect(Rails.to)
          .to.have.been.calledWith({ [Signals.ALPHA]: alpha, [Signals.OMEGA]: omega }, Signals.OMEGA_PATTERN)
      })
    })

    describe('`Rails.to()` pathname is the same as `route` pathname', () => {
      it('returns undefined', () => {
        /**
         *  @type {PantographTypes.RouteType}
         */
        const route = {
          pathname: 'MOCK PATHNAME'
        }

        return expect(getRedirectToOmega({ alpha, omega, route }))
          .to.be.undefined
      })
    })

    describe('`Rails.to()` pathname is not the same as `route` pathname', () => {
      it('returns a string', () => {
        /**
         *  @type {PantographTypes.RouteType}
         */
        const route = {
          pathname: 'MOCK CURRENT LOCATION PATHNAME'
        }

        return expect(getRedirectToOmega({ alpha, omega, route }))
          .to.equal('MOCK PATHNAME')
      })
    })
  })

  describe('`getRedirectToEmbark()`', () => {
    /**
     *  @type {PantographTypes.ResourceType}
     */
    const embark = {}

    beforeEach(() => {
      sinon.stub(Rails, 'to')

      Rails.to.returns('MOCK PATHNAME')
    })

    afterEach(() => {
      Rails.to.restore()
    })

    describe('Always', () => {
      /**
       *  @type {PantographTypes.RouteType}
       */
      const route = {
        pathname: 'MOCK PATHNAME'
      }

      beforeEach(() => {
        getRedirectToEmbark({ embark, route })
      })

      it('invokes `Rails.to()`', () => {
        return expect(Rails.to)
          .to.have.been.calledWith({ [Signals.EMBARK]: embark }, Signals.EMBARK_PATTERN)
      })
    })

    describe('`Rails.to()` pathname is the same as `route` pathname', () => {
      it('returns undefined', () => {
        /**
         *  @type {PantographTypes.RouteType}
         */
        const route = {
          pathname: 'MOCK PATHNAME'
        }

        return expect(getRedirectToEmbark({ embark, route }))
          .to.be.undefined
      })
    })

    describe('`Rails.to()` pathname is not the same as `route` pathname', () => {
      it('returns a string', () => {
        /**
         *  @type {PantographTypes.RouteType}
         */
        const route = {
          pathname: 'MOCK CURRENT LOCATION PATHNAME'
        }

        return expect(getRedirectToEmbark({ embark, route }))
          .to.equal('MOCK PATHNAME')
      })
    })
  })

  describe('`getRedirectToDebark()`', () => {
    /**
     *  @type {PantographTypes.ResourceType}
     */
    const debark = {}

    beforeEach(() => {
      sinon.stub(Rails, 'to')

      Rails.to.returns('MOCK PATHNAME')
    })

    afterEach(() => {
      Rails.to.restore()
    })

    describe('Always', () => {
      /**
       *  @type {PantographTypes.RouteType}
       */
      const route = {
        pathname: 'MOCK PATHNAME'
      }

      beforeEach(() => {
        getRedirectToDebark({ debark, route })
      })

      it('invokes `Rails.to()`', () => {
        return expect(Rails.to)
          .to.have.been.calledWith({ [Signals.DEBARK]: debark }, Signals.DEBARK_PATTERN)
      })
    })

    describe('`Rails.to()` pathname is the same as `route` pathname', () => {
      it('returns undefined', () => {
        /**
         *  @type {PantographTypes.RouteType}
         */
        const route = {
          pathname: 'MOCK PATHNAME'
        }

        return expect(getRedirectToDebark({ debark, route }))
          .to.be.undefined
      })
    })

    describe('`Rails.to()` pathname is not the same as `route` pathname', () => {
      it('returns a string', () => {
        /**
         *  @type {PantographTypes.RouteType}
         */
        const route = {
          pathname: 'MOCK CURRENT LOCATION PATHNAME'
        }

        return expect(getRedirectToDebark({ debark, route }))
          .to.equal('MOCK PATHNAME')
      })
    })
  })

  describe('`getRedirectToConfirm()`', () => {
    /**
     *  @type {PantographTypes.ResourceType}
     */
    const confirm = {}

    beforeEach(() => {
      sinon.stub(Rails, 'to')

      Rails.to.returns('MOCK PATHNAME')
    })

    afterEach(() => {
      Rails.to.restore()
    })

    describe('Always', () => {
      /**
       *  @type {PantographTypes.RouteType}
       */
      const route = {
        pathname: 'MOCK PATHNAME'
      }

      beforeEach(() => {
        getRedirectToConfirm({ confirm, route })
      })

      it('invokes `Rails.to()`', () => {
        return expect(Rails.to)
          .to.have.been.calledWith({ [Signals.CONFIRM]: confirm }, Signals.CONFIRM_PATTERN)
      })
    })

    describe('`Rails.to()` pathname is the same as `route` pathname', () => {
      it('returns undefined', () => {
        /**
         *  @type {PantographTypes.RouteType}
         */
        const route = {
          pathname: 'MOCK PATHNAME'
        }

        return expect(getRedirectToConfirm({ confirm, route }))
          .to.be.undefined
      })
    })

    describe('`Rails.to()` pathname is not the same as `route` pathname', () => {
      it('invokes `route.push`', () => {
        /**
         *  @type {PantographTypes.RouteType}
         */
        const route = {
          pathname: 'MOCK CURRENT LOCATION PATHNAME'
        }

        return expect(getRedirectToConfirm({ confirm, route }))
          .to.equal('MOCK PATHNAME')
      })
    })
  })

  describe('`getRedirectFromAlpha()`', () => {
    /**
     *  @type {Record<string, string>}
     */
    let redirect

    /**
     *  @type {PantographTypes.RouteType}
     */
    const route = {
      pathname: 'MOCK PATHNAME'
    }

    beforeEach(() => {
      redirect = {
        [Signals.ALPHA]: 'MOCK ALPHA'
      }

      sinon.stub(Rails, 'to')

      Rails.to.returns('MOCK PATHNAME')
    })

    afterEach(() => {
      Rails.to.restore()
    })

    describe('`state` has a `redirect` object', () => {
      it('invokes `Rails.to()`', () => {
        /**
         *  @type {PantographTypes.StateType}
         */
        const state = { [Signals.ALPHA]: { redirect } }

        getRedirectFromAlpha({ state, route })

        return expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`state` does not have a `redirect` object', () => {
      it('does not invoke `Rails.to()`', () => {
        /**
         *  @type {PantographTypes.StateType}
         */
        const state = {}

        getRedirectFromAlpha({ state, route })

        return expect(Rails.to)
          .not.have.been.called
      })
    })
  })

  describe('`getRedirectFromOmega()`', () => {
    /**
     *  @type {Record<string, string>}
     */
    let redirect

    /**
     *  @type {PantographTypes.RouteType}
     */
    const route = {
      pathname: 'MOCK PATHNAME'
    }

    beforeEach(() => {
      redirect = {
        [Signals.ALPHA]: 'MOCK ALPHA', [Signals.OMEGA]: 'MOCK OMEGA'
      }

      sinon.stub(Rails, 'to')

      Rails.to.returns('MOCK PATHNAME')
    })

    afterEach(() => {
      Rails.to.restore()
    })

    describe('`state` has a `redirect` object', () => {
      it('invokes `Rails.to()`', () => {
        /**
         *  @type {PantographTypes.StateType}
         */
        const state = { [Signals.OMEGA]: { redirect } }

        getRedirectFromOmega({ state, route })

        return expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`state` does not have a `redirect` object', () => {
      it('does not invoke `Rails.to()`', () => {
        /**
         *  @type {PantographTypes.StateType}
         */
        const state = {}

        getRedirectFromOmega({ state, route })

        return expect(Rails.to)
          .not.have.been.called
      })
    })
  })

  describe('`getRedirectFromEmbark()`', () => {
    /**
     *  @type {Record<string, string>}
     */
    let redirect

    /**
     *  @type {PantographTypes.RouteType}
     */
    const route = {
      pathname: 'MOCK PATHNAME'
    }

    beforeEach(() => {
      redirect = {
        [Signals.EMBARK]: 'MOCK EMBARK'
      }

      sinon.stub(Rails, 'to')

      Rails.to.returns('MOCK PATHNAME')
    })

    afterEach(() => {
      Rails.to.restore()
    })

    describe('`state` has a `redirect` object', () => {
      it('invokes `Rails.to()`', () => {
        /**
         *  @type {PantographTypes.StateType}
         */
        const state = { [Signals.EMBARK]: { redirect } }

        getRedirectFromEmbark({ state, route })

        return expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`state` does not have a `redirect` object', () => {
      it('does not invoke `Rails.to()`', () => {
        /**
         *  @type {PantographTypes.StateType}
         */
        const state = {}

        getRedirectFromEmbark({ state, route })

        return expect(Rails.to)
          .not.have.been.called
      })
    })
  })

  describe('`getRedirectFromDebark()`', () => {
    /**
     *  @type {Record<string, string>}
     */
    let redirect

    /**
     *  @type {PantographTypes.RouteType}
     */
    const route = {
      pathname: 'MOCK PATHNAME'
    }

    beforeEach(() => {
      redirect = {
        [Signals.DEBARK]: 'MOCK DEBARK'
      }

      sinon.stub(Rails, 'to')

      Rails.to.returns('MOCK PATHNAME')
    })

    afterEach(() => {
      Rails.to.restore()
    })

    describe('`state` has a `redirect` object', () => {
      it('invokes `Rails.to()`', () => {
        /**
         *  @type {PantographTypes.StateType}
         */
        const state = { [Signals.DEBARK]: { redirect } }

        getRedirectFromDebark({ state, route })

        return expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`state` does not have a `redirect` object', () => {
      it('does not invoke `Rails.to()`', () => {
        /**
         *  @type {PantographTypes.StateType}
         */
        const state = {}

        getRedirectFromDebark({ state, route })

        return expect(Rails.to)
          .not.have.been.called
      })
    })
  })

  describe('`getRedirectFromConfirm()`', () => {
    /**
     *  @type {Record<string, string>}
     */
    let redirect

    /**
     *  @type {PantographTypes.RouteType}
     */
    const route = {
      pathname: 'MOCK PATHNAME'
    }

    beforeEach(() => {
      redirect = {
        [Signals.CONFIRM]: 'MOCK CONFIRM'
      }

      sinon.stub(Rails, 'to')

      Rails.to.returns('MOCK PATHNAME')
    })

    afterEach(() => {
      Rails.to.restore()
    })

    describe('`state` has a `redirect` object', () => {
      it('invokes `Rails.to()`', () => {
        /**
         *  @type {PantographTypes.ResourceType}
         */
        const state = { [Signals.CONFIRM]: { redirect } }

        getRedirectFromConfirm({ state, route })

        return expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`state` does not have a `redirect` object', () => {
      it('does not invoke `Rails.to()`', () => {
        /**
         *  @type {PantographTypes.StateType}
         */
        const state = {}

        getRedirectFromConfirm({ state, route })

        return expect(Rails.to)
          .not.have.been.called
      })
    })
  })

  describe('`getRedirectTo()`', () => {
    /**
     *  @type {PantographTypes.RouteType}
     */
    const route = {
      pathname: 'MOCK PATHNAME'
    }

    beforeEach(() => {
      sinon.stub(Rails, 'to')

      Rails.to.returns('MOCK PATHNAME')
    })

    afterEach(() => {
      Rails.to.restore()
    })

    describe('`redirect` has `Signals.ALPHA`', () => {
      it('invokes `Rails.to()`', () => {
        const redirect = {
          [Signals.ALPHA]: 'MOCK ALPHA'
        }

        getRedirectTo({ redirect, route })

        return expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`redirect` has `Signals.ALPHA` and `Signals.OMEGA`', () => {
      it('invokes `Rails.to()`', () => {
        const redirect = {
          [Signals.ALPHA]: 'MOCK ALPHA', [Signals.OMEGA]: 'MOCK OMEGA'
        }

        getRedirectTo({ redirect, route })

        return expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`redirect` has `Signals.EMBARK`', () => {
      it('invokes `Rails.to()`', () => {
        const redirect = {
          [Signals.EMBARK]: 'MOCK EMBARK'
        }

        getRedirectTo({ redirect, route })

        return expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`redirect` has `Signals.DEBARK`', () => {
      it('invokes `Rails.to()`', () => {
        const redirect = {
          [Signals.DEBARK]: 'MOCK DEBARK'
        }

        getRedirectTo({ redirect, route })

        return expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`redirect` does not have `Signals.ALPHA` or `Signals.OMEGA` or `Signals.EMBARK` or `Signals.DEBARK`', () => {
      it('does not invoke `Rails.to()`', () => {
        const redirect = {}

        getRedirectTo({ redirect, route })

        return expect(Rails.to)
          .not.have.been.called
      })
    })
  })

  describe('`graphite()`', () => {
    /**
     *  @type {PantographTypes.RouteType}
     */
    const route = {
      pathname: 'MOCK PATHNAME'
    }

    beforeEach(() => {
      sinon.stub(Rails, 'to')

      Rails.to.returns('MOCK PATHNAME')
    })

    afterEach(() => {
      Rails.to.restore()
    })

    describe('`action.type` is `ALPHA.ROUTE`', () => {
      it('invokes `Rails.to()`', () => {
        const redirect = {
          [Signals.ALPHA]: 'MOCK ALPHA'
        }

        graphite({ action: { type: Pantograph.ALPHA.ROUTE }, state: { [Signals.ALPHA]: { redirect } }, route })

        return expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`action.type` is `OMEGA.ROUTE`', () => {
      it('invokes `Rails.to()`', () => {
        const redirect = {
          [Signals.ALPHA]: 'MOCK ALPHA', [Signals.OMEGA]: 'MOCK OMEGA'
        }

        graphite({ action: { type: Pantograph.OMEGA.ROUTE }, state: { [Signals.OMEGA]: { redirect } }, route })

        return expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`action.type` is `EMBARK.ROUTE`', () => {
      it('invokes `Rails.to()`', () => {
        const redirect = {
          [Signals.EMBARK]: 'MOCK EMBARK'
        }

        graphite({ action: { type: Pantograph.EMBARK.ROUTE }, state: { [Signals.EMBARK]: { redirect } }, route })

        return expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`action.type` is `DEBARK.ROUTE`', () => {
      it('invokes `Rails.to()`', () => {
        const redirect = {
          [Signals.DEBARK]: 'MOCK DEBARK'
        }

        graphite({ action: { type: Pantograph.DEBARK.ROUTE }, state: { [Signals.DEBARK]: { redirect } }, route })

        return expect(Rails.to)
          .to.have.been.called
      })
    })
  })
})
