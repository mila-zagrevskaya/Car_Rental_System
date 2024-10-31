import React, {useState} from "react";

import Button from "components/common/Button";

const CarouselSlide = (prop) => {
  const { name, rating, photo, price, characteristics, id } = prop.slide;
  const [isLike, setLike] = useState(false);

  const setRating = (star) => {
    const stars = [];
    for (let i = 0; i < star; i++) {
      stars.push(<span key={i} className="star-icon"></span>);
    }
    return stars;
  }

  return (
      <li className="carousel-slider-item" key={id}>
        <div className="carousel-item-container">
          <div className="carousel-item-description">
            <span className="carousel-item-name">{name}</span>
              <div className="carousel-item-parameters">
                <div className="carousel-item-rating">
                  { setRating(rating) }
                </div>
                <p className="carousel-item-characteristics">
                  <span> {characteristics.speed}</span>
                  <br />
                  <span> {characteristics.volumeEngine}</span>
                </p>
                <ul className="parameter-list">
                  <li>
                    <span className="parameter-name">Stock# : </span>
                    <span className="parameter-value">
                      {characteristics.stock}
                    </span>
                  </li>
                  <li>
                    <span className="parameter-name"> Model# : </span>
                    <span className="parameter-value">
                      {characteristics.model}
                    </span>
                  </li>
                  <li>
                    <span className="parameter-name">Vin# : </span>
                    <span className="parameter-value">
                      {characteristics.vin}
                    </span>
                  </li>
                </ul>
                <div className="additional-options">
                  <span className="option luggage-icon">
                    {characteristics.luggage}
                  </span>
                  <span className="option persons-icon">
                    {characteristics.persons}
                  </span>
                  <span className="option car-doors-icon">
                    {characteristics.doors}
                  </span>
                </div>
              </div>
              <Button
                text={`$${price}/DAY`}
                className="carousel-item-button"
              />
          </div>
          <div className="carousel-item-presentation">
            <div className="carousel-item-block-icon">
              <Button
                className={`carousel-button like-button-icon ${isLike ? "highlighted" : ""}`}
                type="button"
                onClick={() => setLike(!isLike)}
              />
              <Button
                className="carousel-button menu-button-icon icon-dots"
                type="button"
              />
            </div>
            <img
              src={photo}
              alt={`${name}`}
              className="carousel-item-photo"
            />
          </div>
        </div>
       </li>
  );
};

export default CarouselSlide;
