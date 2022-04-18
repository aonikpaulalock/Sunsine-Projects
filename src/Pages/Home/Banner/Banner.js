import React from 'react';
import banner from "../../../Images/Banner/Banner.png"
import '../../Styles/Banner.css'
const Banner = () => {
  return (
    <div className="container banner">
      <div className="row mt-sm-5 mt-3">
        <div className="col-md-6 order-2 order-sm-1">
          <div className="content mt-3 p-3">
            <h1> Hello,<br></br>I'm <span>Michel</span></h1>
            <h5>WEDDING PHOTOGRAPHER</h5>
            <p>I'm wedding photographer . I have 5 years experince of Wedding photography. I will try best photography service. </p>
            <button className="Hire-BTN">HIRE-NOW</button>
          </div>
        </div>
        <div className="col-md-6 order-1 order-sm-2">
          <img src={banner} alt="" className="img-thumbnail shadow" />
        </div>
      </div>
    </div>
  );
};

export default Banner;