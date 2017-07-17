import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import * as actions from '../../actions'
import { connect } from 'react-redux'

class SignUp extends Component {

  handleFormSubmit ({ email, password, passwordConfirm }) {
    console.log(email, password, passwordConfirm)
  }
  
  renderField (field) {
    const { meta: { touched, error } } = field
    const className = `form-group ${(touched && error) ? 'has-danger' : ''}`

    return (
      <fieldset className={className}>
        <label htmlFor={field.label}>{field.label}</label>
        <input
          id={field.label}
          type={field.type}
          className='form-control'
          {...field.input}
        />
        <div className='text-help'>
          {touched ? error : error}
        </div>
      </fieldset>
    )
  }

  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <Field
          name='email'
          label='Email'
          type='text'
          component={this.renderField}
        />
        <Field
          name='password'
          label='Password'
          type='password'
          component={this.renderField}
        />
        <Field
          name='passwordConfirm'
          label='Password Confirm'
          type='password'
          component={this.renderField}
        />
        <button type='submit' className='btn btn-primary'>Sign Up</button>
      </form>
    )
  }
}

function validate (values) {
  const errors = {}
  console.log(values)

  if (!values.email) {
    errors.email = 'You must provide an email to sign up!'
  }

  if (!values.password) {
    errors.password = 'You must provide a password to sign up!'
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation!'
  }

  if (values.password !== values.passwordConfirm) {
    errors.password = 'Passwords must match!'
  }

  return errors
}
 
export default reduxForm({
  validate,
  form: 'SignUp'
})(
  connect(null, actions)(SignUp)
)
