import React, { useState } from "react";
import SliderItem from "./sliderItem";
import img1 from "./images/img1.jpeg";
import img2 from "./images/img2.jpeg";
import Gr from "./images/Gr.png";
import "./style.css";


const SliderList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      url: Gr,
      title: "Подписка gym project первый шаг к твоей цели!",
      description: "Эксклюзивные программы от лучших тренеров",
    },
    {
      url: img1,
      title: "Slide 2",
      description: "This is the first slide.",
    },
    {
      url: img2,
      title: "Slide 3",
      description: "This is the second slide.",
    },
  ];
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="containerStyle">
      <div className="leftArrowStyle" onClick={goToPrevious}>
        &#60;
      </div>
      <div className="rightArrowStyle" onClick={goToNext}>
        &#62;
      </div>
      <SliderItem
        title={slides[currentIndex].title}
        url={slides[currentIndex].url}
        description={slides[currentIndex].description}
      />
    </div>
  );
};

export default SliderList;


