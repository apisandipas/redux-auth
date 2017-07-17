import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Header extends Component {
  render () {
    const links = this.props.authenticated ?
      (
        <li className='nav-item'>
          <Link to='/signout' className='nav-link'>Sign Out</Link>
        </li>
      ) : (
        [
          <li className='nav-item' key={1}>
            <Link to='/signup' className='nav-link'>Sign Up</Link>
          </li>,
          <li className='nav-item' key={2}>
            <Link to='/signin' className='nav-link'>Sign In</Link>
          </li>
        ]
      )

    return (
      <nav className='navbar navbar-light'>
        <Link to='/' className='navbar-brand'>Redux Auth</Link>
        <ul className='nav navbar-nav'>
          {links}
        </ul>
      </nav>
    )
  }
}

function mapStateToProps (state){
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header)
