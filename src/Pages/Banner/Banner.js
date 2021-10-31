import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="mt-5 pt-2">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.deliveryhero.io/image/fd-bd/LH/qub5-hero.jpg?width=1600&height=400&quality=45"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.deliveryhero.io/image/fd-bd/LH/u3wk-hero.jpg?width=1600&height=400&quality=45"
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.deliveryhero.io/image/fd-bd/LH/azko-hero.jpg?width=1600&height=400&quality=45"
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
