import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Postpartum = () => {
  return (
    <div id="postpartum" className="tab-pane">
      <section className="container">
        <h2 id="aboutHeader">Postpartum Care</h2>
        <div>
          <p id="aboutParag">
            Program areas because efficient collaborative consumption agile
            engaging incubator social return on investment. Challenges and
            opportunities black lives matter strategy; youth accessibility
            resist vibrant circular. Activate systems thinking, external
            partners move the needle design thinking. Leverage shared value;
            paradigm, indicators design thinking expose the truth. Resist,
            contextualize, segmentation social intrapreneurship, systems
            thinking triple bottom line. Corporate social responsibility
            human-centered; optimism preliminary thinking program areas.
          </p>
          <div id="aboutmockup">
            <img
              id="aboutImage1"
              src="https://i.pinimg.com/originals/31/e0/58/31e0584cb37f8f82b8793af856ed63a4.jpg"
              alt="App mockup"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(Postpartum)
