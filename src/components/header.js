import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import '../css/header.css'

class Header extends Component {

  render () {
    return (
      <div className='header'>
        <div className='title'>Stack Your Code</div>
		<div className='linkTab'>
			<NavLink className='link' to='/new' activeClassName='active'>New</NavLink>
			<NavLink className='link' to='/hot' activeClassName='active'>Hot</NavLink>
		</div>
      </div>
    )
  }
}

export default Header
