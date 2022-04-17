import React from 'react';
import '../../Styles/Footer.css'
import facebook from '../../../Images/Icons/Facebook.png'
import youtube from '../../../Images/Icons/YouTube.png'
import instagram from '../../../Images/Icons/Instagram.png'
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear()
  return (
    <div className="footer p-5 mt-5">
     <div className="container text-center">
       <h3 className="head">Fellow Me</h3>
       <p className="paragraph">Always creative Photographty </p>
       <div className="image">
         <img src={facebook} alt=""  width="70px"className="bg-white m-3 rounded" />
         <img src={youtube} alt=""  width="70px"className="bg-white m-3 rounded" />
         <img src={instagram} alt=""  width="70px"className="bg-white m-3 rounded" />
       </div>
     <h5 className="fw-lighter text-muted"> &copy; All rights reserved Copyrights {year}</h5>
     </div>
    </div>
  );
};

export default Footer;