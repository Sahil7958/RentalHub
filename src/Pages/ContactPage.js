import React from 'react'
import Hero from '../Components/Hero'
import Contact from '../Components/Contact'

const ContactPage = () => {
  return (
    <div>
        <Hero title="Contact"/>
        <div className="contact-information">
            <div className="container">
                <div className="row">
                <div className="col-md-4">
                    <div className="contact-item">
                    <i className="fa fa-phone"></i>
                    <h4>Phone</h4>
                    <p>Vivamus ut tellus mi. Nulla nec cursus elit, id vulputate nec cursus augue.</p>
                    <a href="#">+1 333 4040 5566</a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="contact-item">
                    <i className="fa fa-envelope"></i>
                    <h4>Email</h4>
                    <p>Vivamus ut tellus mi. Nulla nec cursus elit, id vulputate nec cursus augue.</p>
                    <a href="#">contact@company.com</a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="contact-item">
                    <i className="fa fa-map-marker"></i>
                    <h4>Location</h4>
                    <p>212 Barrington Court New York str <br/> USA</p>
                    <a href="#">View on Google Maps</a>
                    </div>
                </div>
                </div>
            </div>
    </div>
    <Contact/>
    </div>
  )
}

export default ContactPage