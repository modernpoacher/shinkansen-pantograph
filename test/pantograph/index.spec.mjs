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
