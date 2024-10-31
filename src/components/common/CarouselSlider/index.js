import React from 'react';
import Slider from 'react-slick';

import CarouselSlide from "components/common/CarouselSlide";

import { premiumCars } from "constants/cars";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const  CarouselSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '20px',
    focusOnSelect: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
  };

  return (
    <div className="carousel-slider">
      <ul className="carousel-slider-list">
        <Slider {...settings}>
          {premiumCars.map((car, index) => {
            return (
              <CarouselSlide slide={car} index={index} key={index}/>
            )}
          )}
        </Slider>
      </ul>
    </div>
  );
}
