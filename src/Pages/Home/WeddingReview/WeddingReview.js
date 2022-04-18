import React from 'react';
import Review from '../Review/Review';
const reviews = [
  {
    id: 1,
    name: "Jhon Harry",
    reviews: 'Good wedding photographer.Nice experince of your work',
    img: 'https://i.ibb.co/hfK8RCB/Young.png'
  },
  {
    id: 2,
    name: "Json Roy",
    reviews: 'Nice work and best wedding photographer.',
    img: 'https://i.ibb.co/ygXZnYY/Ring.png'
  },
  {
    id: 3,
    name: "Jhon Harry",
    reviews: 'Good wedding photographer ,photo editor and nice wedding service providor ',
    img: 'https://i.ibb.co/cb0DrXC/Editingwebp.png'
  }
]
const WeddingReview = () => {
  return (
    <div className='container mt-sm-5 mt-3' id="REVIEW">
      <h1 className="heading pb-4">Customer Review</h1>
      <div className="row g-4">
        {
          reviews.map(review => <Review
            review={review}
            key={review.id}
          ></Review>)
        }
      </div>
    </div>
  );
};

export default WeddingReview;