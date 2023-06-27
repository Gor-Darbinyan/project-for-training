import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Couch1 from "./images/Couch1.png";
import Couch2 from "./images/Couch2.png";
import Couch3 from "./images/Couch3.png";
import Couch4 from "./images/Couch4.png";
import Couch5 from "./images/Couch5.png";

const Experts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderData = [
    {
      id: 1,
      imageSrc: Couch1,
      caption: "Slide 1",
    },
    {
      id: 2,
      imageSrc: Couch2,
      caption: "Slide 2",
    },
    {
      id: 3,
      imageSrc: Couch3,
      caption: "Slide 10",
    },
    {
      id: 4,
      imageSrc: Couch4,
      caption: "Slide 1",
    },
    {
      id: 5,
      imageSrc: Couch5,
      caption: "Slide 2",
    },
    {
      id: 6,
      imageSrc: Couch1,
      caption: "Slide 10",
    },
    {
      id: 7,
      imageSrc: Couch2,
      caption: "Slide 2",
    },
    {
      id: 8,
      imageSrc: Couch3,
      caption: "Slide 10",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      // Hide the previous slide on the left
      const previousSlide = document.querySelector(
        `.slick-slide[data-index="${current}"]`
      );
      if (previousSlide) {
        previousSlide.classList.add("hide-left");
      }

      // Show the next slide on the right
      const nextSlide = document.querySelector(
        `.slick-slide[data-index="${next}"]`
      );
      if (nextSlide) {
        nextSlide.classList.add("show-right");
      }

      setCurrentSlide(next);
    },
    afterChange: () => {
      // Remove the hide-left and show-right classes after the animation completes
      const slides = document.querySelectorAll(".slick-slide");
      slides.forEach((slide) => {
        slide.classList.remove("hide-left");
        slide.classList.remove("show-right");
      });
    },
  };

  return (
    <div className="experts">
      <div className="container">
        <div className="experts-title">
          <h2>Тренировки под руководством экспертов</h2>
          <p>
            Супер тренеры Gym project — это лучшие профессионалы мира фитнеса.
            Они уже научили миллионы таких же людей, как вы, добиваться
            результатов, которые они считали невозможными.
          </p>
        </div>
        <Slider {...settings}>
          {sliderData.map((item,id) => {
            return (
              <div key={id}>
                <img src={item.imageSrc} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Experts;
