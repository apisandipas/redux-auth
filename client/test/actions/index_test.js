import { expect } from '../test_helper'
import { AUTH_ERROR, UNAUTH_USER } from '../../src/actions/types'
import { authError, signOutUser } from '../../src/actions'

/* global describe, beforeEach, it */

describe('Actions', () => {
  describe('authError', () => {
    it('has the correct type', () => {
      const action = authError()
      expect(action.type).to.equal(AUTH_ERROR)
    })

    it('has the correct payload', () => {
      const action = authError('Something went wrong')
      expect(action.payload).to.equal('Something went wrong')
    })
  })

  describe('signOutUser', () => {
    // TODO: figure out a better way to work with localStorage
    xit('has the correct type', () => {
      const action = signOutUser()
      expect(action.type).to.equal(UNAUTH_USER)
    })
  })
})