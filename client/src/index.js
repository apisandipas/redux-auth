import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import thunk from 'redux-thunk'

import App from './components/app'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import SignUp from './components/auth/SignUp'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='/signin' component={SignIn} />
        <Route path='/signout' component={SignOut} />
        <Route path='/signup' component={SignUp} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'))
