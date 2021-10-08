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
        <h1>TYSEGA Properties</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Etiam nec volutpat sem, eget tempor dui. Nunc nulla leo, dapibus vel
          interdum gravida.
        </p>
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
            Britannia
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('overbrook')
            }}
          >
            Overbrook
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
