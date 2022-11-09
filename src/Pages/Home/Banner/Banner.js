import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="my-5">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="carousel-image">
            <img
              className="d-block w-100"
              src={"https://i.ibb.co/StVTpVk/bangladesh-3535023-1280.jpg"}
              alt="First slide"
            />
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"https://i.ibb.co/JkVcyV3/mehndi-designs-1745052-1280.jpg"}
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"https://i.ibb.co/SnwdQNY/woman-1867093-1280.jpg"}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
