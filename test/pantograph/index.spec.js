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
  redirectFromAlpha,
  redirectFromOmega,
  redirectFromEmbark,
  redirectFromDebark,
  redirect,
  graphite
} from 'shinkansen-pantograph/pantograph'

function mock () {
  Signals.raise({
    ALPHA: 'MOCK ALPHA',
    OMEGA: 'MOCK OMEGA',

    EMBARK: 'MOCK EMBARK',
    DEBARK: 'MOCK DEBARK',

    INDEX: 'MOCK INDEX',

    ENTER_ALPHA: 'MOCK ENTER_ALPHA',
    LEAVE_ALPHA: 'MOCK LEAVE_ALPHA',

    CHANGE_ALPHA: 'MOCK CHANGE_ALPHA',
    REMAIN_ALPHA: 'MOCK REMAIN_ALPHA',

    ENTER_OMEGA: 'MOCK ENTER_OMEGA',
    LEAVE_OMEGA: 'MOCK LEAVE_OMEGA',

    CHANGE_OMEGA: 'MOCK CHANGE_OMEGA',
    REMAIN_OMEGA: 'MOCK REMAIN_OMEGA',

    ALPHA_PATTERN: 'MOCK ALPHA_PATTERN',
    OMEGA_PATTERN: 'MOCK OMEGA_PATTERN',

    EMBARK_STAGE: 'MOCK EMBARK_STAGE',
    DEBARK_STAGE: 'MOCK DEBARK_STAGE',

    EMBARK_PATTERN: 'MOCK EMBARK_PATTERN',
    DEBARK_PATTERN: 'MOCK DEBARK_PATTERN',

    ENTER_ALPHA_ENTER_OMEGA: 'MOCK ENTER_ALPHA_ENTER_OMEGA',
    LEAVE_ALPHA_LEAVE_OMEGA: 'MOCK LEAVE_ALPHA_LEAVE_OMEGA',

    CHANGE_ALPHA_ENTER_OMEGA: 'MOCK CHANGE_ALPHA_ENTER_OMEGA',
    CHANGE_ALPHA_LEAVE_OMEGA: 'MOCK CHANGE_ALPHA_LEAVE_OMEGA',

    REMAIN_ALPHA_ENTER_OMEGA: 'MOCK REMAIN_ALPHA_ENTER_OMEGA',
    REMAIN_ALPHA_LEAVE_OMEGA: 'MOCK REMAIN_ALPHA_LEAVE_OMEGA',

    CHANGE_ALPHA_CHANGE_OMEGA: 'MOCK CHANGE_ALPHA_CHANGE_OMEGA',
    CHANGE_ALPHA_REMAIN_OMEGA: 'MOCK CHANGE_ALPHA_REMAIN_OMEGA',

    REMAIN_ALPHA_CHANGE_OMEGA: 'MOCK REMAIN_ALPHA_CHANGE_OMEGA',
    REMAIN_ALPHA_REMAIN_OMEGA: 'MOCK REMAIN_ALPHA_REMAIN_OMEGA',

    EXCEPTION: 'MOCK EXCEPTION',

    FAILURE: 100,
    SUCCESS: 101,
    IN_PROGRESS: 103,
    NO_DECISION: 104,
    COMPLETE: 105,
    PENDING: 106
  })
}

chai.use(sinonChai)

describe('shinkansen-pantograph/pantograph', () => {
  it('is a function', () => {
    expect(Pantograph)
      .to.be.a('function')
  })

  describe('`Pantograph.ALPHA`', () => {
    it('is an object', () => {
      expect(Pantograph.ALPHA)
        .to.be.an('object')
    })

    describe('`Pantograph.ALPHA.ERROR`', () => {
      it('is a string', () => {
        expect(Pantograph.ALPHA.ERROR)
          .to.be.a('string')
      })

      it('is `ALPHA_ERROR`', () => {
        expect(Pantograph.ALPHA.ERROR)
          .to.equal('ALPHA_ERROR')
      })
    })

    describe('`Pantograph.ALPHA.ROUTE`', () => {
      it('is a string', () => {
        expect(Pantograph.ALPHA.ROUTE)
          .to.be.a('string')
      })

      it('is `ALPHA_ROUTE`', () => {
        expect(Pantograph.ALPHA.ROUTE)
          .to.equal('ALPHA_ROUTE')
      })
    })

    describe('`Pantograph.ALPHA.CHANGE`', () => {
      it('is a string', () => {
        expect(Pantograph.ALPHA.CHANGE)
          .to.be.a('string')
      })

      it('is `ALPHA_CHANGE`', () => {
        expect(Pantograph.ALPHA.CHANGE)
          .to.equal('ALPHA_CHANGE')
      })
    })

    describe('`Pantograph.ALPHA.SUBMIT`', () => {
      it('is a string', () => {
        expect(Pantograph.ALPHA.SUBMIT)
          .to.be.a('string')
      })

      it('is `ALPHA_SUBMIT`', () => {
        expect(Pantograph.ALPHA.SUBMIT)
          .to.equal('ALPHA_SUBMIT')
      })
    })

    describe('`Pantograph.ALPHA.FETCH`', () => {
      it('is a string', () => {
        expect(Pantograph.ALPHA.FETCH)
          .to.be.a('string')
      })

      it('is `ALPHA_FETCH`', () => {
        expect(Pantograph.ALPHA.FETCH)
          .to.equal('ALPHA_FETCH')
      })
    })

    describe('`Pantograph.ALPHA.STORE`', () => {
      it('is a string', () => {
        expect(Pantograph.ALPHA.STORE)
          .to.be.a('string')
      })

      it('is `ALPHA_STORE`', () => {
        expect(Pantograph.ALPHA.STORE)
          .to.equal('ALPHA_STORE')
      })
    })

    describe('`Pantograph.ALPHA.QUERY`', () => {
      it('is a string', () => {
        expect(Pantograph.ALPHA.QUERY)
          .to.be.a('string')
      })

      it('is `ALPHA_QUERY`', () => {
        expect(Pantograph.ALPHA.QUERY)
          .to.equal('ALPHA_QUERY')
      })
    })
  })

  describe('`Pantograph.OMEGA`', () => {
    it('is an object', () => {
      expect(Pantograph.OMEGA)
        .to.be.an('object')
    })

    describe('`Pantograph.OMEGA.ERROR`', () => {
      it('is a string', () => {
        expect(Pantograph.OMEGA.ERROR)
          .to.be.a('string')
      })

      it('is `OMEGA_ERROR`', () => {
        expect(Pantograph.OMEGA.ERROR)
          .to.equal('OMEGA_ERROR')
      })
    })

    describe('`Pantograph.OMEGA.ROUTE`', () => {
      it('is a string', () => {
        expect(Pantograph.OMEGA.ROUTE)
          .to.be.a('string')
      })

      it('is `OMEGA_ROUTE`', () => {
        expect(Pantograph.OMEGA.ROUTE)
          .to.equal('OMEGA_ROUTE')
      })
    })

    describe('`Pantograph.OMEGA.CHANGE`', () => {
      it('is a string', () => {
        expect(Pantograph.OMEGA.CHANGE)
          .to.be.a('string')
      })

      it('is `OMEGA_SUBMIT`', () => {
        expect(Pantograph.OMEGA.CHANGE)
          .to.equal('OMEGA_CHANGE')
      })
    })

    describe('`Pantograph.OMEGA.SUBMIT`', () => {
      it('is a string', () => {
        expect(Pantograph.OMEGA.SUBMIT)
          .to.be.a('string')
      })

      it('is `OMEGA_SUBMIT`', () => {
        expect(Pantograph.OMEGA.SUBMIT)
          .to.equal('OMEGA_SUBMIT')
      })
    })

    describe('`Pantograph.OMEGA.FETCH`', () => {
      it('is a string', () => {
        expect(Pantograph.OMEGA.FETCH)
          .to.be.a('string')
      })

      it('is `OMEGA_FETCH`', () => {
        expect(Pantograph.OMEGA.FETCH)
          .to.equal('OMEGA_FETCH')
      })
    })

    describe('`Pantograph.OMEGA.STORE`', () => {
      it('is a string', () => {
        expect(Pantograph.OMEGA.STORE)
          .to.be.a('string')
      })

      it('is `OMEGA_STORE`', () => {
        expect(Pantograph.OMEGA.STORE)
          .to.equal('OMEGA_STORE')
      })
    })

    describe('`Pantograph.OMEGA.QUERY`', () => {
      it('is a string', () => {
        expect(Pantograph.OMEGA.QUERY)
          .to.be.a('string')
      })

      it('is `OMEGA_STORE`', () => {
        expect(Pantograph.OMEGA.QUERY)
          .to.equal('OMEGA_QUERY')
      })
    })
  })

  describe('`Pantograph.EMBARK`', () => {
    it('is an object', () => {
      expect(Pantograph.EMBARK)
        .to.be.an('object')
    })

    describe('`Pantograph.EMBARK.ERROR`', () => {
      it('is a string', () => {
        expect(Pantograph.EMBARK.ERROR)
          .to.be.a('string')
      })

      it('is `EMBARK_ERROR`', () => {
        expect(Pantograph.EMBARK.ERROR)
          .to.equal('EMBARK_ERROR')
      })
    })

    describe('`Pantograph.EMBARK.ROUTE`', () => {
      it('is a string', () => {
        expect(Pantograph.EMBARK.ROUTE)
          .to.be.a('string')
      })

      it('is `EMBARK_ROUTE`', () => {
        expect(Pantograph.EMBARK.ROUTE)
          .to.equal('EMBARK_ROUTE')
      })
    })

    describe('`Pantograph.EMBARK.SUBMIT`', () => {
      it('is a string', () => {
        expect(Pantograph.EMBARK.SUBMIT)
          .to.be.a('string')
      })

      it('is `EMBARK_SUBMIT`', () => {
        expect(Pantograph.EMBARK.SUBMIT)
          .to.equal('EMBARK_SUBMIT')
      })
    })

    describe('`Pantograph.EMBARK.FETCH`', () => {
      it('is a string', () => {
        expect(Pantograph.EMBARK.FETCH)
          .to.be.a('string')
      })

      it('is `EMBARK_FETCH`', () => {
        expect(Pantograph.EMBARK.FETCH)
          .to.equal('EMBARK_FETCH')
      })
    })

    describe('`Pantograph.EMBARK.STORE`', () => {
      it('is a string', () => {
        expect(Pantograph.EMBARK.STORE)
          .to.be.a('string')
      })

      it('is `EMBARK_STORE`', () => {
        expect(Pantograph.EMBARK.STORE)
          .to.equal('EMBARK_STORE')
      })
    })
  })

  describe('`Pantograph.DEBARK`', () => {
    it('is an object', () => {
      expect(Pantograph.DEBARK)
        .to.be.an('object')
    })

    describe('`Pantograph.DEBARK.ERROR`', () => {
      it('is a string', () => {
        expect(Pantograph.DEBARK.ERROR)
          .to.be.a('string')
      })

      it('is `DEBARK_ERROR`', () => {
        expect(Pantograph.DEBARK.ERROR)
          .to.equal('DEBARK_ERROR')
      })
    })

    describe('`Pantograph.DEBARK.ROUTE`', () => {
      it('is a string', () => {
        expect(Pantograph.DEBARK.ROUTE)
          .to.be.a('string')
      })

      it('is `DEBARK_ROUTE`', () => {
        expect(Pantograph.DEBARK.ROUTE)
          .to.equal('DEBARK_ROUTE')
      })
    })

    describe('`Pantograph.DEBARK.SUBMIT`', () => {
      it('is a string', () => {
        expect(Pantograph.DEBARK.SUBMIT)
          .to.be.a('string')
      })

      it('is `DEBARK_SUBMIT`', () => {
        expect(Pantograph.DEBARK.SUBMIT)
          .to.equal('DEBARK_SUBMIT')
      })
    })

    describe('`Pantograph.DEBARK.FETCH`', () => {
      it('is a string', () => {
        expect(Pantograph.DEBARK.FETCH)
          .to.be.a('string')
      })

      it('is `DEBARK_FETCH`', () => {
        expect(Pantograph.DEBARK.FETCH)
          .to.equal('DEBARK_FETCH')
      })
    })

    describe('`Pantograph.DEBARK.STORE`', () => {
      it('is a string', () => {
        expect(Pantograph.DEBARK.STORE)
          .to.be.a('string')
      })

      it('is `DEBARK_STORE`', () => {
        expect(Pantograph.DEBARK.STORE)
          .to.equal('DEBARK_STORE')
      })
    })
  })

  describe('`Pantograph.graphite`', () => {
    it('is a function', () => {
      expect(Pantograph.graphite)
        .to.be.a('function')
    })
  })

  describe('`redirectToAlpha`', () => {
    it('is a function', () => {
      expect(redirectToAlpha)
        .to.be.a('function')
    })
  })

  describe('`redirectToOmega`', () => {
    it('is a function', () => {
      expect(redirectToOmega)
        .to.be.a('function')
    })
  })

  describe('`redirectToEmbark`', () => {
    it('is a function', () => {
      expect(redirectToEmbark)
        .to.be.a('function')
    })
  })

  describe('`redirectFromAlpha`', () => {
    it('is a function', () => {
      expect(redirectFromAlpha)
        .to.be.a('function')
    })
  })

  describe('`redirectFromOmega`', () => {
    it('is a function', () => {
      expect(redirectFromOmega)
        .to.be.a('function')
    })
  })

  describe('`redirectFromEmbark`', () => {
    it('is a function', () => {
      expect(redirectFromEmbark)
        .to.be.a('function')
    })
  })

  describe('`redirectFromDebark`', () => {
    it('is a function', () => {
      expect(redirectFromDebark)
        .to.be.a('function')
    })
  })

  describe('`redirectToAlpha`', () => {
    it('is a function', () => {
      expect(redirectToAlpha)
        .to.be.a('function')
    })
  })

  describe('`redirect`', () => {
    it('is a function', () => {
      expect(redirect)
        .to.be.a('function')
    })
  })

  describe('`graphite`', () => {
    it('is a function', () => {
      expect(graphite)
        .to.be.a('function')
    })
  })

  describe('`redirectToAlpha()`', () => {
    const alpha = {}

    beforeEach(() => {
      mock()

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
        expect(Rails.to)
          .to.have.been.calledWith({ [Signals.ALPHA]: alpha }, Signals.ALPHA_PATTERN)
      })

      it('invokes `history.getCurrentLocation`', () => {
        expect(history.getCurrentLocation)
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

        expect(history.push)
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

        expect(history.push)
          .to.have.been.calledWith('MOCK PATHNAME')
      })
    })
  })

  describe('`redirectToOmega()`', () => {
    const alpha = {}
    const omega = {}

    beforeEach(() => {
      mock()

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
        expect(Rails.to)
          .to.have.been.calledWith({ [Signals.ALPHA]: alpha, [Signals.OMEGA]: omega }, Signals.OMEGA_PATTERN)
      })

      it('invokes `history.getCurrentLocation`', () => {
        expect(history.getCurrentLocation)
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

        expect(history.push)
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

        expect(history.push)
          .to.have.been.calledWith('MOCK PATHNAME')
      })
    })
  })

  describe('`redirectToEmbark()`', () => {
    const embark = {}

    beforeEach(() => {
      mock()

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
        expect(Rails.to)
          .to.have.been.calledWith({ [Signals.EMBARK]: embark }, Signals.EMBARK_PATTERN)
      })

      it('invokes `history.getCurrentLocation`', () => {
        expect(history.getCurrentLocation)
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

        expect(history.push)
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

        expect(history.push)
          .to.have.been.calledWith('MOCK PATHNAME')
      })
    })
  })

  describe('`redirectToDebark()`', () => {
    const debark = {}

    beforeEach(() => {
      mock()

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
        expect(Rails.to)
          .to.have.been.calledWith({ [Signals.DEBARK]: debark }, Signals.DEBARK_PATTERN)
      })

      it('invokes `history.getCurrentLocation`', () => {
        expect(history.getCurrentLocation)
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

        expect(history.push)
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

        expect(history.push)
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
      mock()

      redirect = {
        [Signals.ALPHA]: 'MOCK ALPHA'
      }

      sinon.stub(Rails, 'to')

      Rails.to.returns('MOCK PATHNAME')
    })

    afterEach(() => {
      Rails.to.restore()
    })

    describe('`state` has `redirect` object', () => {
      it('invokes `Rails.to`', () => {
        const state = { [Signals.ALPHA]: { redirect } }

        redirectFromAlpha({ state, history })

        expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`state` does not have `redirect` object', () => {
      it('does not invoke `Rails.to`', () => {
        const state = {}

        redirectFromAlpha({ state, history })

        expect(Rails.to)
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
      mock()

      redirect = {
        [Signals.ALPHA]: 'MOCK ALPHA', [Signals.OMEGA]: 'MOCK OMEGA'
      }

      sinon.stub(Rails, 'to')

      Rails.to.returns('MOCK PATHNAME')
    })

    afterEach(() => {
      Rails.to.restore()
    })

    describe('`state` has `redirect` object', () => {
      it('invokes `Rails.to`', () => {
        const state = { [Signals.OMEGA]: { redirect } }

        redirectFromOmega({ state, history })

        expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`state` does not have `redirect` object', () => {
      it('does not invoke `Rails.to`', () => {
        const state = {}

        redirectFromOmega({ state, history })

        expect(Rails.to)
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
      mock()

      redirect = {
        [Signals.EMBARK]: 'MOCK EMBARK'
      }

      sinon.stub(Rails, 'to')

      Rails.to.returns('MOCK PATHNAME')
    })

    afterEach(() => {
      Rails.to.restore()
    })

    describe('`state` has `redirect` object', () => {
      it('invokes `Rails.to`', () => {
        const state = { [Signals.EMBARK]: { redirect } }

        redirectFromEmbark({ state, history })

        expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`state` does not have `redirect` object', () => {
      it('does not invoke `Rails.to`', () => {
        const state = {}

        redirectFromEmbark({ state, history })

        expect(Rails.to)
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
      mock()

      redirect = {
        [Signals.DEBARK]: 'MOCK DEBARK'
      }

      sinon.stub(Rails, 'to')

      Rails.to.returns('MOCK PATHNAME')
    })

    afterEach(() => {
      Rails.to.restore()
    })

    describe('`state` has `redirect` object', () => {
      it('invokes `Rails.to`', () => {
        const state = { [Signals.DEBARK]: { redirect } }

        redirectFromDebark({ state, history })

        expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`state` does not have `redirect` object', () => {
      it('does not invoke `Rails.to`', () => {
        const state = {}

        redirectFromDebark({ state, history })

        expect(Rails.to)
          .not.have.been.called
      })
    })
  })

  describe('`redirect()`', () => {
    const history = {
      push: sinon.spy(),
      getCurrentLocation: sinon.stub().returns({})
    }

    beforeEach(() => {
      mock()

      sinon.stub(Rails, 'to')

      Rails.to.returns('MOCK PATHNAME')
    })

    afterEach(() => {
      Rails.to.restore()
    })

    describe('`redirect` has `Signals.ALPHA`', () => {
      it('invokes `Rails.to`', () => {
        const route = {
          [Signals.ALPHA]: 'MOCK ALPHA'
        }

        redirect({ redirect: route, history })

        expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`redirect` has `Signals.ALPHA` and `Signals.OMEGA`', () => {
      it('invokes `Rails.to`', () => {
        const route = {
          [Signals.ALPHA]: 'MOCK ALPHA', [Signals.OMEGA]: 'MOCK OMEGA'
        }

        redirect({ redirect: route, history })

        expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`redirect` has `Signals.EMBARK`', () => {
      it('invokes `Rails.to`', () => {
        const route = {
          [Signals.EMBARK]: 'MOCK EMBARK'
        }

        redirect({ redirect: route, history })

        expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`redirect` has `Signals.DEBARK`', () => {
      it('invokes `Rails.to`', () => {
        const route = {
          [Signals.DEBARK]: 'MOCK DEBARK'
        }

        redirect({ redirect: route, history })

        expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`redirect` does not have `Signals.ALPHA` or `Signals.OMEGA` or `Signals.EMBARK` or `Signals.DEBARK`', () => {
      it('does not invoke `Rails.to`', () => {
        const route = {}

        redirect({ redirect: route, history })

        expect(Rails.to)
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
      mock()

      sinon.stub(Rails, 'to')

      Rails.to.returns('MOCK PATHNAME')
    })

    afterEach(() => {
      Rails.to.restore()
    })

    describe('`action.type` is `ALPHA.ROUTE`', () => {
      it('invokes `Rails.to`', () => {
        const route = {
          [Signals.ALPHA]: 'MOCK ALPHA'
        }

        graphite({ action: { type: Pantograph.ALPHA.ROUTE }, state: { [Signals.ALPHA]: { redirect: route } }, history })

        expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`action.type` is `OMEGA.ROUTE`', () => {
      it('invokes `Rails.to`', () => {
        const route = {
          [Signals.ALPHA]: 'MOCK ALPHA', [Signals.OMEGA]: 'MOCK OMEGA'
        }

        graphite({ action: { type: Pantograph.OMEGA.ROUTE }, state: { [Signals.OMEGA]: { redirect: route } }, history })

        expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`action.type` is `EMBARK.ROUTE`', () => {
      it('invokes `Rails.to`', () => {
        const route = {
          [Signals.EMBARK]: 'MOCK EMBARK'
        }

        graphite({ action: { type: Pantograph.EMBARK.ROUTE }, state: { [Signals.EMBARK]: { redirect: route } }, history })

        expect(Rails.to)
          .to.have.been.called
      })
    })

    describe('`action.type` is `DEBARK.ROUTE`', () => {
      it('invokes `Rails.to`', () => {
        const route = {
          [Signals.DEBARK]: 'MOCK DEBARK'
        }

        graphite({ action: { type: Pantograph.DEBARK.ROUTE }, state: { [Signals.DEBARK]: { redirect: route } }, history })

        expect(Rails.to)
          .to.have.been.called
      })
    })
  })
})
