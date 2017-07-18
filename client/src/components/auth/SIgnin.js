import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import * as actions from '../../actions'
import { connect } from 'react-redux'

class SignIn extends Component {

  handleFormSubmit ({ email, password }) {
    // Need to do something to log user in
    this.props.signInUser({ email, password })
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

  renderAlert () {
    if (this.props.errorMessage) {
      return (
        <div className='alert alert-danger'>
          <strong>Opps!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render () {
    const { handleSubmit } = this.props
    return (
      <form className='SignIn' onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
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
        {this.renderAlert()}
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

function mapStateToProps (state) {
  return {
    errorMessage: state.auth.error
  }
}

export default reduxForm({
  validate,
  form: 'SignIn'
})(
  connect(mapStateToProps, actions)(SignIn)
)
