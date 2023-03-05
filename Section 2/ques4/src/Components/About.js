import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    // if (!this.props.data) return null;

    const name = 'Exercise Application'
    const street = '12 Main Street';
    const city = 'Bangalore'
    const state = 'Karnataka';
    const zip = '560098';
    const phone = '7044633714';
    const email = 'mudit.nawalgaria@gmail.com';
    

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">

            <div className="nine columns main-col">
              <h2>About Us</h2>

              <p>We strive for a healthy nation by providing best in class services and software tools.</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
              
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
