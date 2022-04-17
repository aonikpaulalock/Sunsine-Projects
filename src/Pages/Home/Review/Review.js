import React from 'react';
import { Card } from 'react-bootstrap';

const Review = ({review}) => {
  const {name,img,reviews} = review ;
  return (
    <div className="col-lg-4">
      <Card className="shadow text-center">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="name-title fs-4">{name}</Card.Title>
          <Card.Text className="text-muted fw-bold">
            {reviews}
          </Card.Text>
          <button className="service-btn">More-Reviews</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Review;