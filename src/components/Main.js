import PropTypes from 'prop-types'
import React from 'react'
import ottawa from '../images/ottawa.jpg'
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

  console.log(props.currentDay)
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
        <h2 className="major">WEST LOCATION</h2>
        <h2>Britannia Beach Terraces</h2>
        <h3>Overview</h3>
        <p>
          Located in west end Ottawa, our 36 Britannia Beach Terrace townhouse
          properties each have 2 bedrooms and a single car garage. Britannia is
          steps from the Ottawa River, which boasts a beautiful beach (Britannia
          Beach) and gives rise to the Ottawa River Pathway, which runs along
          the Ottawa River. It is perfect for walking, biking, picnics, and
          cross-county skiing in the winter. The ideal location to experience
          all Ottawa has to offer.
        </p>
        <p>
          The townhouse properties are minutes from parklands, cinemas, Bayshore
          Shopping Centre, Shopper's Drug Mart, Tim Hortons, and other
          amenities. Their proximity to highways and major transit stations
          allows easy commuter access anywhere in the city.
        </p>
        <p>
          In your spare time, take a short trip to Westboro's main shopping
          areas with trendy new shopping strip, boasting upscale restaurants,
          café's, yoga studios, art shops, and chic fashion boutiques.
        </p>
        <p>
          Britannia Beach Terraces is a terrific location with a friendly family
          beach vibe, and affordable prices.
        </p>
        <p>Call it your home!</p>
        <h2>Lats</h2>
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
        <a
          target="_blank"
          href="https://www.google.com/maps/place/101+Lats+Private,+Ottawa,+ON/@45.3576049,-75.802931,17.5z/data=!4m5!3m4!1s0x4cce00df0fce2df7:0xe87f9b6db4c973ac!8m2!3d45.3575841!4d-75.8015761"
        >
          Google Maps
        </a>
        <br />
        <br />
        <button
          onClick={() => {
            props.onCloseArticle()
            setTimeout(() => {
              props.onOpenArticle('contact')
            }, 350)
          }}
        >
          Apply now
        </button>
        <br />
        <br />

        <h2>Riga</h2>
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
        <a
          target="_blank"
          href="https://www.google.com/maps/place/135+Riga+Private,+Ottawa,+ON/@45.3570076,-75.8018704,17.5z/data=!4m5!3m4!1s0x4cce00df171e1467:0x805db4453c436d4b!8m2!3d45.3574539!4d-75.8012433"
        >
          Google Maps
        </a>
        <br />
        <br />
        <button
          onClick={() => {
            props.onCloseArticle()
            setTimeout(() => {
              props.onOpenArticle('contact')
            }, 350)
          }}
        >
          Apply now
        </button>
        {close}
      </article>

      <article
        id="overbrook"
        className={`${props.article === 'overbrook' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">EAST LOCATION</h2>
        <h2>Overview</h2>
        <h3>Presland Manor</h3>
        <p>
          Our Presland Manor townhouse properties sit on the southern edge of
          Overbrook, minutes east of Ottawa’s downtown core. The 17 townhouses
          offer both 2- and 3-bedroom options, and are located steps to St.
          Laurent Shopping Centre, Starbucks, Canadian Tire, and Trainyards
          outlet mall.
        </p>
        <p>
          It has unparalleled access to highway 417 (Ottawa major transit route
          from east to west), including two major public transit stations,
          allowing easy commuter access anywhere in the city.
        </p>
        <p>
          A recently completed pedestrian bridge crossing from Overbrook into
          Sandy Hill (Ottawa U) allows access into centretown where you can go
          shopping for fresh fruits and vegetables in the summer months in the
          Byward Market or enjoy all year around the beautiful bars,
          restaurants, and shops the city has to offer in Ottawa's oldest
          historic market.
        </p>
        <p>
          This area is excellent for anyone who wants to be close enough to all
          the action but in a quiet and quaint residential setting at an
          affordable price.
        </p>
        <OverSlider />
        <h2>Presland Road</h2>
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
        <p>
          Each townhouse comes with parking, renovated kitchens, bathrooms,
          hardwood flooring, all appliances, and boasts large outdoor spaces
        </p>
        <a
          target="_blank"
          href="https://www.google.com/maps/place/383+Presland+Rd,+Ottawa,+ON+K1K+2B3/@45.4239809,-75.6512855,17.5z/data=!4m5!3m4!1s0x4cce057cf26f4da7:0x4ff5b9e6d9996bb6!8m2!3d45.4241872!4d-75.6488905"
        >
          Google Maps
        </a>
        <br />
        <br />
        <button
          onClick={() => {
            props.onCloseArticle()
            setTimeout(() => {
              props.onOpenArticle('contact')
            }, 350)
          }}
        >
          Apply now
        </button>
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
          <img src={ottawa} alt="" />
        </span>
        <p>
          We are a Family Run Real Estate Investment and Asset Management
          Company founded in 2011. Our focus is on providing turnkey, clean,
          safe, and affordable residential housing to tenants in our East and
          West Ottawa locations. We pride ourselves on our hands-on approach to
          management, and work to make every tenant feel safe and at home in all
          our 53 rental units.
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
        <form action="https://formspree.io/f/xdobnjje" method="POST">
          <label>
            Email:*
            <input
              type="email"
              name="_replyto"
              required
              placeholder="Your email"
            />
          </label>
          <label>
            Phone:*
            <input
              type="tel"
              placeholder="Your phone number"
              id="phone"
              name="phone"
            />
          </label>
          <label>
            Name:*
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Location:*
            <select name="location" id="location" required>
              <option value="">Select a location</option>
              <option value="riga">Riga</option>
              <option value="lats">Lats</option>
              <option value="presland">Presland Road</option>
            </select>
          </label>
          <label>
            Move in date:*
            <input
              type="date"
              id="start"
              name="trip-start"
              min={`${props.currentYear}-${props.currentMonth}-${props.currentDay}`}
              required
            ></input>
          </label>
          <label>
            Your message:
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
        <p>All fields indicated with * are required</p>

        {close}
      </article>
    </div>
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  currentYear: PropTypes.any,
  currentMonth: PropTypes.string,
  currentDay: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
