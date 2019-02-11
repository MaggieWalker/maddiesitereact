import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = () => (
  <div>
    <h1>Lunar Women</h1>
    <nav>
      <div className="navbar-nav">
        <a className="navbar-brand" href="/">
          Home
        </a>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/info">
            About
          </a>
          <a className="nav-item nav-link" href="/birth">
            Birth Doula Services
          </a>
          <a className="nav-item nav-link" href="/prenatal">
            Prenatal Wellness
          </a>
          <a className="nav-item nav-link" href="/postpartum">
            Postpartum Care
          </a>
          <a className="nav-item nav-link" href="/lunarwomen">
            Lunar Women
          </a>
          <a className="nav-item nav-link active" href="/contact">
            Contact Me<span className="sr-only">(current)</span>
          </a>
        </div>
      </div>
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
