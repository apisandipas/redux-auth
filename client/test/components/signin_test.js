import { renderComponent, expect } from '../test_helper'
import SignIn from '../../src/components/auth/SignIn'

/* global describe, beforeEach, it */

describe('SignIn', () => {
  let component

  beforeEach(() => {
    component = renderComponent(SignIn)
  })

  it('renders something', () => {
    expect(component).to.exist
  })

  it('has class SignIn', () => {
    expect(component).to.have.class('SignIn')
  })

  describe('inputs', () => {
    it('has a email input', () => {
      expect(component.find('input[name="email"]')).to.exist
    })

    it('has a password input', () => {
      expect(component.find('input[name="password"]')).to.exist
    })
  })

  describe('when submitted empty', () => {
    beforeEach(() => {
      component.simulate('submit')
    })

    it('shows an error message on email field', () => {
      expect(component.find('input[name="email"] + .text-help')).to.contain('You must provide an email to sign in!')
    })

    it('shows an error message on password field', () => {
      expect(component.find('input[name="password"] + .text-help')).to.contain('You must provide a password to sign in!')
    })
  })

})
