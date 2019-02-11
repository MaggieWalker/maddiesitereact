import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Info = () => {
  return (
    <div id="info" className="tab-pane">
      <section className="container">
        <h2 id="aboutHeader">About</h2>
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
          <div id="aboutmaddie">
            <img
              id="aboutImage1"
              src="https://i.imgur.com/2KRG3VX.jpg"
              alt="App mockup"
            />
            <img
              id="aboutImage2"
              src="https://i.imgur.com/3wJdU6l.jpg"
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

export default connect(mapState)(Info)
