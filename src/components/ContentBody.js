import React, { Fragment } from "react";
import image from "../assets/image.png";
import "../App.css";
import image1 from '../assets/client-databiz.svg'
import image2 from '../assets/client-audiophile.svg'
import image3 from '../assets/client-meet.svg'
import image4 from '../assets/client-maker.svg'
function ContentBody() {
  return (
    <Fragment>
      <div>
        <div>
          <h1 className="h1-heading">Make remote work</h1>
          <div>
            <p className="para">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
          </div>
          <div className="btn">
            <button className="btn-inner">
              <p className="ppp">Learn more</p>
            </button>
          </div>
        </div>
        
          <img className="img11" src={image1} />
          <img className="img22" src={image2} />
          <img className="img33" src={image3} />
          <img className="img44" src={image4} />
        
      </div>
      <div>
        <img className="img-1" src={image} />
      </div>
      <div className="div-under"></div>
    </Fragment>
  );
}

export default ContentBody;
