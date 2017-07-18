import { expect } from '../test_helper'
import messageReducer from '../../src/reducers/messageReducer'
import { FETCH_MESSAGE } from '../../src/actions/types'

/* global describe, it */

describe('Message Reducer', () => {
  it('handles action with unknown type', () => {
    expect(messageReducer(undefined, [])).to.eql({})
  })

  it('handles action with type FETCH_MESSAGE', () => {
    const action = { type: FETCH_MESSAGE, payload: 'Something awesome' }
    expect(messageReducer({}, action)).to.eql({ message: 'Something awesome' })
  })
})
