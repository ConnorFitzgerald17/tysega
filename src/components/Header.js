import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/logo.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="img" style={{ backgroundImage: `url(${logo})` }} />
    </div>
    <div className="content">
      <div className="inner">
        <h1>TYSEGA</h1>
        <p>Reliable, Friendly, Clean and Affordable Living</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('britannia')
            }}
          >
            WEST LOCATION
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('overbrook')
            }}
          >
            EAST LOCATION
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
