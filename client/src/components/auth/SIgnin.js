import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

class SignIn extends Component {

  handleFormSubmit (data) {
    console.log(data)
    // Need to do something to log user in
  }

  render () {
    const { handleSubmit, fields: { email, password } } = this.props
    console.log(this.props)
    return (  
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input {...email} type='text' className='form-control' />
        </fieldset>
        <fieldset className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input {...password} type='password' className='form-control' />
        </fieldset>
        <button type='submit' className='btn btn-primary'>Sign In</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'SignIn',
  fields: ['email', 'password']
})(SignIn)
