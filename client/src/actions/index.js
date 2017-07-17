import axios from 'axios'
import { browserHistory } from 'react-router'
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actions/types'

const ROOT_URL = 'http://localhost:3090'

export function signInUser ({email, password}) {
  return function (dispatch) {
    // Submit Email/Password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // If request is good,
        // - update state to indicate use is authenticate
        dispatch({ type: AUTH_USER })
        // - save JWT token
        localStorage.setItem('token', response.data.token)
        // - redirect to route '/feature'
        browserHistory.push('/feature')
      })
      .catch(() => {
        // If request is bad
        // - Show an error to the user
        dispatch(authError('Bad Login Info'))
      })

  }
}

export function authError (error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signOutUser () {
  localStorage.removeItem('token')
  return {
    type: UNAUTH_USER
  }
}
