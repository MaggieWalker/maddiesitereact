import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Contact = () => {
  return (
    <div id="contact" className="tab-pane">
      <section className="container">
        <h2 id="aboutHeader">Contact Me</h2>

        <div id="contact-section">
          <div className="container">
            <form
              action="/#contact"
              id="contact-form"
              method="post"
              role="form"
            >
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Name</label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <textarea
                  id="subject"
                  className="form-control"
                  name="subject"
                  placeholder="Your message here.."
                  style={{width: '100%'}}
                />
              </div>

              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  I would like to be added to Maddie's newsletter!
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>

          <div className="container">
            <div id="contactimage">
              <img
                id="aboutImage"
                src="https://i.pinimg.com/originals/35/6c/4c/356c4c6e7989ca4e73b71909e37b1b98.jpg"
                alt="App mockup"
              />
            </div>
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

export default connect(mapState)(Contact)
