import React from 'react';
import about from '../../Images/About/Me.png'
const About = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 mt-sm-5 mt-2 pt-sm-5 pt-2 order-sm-1 order-2">
          <div className="pt-sm-5 pt-2 content">
            <h1>My Goal</h1>
            <p className="py-3 fs-5">My goal is to be a good quality developer. i will try all time learning and practice do. i will try dailly 10-12 hour practicing .then achive my goal because practice makes man perfect
            </p>
            <button className="Hire-BTN">See-More</button>
          </div>
        </div>
        <div className="col-md-6 order-sm-2 order-1">
          <img src={about} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default About;
