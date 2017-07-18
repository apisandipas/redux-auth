import { renderComponent, expect } from '../test_helper'
import SignUp from '../../src/components/auth/SignUp'

/* global describe, beforeEach, it */

describe('SignUp', () => {
  let component

  beforeEach(() => {
    component = renderComponent(SignUp)
  })

  it('renders something', () => {
    expect(component).to.exist
  })

  it('has class SignUp', () => {
    expect(component).to.have.class('SignUp')
  })

  describe('inputs', () => {
    it('has a email input', () => {
      expect(component.find('input[name="email"]')).to.exist
    })

    it('has a password input', () => {
      expect(component.find('input[name="password"]')).to.exist
    })

    it('has a password-confirm input', () => {
      expect(component.find('input[name="passwordConfirm"]')).to.exist
    })
  })

  describe('when submitted empty', () => {
    beforeEach(() => {
      component.simulate('submit')
    })

    it('shows an error message on email field', () => {
      expect(component.find('input[name="email"] + .text-help')).to.contain('You must provide an email to sign up!')
    })

    it('shows an error message on password field', () => {
      expect(component.find('input[name="password"] + .text-help')).to.contain('You must provide a password to sign up!')
    })

    it('shows an error message on password confirmation field', () => {
      expect(component.find('input[name="passwordConfirm"] + .text-help')).to.contain('Please enter a password confirmation!')
    })
  })
})
