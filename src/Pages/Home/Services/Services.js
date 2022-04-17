import React from 'react';
import Service from '../Service/Service';
import '../../Styles/Service.css'
const services = [
  {
    id: 1,
    name: 'Outdoor PhotoGraphy',
    price: 300,
    img:'https://i.ibb.co/0VGR7Cm/Service-1.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. .'
  },
  {
    id: 2,
    name: 'Indoor PhotoGraphy',
    price: 500,
    img:'https://i.ibb.co/fM2ThwJ/Service-3.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit..'
  },
  {
    id: 3,
    name: 'Editing Photo',
    price: 100,
    img:'https://i.ibb.co/xGFy9dS/Service-2.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit..'
  }
]
const Services = () => {
  return (
    <div id="SERVICES" className="container mt-5">
      <h1 className="heading py-3">SERVICES</h1>
      <div className="row g-4">
        {
         services.map(service => <Service 
          service={service}
          key={service.id}
          ></Service>) 
        }
      </div>
    </div>
  );
};

export default Services;