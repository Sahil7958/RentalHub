import React from 'react'

const Hero = (props) => {
  return (
        <>
            <div class="page-heading header-text">
                <div class="container">
                    <div class="row">
                    <div class="col-md-12">
                        <h1>{props.title}</h1>
                        <span>Pages / {props.title}</span>
                    </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Hero