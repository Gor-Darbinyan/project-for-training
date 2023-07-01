import React from "react";
import TrainAnytimeList from "./TrainAnytime/TrainAnytimeList";
import Carousel from "./Corusel";
import OurProgramsList from "./OurPrograms/OurProgramsList";
import Subscription from "./Subscription/Subscription";
// import Slider from './slider/sliderList'
import Programs from "./Programs/Programs";
import ClientsSayAboutUs from "./ClientsSayAboutUs";
import Experts from "./Experts/Experts";
import LastNewsList from "./LastNews/LastNewsList";
import WhatSeparatesUs from "./WhatSeparatesUs/WhatSeparatesUs";
import LastNewsPage from "../../LastNewsPage/LastNewsPage";
import { Outlet } from "react-router-dom";
import LastNewsItem from "./LastNews/LastNewsList";
const Main = () => {
  return (
    <div>
      <Carousel />
      {/* <Slider/>  */}
      <TrainAnytimeList />
      <OurProgramsList />
      <Subscription />
      <Programs />
      <ClientsSayAboutUs />
      <Experts />
      <LastNewsList />
      <WhatSeparatesUs />
      <Outlet/>
    </div>
  );
};

export default Main;
