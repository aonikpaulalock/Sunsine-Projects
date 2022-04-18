import React from 'react';
import about from '../../Images/About/Me.png'
const About = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 mt-sm-5 mt-2 pt-sm-5 pt-2 order-sm-1 order-2">
        <div className="pt-sm-5 pt-2 content">
        <h1>My Goal</h1>
          <p className="py-3 fs-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, molestiae corporis vero id esse ad asperiores facilis soluta animi necessitatibus consequuntur tempora? Vitae, vel rem. Minima alias debitis quasi a!</p>
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
