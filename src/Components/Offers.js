import React from 'react'

const Offers = () => {
  return (
    <div class="services">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2>Our <em>Offers</em></h2>
              <span>Aliquam id urna imperdiet libero mollis hendrerit</span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-item">
              <img src={require("../images/offer-1-720x480.jpg")} alt=""/>
              <div class="down-content">
                <h4>Lorem ipsum dolor sit amet</h4>
                <div style={{ marginBottom:"10px" }}>
                  <span>from <sup>$</sup>120 per weekend</span>
                </div>
                <p>Sed tincidunt dictum lobortis. Aenean tempus diam vel augue luctus dignissim. Nunc ornare leo tortor.</p>
                <a href="offers.html" class="filled-button">Book Now</a>
              </div>
            </div>
            
            <br/>
          </div>
          <div class="col-md-4">
            <div class="service-item">
              <img src={require("../images/offer-2-720x480.jpg")} alt=""/>
              <div class="down-content">
                <h4>Odio libero vel autem atque consequuntur</h4>
                <div style={{ marginBottom:"10px" }}>
                  <span>from <sup>$</sup>120 per weekend</span>
                </div>
                <p>Sed tincidunt dictum lobortis. Aenean tempus diam vel augue luctus dignissim.</p>
                <a href="offers.html" class="filled-button">Book Now</a>
              </div>
            </div>

            <br/>
          </div>
          <div class="col-md-4">
            <div class="service-item">
              <img src={require("../images/offer-3-720x480.jpg")} alt=""/>
              <div class="down-content">
                <h4>Libero eveniet sint nemo beatae</h4>
                <div style={{ marginBottom:"10px" }}>
                  <span>from <sup>$</sup>120 per weekend</span>
                </div>
                <p>Sed tincidunt dictum lobortis. Aenean tempus diam vel augue luctus dignissim.</p>
                <a href="offers.html" class="filled-button">Book Now</a>
              </div>
            </div>

            <br/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offers