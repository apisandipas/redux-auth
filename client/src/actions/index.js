import axios from 'axios'

export function signInUser ({email, password}) {
  return function (dispatch) {
    // Submit Email/Password to the server

    // If request is good,
    // - we need to update state to indicate use is authenticate
    // - save JWT token
    // - redirect to route '/feature'

    // If request is bad
    // - Show an error to the user
  }
}
