import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import LotsSlider from './lots'
import RigaSlider from './riga'
import OverSlider from './overbrook'

const Main = props => {
  let close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    ></div>
  )
  return (
    <div
      ref={props.setWrapperRef}
      id="main"
      style={props.timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <article
        id="britannia"
        className={`${props.article === 'britannia' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">The Britannia</h2>
        <h2>Overview</h2>
        <p>
          The townhouse properties are in the centre of Britannia, which is a
          group of neighbourhoods at the west end of Ottawa. Britannia is steps
          from, and faces the Ottawa River, which boasts a beautiful beach
          (Britannia Beach) and gives rise to the Ottawa River Pathway, which
          runs along almost the entirety of the Ottawa River a perfect for
          walking, biking, and picnics. The perfect location to experience all
          Ottawa has to offer.
        </p>
        <p>
          The area surrounding the townhouse property is centrally located
          because of its proximity to Britannia Park and Beach, a cinema,
          Bayshore Shopping Centre, Shopper’s Drug Mart, Tim Hortons and on
          multiple major bus routes.
        </p>
        <p>
          It is a short bike ride or bus to Westboro’s main shopping area’s with
          all the trendy new shops and café. The townhouses are right off a
          major artery in the City of Ottawa making it easy to access Ottawa’s
          downtown core and/or travel outside of the city.
        </p>
        <p>
          Additionally, the Bayshore Shopping Centre is very close and is a
          transportation node for buses; the city is working on the construction
          of a light rail transit station, which would give residents of the
          area express transit into the downtown area.
        </p>
        <h2>101 Lats</h2>
        <LotsSlider />
        <p>
          RENOVATED 2 bedroom 2 bath town home with a garage. Located in
          Britannia, this is a great town home available for rent February 1st.
          $1800 / month plus Heat (gas) and Hydro. Don't miss this!
        </p>
        <p>Includes:</p>
        <ul>
          <li>2 bedrooms</li>
          <li>2 baths</li>
          <li>Hardwood floors</li>
          <li>Fridge, stove, washer and dryer</li>
          <li>1Parking space in the Garage</li>
        </ul>
        <p>Walking distance to:</p>
        <ul>
          <li>OC Transpo Stations</li>
          <li>Bayshore shopping centre</li>
          <li>The Ottawa River</li>
        </ul>
        <p>*Call or text Don for a showing 613-302-3275</p>
        <h2>135 Riga</h2>
        <RigaSlider />
        <p>
          Located in Britannia, this is a great town home available for rent
          September 1st. $1750 / month plus Heat (Natural Gas / Forced Air) and
          Hydro. Don't miss this!
        </p>
        <p>Includes:</p>
        <ul>
          <li>2 bedrooms</li>
          <li>2 baths</li>
          <li>Hardwood floors</li>
          <li>Fridge, stove, washer and dryer</li>
          <li>1 Parking space in the Garage</li>
        </ul>
        <p>Walking distance to:</p>
        <ul>
          <li>OC Transpo Stations</li>
          <li>Bayshore shopping centre</li>
          <li>The Ottawa River</li>
        </ul>
        <p>
          *Call or text Joelle for a showing 613-316-0081 or Yvan 613-816-7923
        </p>
        {close}
      </article>

      <article
        id="overbrook"
        className={`${props.article === 'overbrook' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">The Overbrook</h2>
        <OverSlider />
        <h2>383 Presland Road</h2>
        <p>
          Located in Overbrook, this is a great town home available for rent.
          $1795 / month plus utilities (Gas Heat, Hydro and Water). Don't miss
          this!
        </p>
        <p>Includes:</p>
        <ul>
          <li>3 bedrooms</li>
          <li>1 baths</li>
          <li>Hardwood floors</li>
          <li>Fridge, stove, washer and dryer</li>
          <li>1 Parking space in the Garage</li>
        </ul>
        <p>Walking distance to:</p>
        <ul>
          <li>Train yards outlet mall</li>
          <li>St Laurent shopping centre</li>
          <li>RCMP</li>
          <li>University of Ottawa</li>
        </ul>
        <p>*Call or text Don for a showing 613-302-3275</p>
        {close}
      </article>

      <article
        id="about"
        className={`${props.article === 'about' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">About</h2>
        <span className="image main">
          <img src={pic03} alt="" />
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
          eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat
          volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam.
          Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero
          et malesuada fames ac ante ipsum primis in faucibus. Cras viverra
          ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.
        </p>
        {close}
      </article>

      <article
        id="contact"
        className={`${props.article === 'contact' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Contact</h2>
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4"></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Reset" />
            </li>
          </ul>
        </form>
        <ul className="icons">
          <li>
            <a
              href="https://twitter.com/HuntaroSan"
              className="icon fa-twitter"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://codebushi.com" className="icon fa-facebook">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://codebushi.com" className="icon fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/codebushi/gatsby-starter-dimension"
              className="icon fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
        {close}
      </article>
    </div>
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
