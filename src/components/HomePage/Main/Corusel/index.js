import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Couch1 from "./images/Gr.png";
import Couch2 from "./images/img1.jpeg";
import Couch3 from "./images/img2.jpeg";

const Corusel = () => {
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
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
    <div className="subscription-gym">
      <Slider {...settings}>
        {sliderData.map((item,id) => {
          return (
            <div className="exclusive-programs" key={id}>
              <div className="description">
                <h2>Подписка gym project первый шаг к твоей цели!</h2>
                <p>Эксклюзивные программы от лучших тренеров</p>
                <button>начать</button>
              </div>
              <img src={item.imageSrc} />
            </div>
          );
        })}
      </Slider>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,64L80,101.3C160,139,320,213,480,224C640,235,800,181,960,133.3C1120,85,1280,43,1360,21.3L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>
  );
};

export default Corusel;
