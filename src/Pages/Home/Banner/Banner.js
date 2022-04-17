import React from 'react';
import banner from "../../../Images/Banner/Banner.png"
import '../../Styles/Banner.css'
const Banner = () => {
  return (
    <div className="container banner">
      <div className="row mt-5">
        <div className="col-md-6">
          <div className="content mt-3 p-3">
            <h1> Hello,<br></br>I'm <span>JHON</span></h1>
            <h5>WEDDING PHOTOGRAPHER</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ea ex obcaecati, distinctio quos maiores quaerat sapiente atque id amet!</p>
            <button className="Hire-BTN">HIRE-NOW</button>
          </div>
        </div>
        <div className="col-md-6">
          <img src={banner} alt="" className="img-thumbnail shadow" />
        </div>
      </div>
    </div>
  );
};

export default Banner;