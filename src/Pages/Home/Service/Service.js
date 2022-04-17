import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
  const { name, img, price,description } = service;
  const navigate = useNavigate()
  return (
    <div className="col-lg-4">
      <Card className="shadow">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="name-title">{name}</Card.Title>
          <Card.Text className="price">$
            <span> {price}</span>
          </Card.Text>
          <Card.Text className="Description">
           {description}
          </Card.Text>
          <button className="service-btn" onClick={()=>navigate('/checkout')}>Process-Checkout</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
