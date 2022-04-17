import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';

const Service = ({ service }) => {
  const { name, img, price } = service;
  return (
    <div className="col-lg-4">
      <Card className="shadow">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="name-title">{name}</Card.Title>
          <Card.Text className="price">$
            <span> {price}</span>
          </Card.Text>
          <button className="service-btn">Process-Checkout</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
