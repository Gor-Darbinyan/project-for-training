import React from 'react'
import Slider from "react-slick";
import { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Picture1 from './images/Picture1.png'
import Picture2 from './images/Picture2.png'
import Picture3 from './images/Picture3.png'
import Picture4 from './images/Picture4.png'
import Picture5 from './images/Picture5.png'
import OurProgramsItem from './OurProgramItem'
import  './OurPrograms.css'

const OurProgramsList = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
  const data = [
    {
      url1:Picture1,
      url2:Picture5,
      name:'Ольга Дерендеева'
    },
    {
      url1:Picture2,
      url2:Picture5,
      name:'Ольга Дерендеева'
    },
    {
      url1:Picture3,
      url2:Picture5,
      name:'Ольга Дерендеева'
    },
    {
      url1:Picture4,
      url2:Picture5,
      name:'Ольга Дерендеева'
    },
    {
      url1:Picture1,
      url2:Picture5,
      name:'Ольга Дерендеева'
    },
    {
      url1:Picture2,
      url2:Picture5,
      name:'Ольга Дерендеева'
    },
    {
      url1:Picture3,
      url2:Picture5,
      name:'Ольга Дерендеева'
    },
    {
      url1:Picture4,
      url2:Picture5,
      name:'Ольга Дерендеева'
    }
  ]
  return (
    <div className='container'>
    <Slider {...settings}>
      {
        data.map((item,index)=>{
          return <OurProgramsItem key={index} url1={item.url1} url2={item.url2} name={item.name}/>
        })
      }
          </Slider>
    </div>

  )
}

export default OurProgramsList
