import React from 'react';
import { useNavigate } from 'react-router-dom';
import notfound from  '../../../Images/Notfound/NotFoundPage1.webp'
const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div className='container'>
      <div className="row my-5">
        <div className="col-md-6 order-2 order-md-1">
          <div className='content pt-5'>
            <div>
              <h1>Page are not found....<span className="text-danger fw-bold"> 404 </span></h1>
              <p>Somethings went wrong . Please try again later or click bellow button and go to home..</p>
              <button className='Hire-BTN' onClick={() => navigate('/')}>Back-Home</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 order-1 order-md-2">
          <img src={notfound} alt="" className='img-fluid w-100' />
        </div>
      </div>
    </div>
  );
};

export default Notfound;