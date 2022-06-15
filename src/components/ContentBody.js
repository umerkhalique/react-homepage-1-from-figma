import React, { Fragment } from 'react'
import image from "../assets/image.png"
import "../App.css";
function ContentBody() {
  return (
    <Fragment className="frag">
      <div className="container">
          <div>
            <div className="div-heading">
              <h1 className="h1-heading">Make remote work</h1>
              </div>
            <div></div>
            <div></div>
          </div>
          <div></div>
      </div>
      <div>
          <img className="img-1" src={image}/>
      </div>
    </Fragment>
  )
}

export default ContentBody