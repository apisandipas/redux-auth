import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class SignIn extends Component {

  handleFormSubmit (data) {
    console.log(data)
    // Need to do something to log user in
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
          {touched && error}
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
        <button type='submit' className='btn btn-primary'>Sign In</button>
      </form>
    )
  }
}

function validate (values) {
  const errors = {}

  if (!values.email) {
    errors.email = 'You must provide an email to sign in!'
  }

  if (!values.password) {
    errors.password = 'You must provide a password to sign in!'
  }

  return errors
}

export default reduxForm({
  validate,
  form: 'SignIn'
})(SignIn)
