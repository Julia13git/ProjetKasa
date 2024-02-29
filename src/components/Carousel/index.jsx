import React, { useState } from "react";
import { housingList } from "../../datas/housingList";
import "./carousel.scss";

function Carousel({ id }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <>
      {housingList
        .filter((housing) => housing.id === id)
        .map((housing) => {
          const pictures = housing.pictures;

          const nextSlide = () => {
            setCurrentImage((prevSlide) =>
              prevSlide === pictures.length - 1 ? 0 : prevSlide + 1
            );
          };
          const prevSlide = () => {
            setCurrentImage((prevSlide) =>
              prevSlide === 0 ? pictures.length - 1 : prevSlide - 1
            );
          };

          return (
            <section className="carousel" key={housing.id}>
              <img src={housing.pictures[currentImage]} alt="" />
              <p>
                {currentImage + 1}/{pictures.length}
              </p>
              <i className="fa-solid fa-chevron-left" onClick={prevSlide}></i>
              <i className="fa-solid fa-chevron-right" onClick={nextSlide}></i>
            </section>
          );
        })}
    </>
  );
}

export default Carousel;
