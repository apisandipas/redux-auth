import { expect } from '../test_helper'
import authReducer from '../../src/reducers/authReducer'
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../../src/actions/types'

/* global describe, it */

describe('Auth Reducer', () => {
  it('handles action with unknown type', () => {
    expect(authReducer(undefined, [])).to.eql({})
  })

  it('handles action with type AUTH_USER', () => {
    const action = { type: AUTH_USER }
    expect(authReducer([], action)).to.eql({authenticated: true, error: ''})
  })

  it('handles action with type UNAUTH_USER', () => {
    const action = { type: UNAUTH_USER }
    expect(authReducer([], action)).to.eql({authenticated: false, error: ''})
  })

  it('handles action with type AUTH_ERROR', () => {
    const action = { type: AUTH_ERROR, payload: 'Something went wrong' }
    expect(authReducer([], action)).to.eql({error: 'Something went wrong'})
  })
})
