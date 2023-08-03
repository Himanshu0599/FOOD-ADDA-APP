import React from 'react';
import { Carousel_img } from '../constant';

const Carousel = ({ carouselData }) => {
  return (
    <div className='p-2 carousel-container flex'>
      {carouselData.map((item) => (
        <img
          key={item.id}
          className="carousel-img"
          alt="carousel-logo"
          src={Carousel_img + item.imageId}
        />
      ))}
    </div>
  );
};

export default Carousel;
