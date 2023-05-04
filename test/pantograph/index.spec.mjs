import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import {
  Rails
} from 'shinkansen-rails'

import {
  Signals
} from 'shinkansen-signals'

import Pantograph, {
  redirectToAlpha,
  redirectToOmega,
  redirectToEmbark,
  redirectToDebark,
  redirectToConfirm,
  redirectFromAlpha,
  redirectFromOmega,
  redirectFromEmbark,
  redirectFromDebark,
  redirectFromConfirm,
  redirectTo,
  graphite
} from 'shinkansen-pantograph/pantograph'

chai.use(sinonChai)

describe('shinkansen-pantograph/pantograph', () => {
  it('is a function', () => {
    return expect(Pantograph)
      .to.be.a('function')
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

  describe('`Pantograph.graphite`', () => {
    it('is a function', () => {
      return expect(Pantograph.graphite)
        .to.be.a('function')
    })
  })

  describe('`redirectToAlpha`', () => {
    it('is a function', () => {
      return expect(redirectToAlpha)
        .to.be.a('function')
    })
  })

  describe('`redirectToOmega`', () => {
    it('is a function', () => {
      return expect(redirectToOmega)
        .to.be.a('function')
    })
  })

  describe('`redirectToEmbark`', () => {
    it('is a function', () => {
      return expect(redirectToEmbark)
        .to.be.a('function')
    })
  })

  describe('`redirectFromAlpha`', () => {
    it('is a function', () => {
      return expect(redirectFromAlpha)
        .to.be.a('function')
    })
  })

  describe('`redirectFromOmega`', () => {
    it('is a function', () => {
      return expect(redirectFromOmega)
        .to.be.a('function')
    })
  })

  describe('`redirectFromEmbark`', () => {
    it('is a function', () => {
      return expect(redirectFromEmbark)
        .to.be.a('function')
    })
  })

  describe('`redirectFromDebark`', () => {
    it('is a function', () => {
      return expect(redirectFromDebark)
        .to.be.a('function')
    })
  })

  describe('`redirectToAlpha`', () => {
    it('is a function', () => {
      return expect(redirectToAlpha)
        .to.be.a('function')
    })
  })

  describe('`redirectTo`', () => {
    it('is a function', () => {
      return expect(redirectTo)
        .to.be.a('function')
    })
  })

  describe('`graphite`', () => {
    it('is a function', () => {
      return expect(graphite)
        .to.be.a('function')
    })
  })

  describe('`redirectToAlpha()`', () => {
    const alpha = {}

    beforeEach(() => {
      sinon.stub(Rails, 'to')

      Rails.to.returns('MOCK PATHNAME')
    })

    afterEach(() => {
      Rails.to.restore()
    })

    describe('Always', () => {
      const history = {
        push: sinon.spy(),
        getCurrentLocation: sinon.stub().returns({})
      }

      beforeEach(() => {
        redirectToAlpha({ alpha, history })
      })

      it('invokes `Rails.to`', () => {
        return expect(Rails.to)
          .to.have.been.calledWith({ [Signals.ALPHA]: alpha }, Signals.ALPHA_PATTERN)
      })

      it('invokes `history.getCurrentLocation`', () => {
        return expect(history.getCurrentLocation)
          .to.have.been.called
      })
    })

    describe('`Rails.to()` pathname is the same as `history.getCurrentLocation()` pathname', () => {
      it('does not invoke `history.push`', () => {
        const history = {
          push: sinon.spy(),
          getCurrentLocation: sinon.stub().returns({
            pathname: 'MOCK PATHNAME'
          })
        }

        redirectToAlpha({ alpha, history })

        return expect(history.push)
          .not.have.been.called
      })
    })

    describe('`Rails.to()` pathname is not the same as `history.getCurrentLocation()` pathname', () => {
      it('invokes `history.push`', () => {
        const history = {
          push: sinon.spy(),
          getCurrentLocation: sinon.stub().returns({
            pathname: 'MOCK CURRENT LOCATION PATHNAME'
          })
        }

        redirectToAlpha({ alpha, history })

        return expect(history.push)
          .to.have.been.calledWith('MOCK PATHNAME')
      })
    })
  })

  describe('`redirectToOmega()`', () => {
    const alpha = {}
    const omega = {}

    beforeEach(() => {
      sinon.stub(Rails, 'to')

      Rails.to.returns('MOCK PATHNAME')
    })

    afterEach(() => {
      Rails.to.restore()
    })

    describe('Always', () => {
      const history = {
        push: sinon.spy(),
        getCurrentLocation: sinon.stub().returns({})
      }

      beforeEach(() => {
        redirectToOmega({ alpha, omega, history })
      })

      it('invokes `Rails.to`', () => {
        return expect(Rails.to)
          .to.have.been.calledWith({ [Signals.ALPHA]: alpha, [Signals.OMEGA]: omega }, Signals.OMEGA_PATTERN)
      })

      it('invokes `history.getCurrentLocation`', () => {
        return expect(history.getCurrentLocation)
          .to.have.been.called
      })
    })

    describe('`Rails.to()` pathname is the same as `history.getCurrentLocation()` pathname', () => {
      it('does not invoke `history.push`', () => {
        const history = {
          push: sinon.spy(),
          getCurrentLocation: sinon.stub().returns({
            pathname: 'MOCK PATHNAME'
          })
        }

        redirectToOmega({ omega, history })

        return expect(history.push)
          .not.have.been.called
      })
    })

    describe('`Rails.to()` pathname is not the same as `history.getCurrentLocation()` pathname', () => {
      it('invokes `history.push`', () => {
        const history = {
          push: sinon.spy(),
          getCurrentLocation: sinon.stub().returns({
            pathname: 'MOCK CURRENT LOCATION PATHNAME'
          })
        }

        redirectToOmega({ omega, history })

        return expect(history.push)
          .to.have.been.calledWith('MOCK PATHNAME')
      })
    })
  })

  describe('`redirectToEmbark()`', () => {
    const embark = {}

    beforeEach(() => {
      sinon.stub(Rails, 'to')

      Rails.to.returns('MOCK PATHNAME')
    })

    afterEach(() => {
      Rails.to.restore()
    })

    describe('Always', () => {
      const history = {
        push: sinon.spy(),
        getCurrentLocation: sinon.stub().returns({})
      }

      beforeEach(() => {
        redirectToEmbark({ embark, history })
      })

      it('invokes `Rails.to`', () => {
        return expect(Rails.to)
          .to.have.been.calledWith({ [Signals.EMBARK]: embark }, Signals.EMBARK_PATTERN)
      })

      it('invokes `history.getCurrentLocation`', () => {
        return expect(history.getCurrentLocation)
          .to.have.been.called
      })
    })

    describe('`Rails.to()` pathname is the same as `history.getCurrentLocation()` pathname', () => {
      it('does not invoke `history.push`', () => {
        const history = {
          push: sinon.spy(),
          getCurrentLocation: sinon.stub().returns({
            pathname: 'MOCK PATHNAME'
          })
        }

        redirectToEmbark({ embark, history })

        return expect(history.push)
          .not.have.been.called
      })
    })

    describe('`Rails.to()` pathname is not the same as `history.getCurrentLocation()` pathname', () => {
      it('invokes `history.push`', () => {
        const history = {
          push: sinon.spy(),
          getCurrentLocation: sinon.stub().returns({
            pathname: 'MOCK CURRENT LOCATION PATHNAME'
          })
        }

        redirectToEmbark({ embark, history })

        return expect(history.push)
          .to.have.been.calledWith('MOCK PATHNAME')
      })
    })
  })

  describe('`redirectToDebark()`', () => {
    const debark = {}

    beforeEach(() => {
      sinon.stub(Rails, 'to')

      Rails.to.returns('MOCK PATHNAME')
    })

    afterEach(() => {
      Rails.to.restore()
    })

    describe('Always', () => {
      const history = {
        push: sinon.spy(),
        getCurrentLocation: sinon.stub().returns({})
      }

      beforeEach(() => {
        redirectToDebark({ debark, history })
      })

      it('invokes `Rails.to`', () => {
        return expect(Rails.to)
          .to.have.been.calledWith({ [Signals.DEBARK]: debark }, Signals.DEBARK_PATTERN)
      })

      it('invokes `history.getCurrentLocation`', () => {
        return expect(history.getCurrentLocation)
          .to.have.been.called
      })
    })

    describe('`Rails.to()` pathname is the same as `history.getCurrentLocation()` pathname', () => {
      it('does not invoke `history.push`', () => {
        const history = {
          push: sinon.spy(),
          getCurrentLocation: sinon.stub().returns({
            pathname: 'MOCK PATHNAME'
          })
        }

        redirectToDebark({ debark, history })

        return expect(history.push)
          .not.have.been.called
      })
    })

    describe('`Rails.to()` pathname is not the same as `history.getCurrentLocation()` pathname', () => {
      it('invokes `history.push`', () => {
        const history = {
          push: sinon.spy(),
          getCurrentLocation: sinon.stub().returns({
            pathname: 'MOCK CURRENT LOCATION PATHNAME'
          })
        }

        redirectToDebark({ debark, history })

        return expect(history.push)
          .to.have.been.calledWith('MOCK PATHNAME')
      })
    })
  })

  describe('`redirectToConfirm()`', () => {
    const confirm = {}

    beforeEach(() => {
      sinon.stub(Rails, 'to')

      Rails.to.returns('MOCK PATHNAME')
    })

    afterEach(() => {
      Rails.to.restore()
    })

    describe('Always', () => {
      const history = {
        push: sinon.spy(),
        getCurrentLocation: sinon.stub().returns({})
      }

      beforeEach(() => {
        redirectToConfirm({ confirm, history })
      })

      it('invokes `Rails.to`', () => {
        return expect(Rails.to)
          .to.have.been.calledWith({ [Signals.CONFIRM]: confirm }, Signals.CONFIRM_PATTERN)
      })

      it('invokes `history.getCurrentLocation`', () => {
        return expect(history.getCurrentLocation)
          .to.have.been.called
      })
    })

    describe('`Rails.to()` pathname is the same as `history.getCurrentLocation()` pathname', () => {
      it('does not invoke `history.push`', () => {
        const history = {
          push: sinon.spy(),
          getCurrentLocation: sinon.stub().returns({
            pathname: 'MOCK PATHNAME'
          })
        }

        redirectToConfirm({ confirm, history })

        return expect(history.push)
          .not.have.been.called
      })
    })

    describe('`Rails.to()` pathname is not the same as `history.getCurrentLocation()` pathname', () => {
      it('invokes `history.push`', () => {
        const history = {
          push: sinon.spy(),
          getCurrentLocation: sinon.stub().returns({
            pathname: 'MOCK CURRENT LOCATION PATHNAME'
          })
        }

        redirectToConfirm({ confirm, history })

        return expect(history.push)
          .to.have.been.calledWith('MOCK PATHNAME')
      })
    })
  })

  describe('`redirectFromAlpha()`', () => {
    let redirect

    const history = {
      push: sinon.spy(),
      getCurrentLocation: sinon.stub().returns({})
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
      it('invokes `Rails.to`', () => {
        const state = { [Signals.ALPHA]: { redirect } }

        redirectFromAlpha({ state, history })

        return expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`state` does not have a `redirect` object', () => {
      it('does not invoke `Rails.to`', () => {
        const state = {}

        redirectFromAlpha({ state, history })

        return expect(Rails.to)
          .not.have.been.called
      })
    })
  })

  describe('`redirectFromOmega()`', () => {
    let redirect

    const history = {
      push: sinon.spy(),
      getCurrentLocation: sinon.stub().returns({})
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
      it('invokes `Rails.to`', () => {
        const state = { [Signals.OMEGA]: { redirect } }

        redirectFromOmega({ state, history })

        return expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`state` does not have a `redirect` object', () => {
      it('does not invoke `Rails.to`', () => {
        const state = {}

        redirectFromOmega({ state, history })

        return expect(Rails.to)
          .not.have.been.called
      })
    })
  })

  describe('`redirectFromEmbark()`', () => {
    let redirect

    const history = {
      push: sinon.spy(),
      getCurrentLocation: sinon.stub().returns({})
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
      it('invokes `Rails.to`', () => {
        const state = { [Signals.EMBARK]: { redirect } }

        redirectFromEmbark({ state, history })

        return expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`state` does not have a `redirect` object', () => {
      it('does not invoke `Rails.to`', () => {
        const state = {}

        redirectFromEmbark({ state, history })

        return expect(Rails.to)
          .not.have.been.called
      })
    })
  })

  describe('`redirectFromDebark()`', () => {
    let redirect

    const history = {
      push: sinon.spy(),
      getCurrentLocation: sinon.stub().returns({})
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
      it('invokes `Rails.to`', () => {
        const state = { [Signals.DEBARK]: { redirect } }

        redirectFromDebark({ state, history })

        return expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`state` does not have a `redirect` object', () => {
      it('does not invoke `Rails.to`', () => {
        const state = {}

        redirectFromDebark({ state, history })

        return expect(Rails.to)
          .not.have.been.called
      })
    })
  })

  describe('`redirectFromConfirm()`', () => {
    let redirect

    const history = {
      push: sinon.spy(),
      getCurrentLocation: sinon.stub().returns({})
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
      it('invokes `Rails.to`', () => {
        const state = { [Signals.CONFIRM]: { redirect } }

        redirectFromConfirm({ state, history })

        return expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`state` does not have a `redirect` object', () => {
      it('does not invoke `Rails.to`', () => {
        const state = {}

        redirectFromConfirm({ state, history })

        return expect(Rails.to)
          .not.have.been.called
      })
    })
  })

  describe('`redirectTo()`', () => {
    const history = {
      push: sinon.spy(),
      getCurrentLocation: sinon.stub().returns({})
    }

    beforeEach(() => {
      sinon.stub(Rails, 'to')

      Rails.to.returns('MOCK PATHNAME')
    })

    afterEach(() => {
      Rails.to.restore()
    })

    describe('`redirect` has `Signals.ALPHA`', () => {
      it('invokes `Rails.to`', () => {
        const redirect = {
          [Signals.ALPHA]: 'MOCK ALPHA'
        }

        redirectTo({ redirect, history })

        return expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`redirect` has `Signals.ALPHA` and `Signals.OMEGA`', () => {
      it('invokes `Rails.to`', () => {
        const redirect = {
          [Signals.ALPHA]: 'MOCK ALPHA', [Signals.OMEGA]: 'MOCK OMEGA'
        }

        redirectTo({ redirect, history })

        return expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`redirect` has `Signals.EMBARK`', () => {
      it('invokes `Rails.to`', () => {
        const redirect = {
          [Signals.EMBARK]: 'MOCK EMBARK'
        }

        redirectTo({ redirect, history })

        return expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`redirect` has `Signals.DEBARK`', () => {
      it('invokes `Rails.to`', () => {
        const redirect = {
          [Signals.DEBARK]: 'MOCK DEBARK'
        }

        redirectTo({ redirect, history })

        return expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`redirect` does not have `Signals.ALPHA` or `Signals.OMEGA` or `Signals.EMBARK` or `Signals.DEBARK`', () => {
      it('does not invoke `Rails.to`', () => {
        const redirect = {}

        redirectTo({ redirect, history })

        return expect(Rails.to)
          .not.have.been.called
      })
    })
  })

  describe('`graphite()`', () => {
    const history = {
      push: sinon.spy(),
      getCurrentLocation: sinon.stub().returns({})
    }

    beforeEach(() => {
      sinon.stub(Rails, 'to')

      Rails.to.returns('MOCK PATHNAME')
    })

    afterEach(() => {
      Rails.to.restore()
    })

    describe('`action.type` is `ALPHA.ROUTE`', () => {
      it('invokes `Rails.to`', () => {
        const redirect = {
          [Signals.ALPHA]: 'MOCK ALPHA'
        }

        graphite({ action: { type: Pantograph.ALPHA.ROUTE }, state: { [Signals.ALPHA]: { redirect } }, history })

        return expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`action.type` is `OMEGA.ROUTE`', () => {
      it('invokes `Rails.to`', () => {
        const redirect = {
          [Signals.ALPHA]: 'MOCK ALPHA', [Signals.OMEGA]: 'MOCK OMEGA'
        }

        graphite({ action: { type: Pantograph.OMEGA.ROUTE }, state: { [Signals.OMEGA]: { redirect } }, history })

        return expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`action.type` is `EMBARK.ROUTE`', () => {
      it('invokes `Rails.to`', () => {
        const redirect = {
          [Signals.EMBARK]: 'MOCK EMBARK'
        }

        graphite({ action: { type: Pantograph.EMBARK.ROUTE }, state: { [Signals.EMBARK]: { redirect } }, history })

        return expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`action.type` is `DEBARK.ROUTE`', () => {
      it('invokes `Rails.to`', () => {
        const redirect = {
          [Signals.DEBARK]: 'MOCK DEBARK'
        }

        graphite({ action: { type: Pantograph.DEBARK.ROUTE }, state: { [Signals.DEBARK]: { redirect } }, history })

        return expect(Rails.to)
          .to.have.been.called
      })
    })
  })
})
