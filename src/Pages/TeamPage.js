import React from 'react'
import Hero from '../Components/Hero'

const TeamPage = () => {
  return (
    <div>
        <Hero title="Team"/>
        <div class="team" style={{ margin: "0" }}>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2>Our team <em>members</em></h2>
              <span>Suspendisse a ante in neque iaculis lacinia</span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="team-item">
              <img src={require("../images/team-image-1-646x680.jpg")} alt=""/>
              <div class="down-content">
                <h4>William Smith</h4>
                <span>Co-Founder</span>
                <p>In sem sem, dapibus non lacus auctor, ornare sollicitudin lacus. Aliquam ipsum urna, semper quis.</p>

                <p>
                  <a href="#"><span><i class="fa fa-linkedin"></i></span></a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="team-item">
              <img src={require("../images/team-image-2-646x680.jpg")} alt=""/>
              <div class="down-content">
                <h4>Mary Houston</h4>
                <span>Chief Marketing Officer</span>
                <p>In sem sem, dapibus non lacus auctor, ornare sollicitudin lacus. Aliquam ipsum urna, semper quis.</p>
                <p>
                  <a href="#"><span><i class="fa fa-linkedin"></i></span></a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="team-item">
              <img src={require("../images/team-image-3-646x680.jpg")} alt=""/>
              <div class="down-content">
                <h4>John Doe</h4>
                <span>Financial Analyst</span>
                <p>In sem sem, dapibus non lacus auctor, ornare sollicitudin lacus. Aliquam ipsum urna, semper quis.</p>
                <p>
                  <a href="#"><span><i class="fa fa-linkedin"></i></span></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default TeamPage