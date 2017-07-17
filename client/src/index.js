import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import thunk from 'redux-thunk'

import { AUTH_USER } from  './actions/types'
import App from './components/app'
import requireAuth from './components/auth/requireAuth'
import Welcome from './components/Welcome'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import SignUp from './components/auth/SignUp'
import Feature from './components/Feature'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducers)
const token = localStorage.getItem('token')
if (token){
  store.dispatch({ type:AUTH_USER })
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Welcome} />
        <Route path='signin' component={SignIn} />
        <Route path='signout' component={SignOut} />
        <Route path='signup' component={SignUp} />
        <Route path='feature' component={requireAuth(Feature)} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'))
