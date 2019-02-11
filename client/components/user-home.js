import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = () => {
  return (
    <div className="tab-content">
      <div id="home" className="tab-pane active">
        <div id="title-container">
          <div id="title">
            <h1>Madeline Skillman // Birth and Women's Wellness</h1>
          </div>
          <div className="imgbox">
            <img
              className="center-fit"
              id="landing-image"
              src="https://arthistoryproject.com/site/assets/files/18634/maria-sibylla-merian-branch-of-west-indian-cherry-with-achilles-morpho-butterfly-1703-trivium-art-history.jpg"
            />
          </div>
        </div>
      </div>
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

export default connect(mapState)(UserHome)
