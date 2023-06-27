import React from "react";
import logo from "./images/logo.png";
import img from "./images/img.png";
import facebook from './images/facebook.png';
import telegram from './images/telegram.png';
import twinter from './images/twinter.png';
import instagram from './images/instagram.png';
import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-footer">
        <div className="first-child">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <a href="#">Программы тренировок</a>
            <a href="#">Тренеры</a>
            <a href="#">Результаты</a>
            <a href="#">Программы подписки</a>
            <a href="#">Блог</a>
          </div>
          <div className="cobinet">
            <a href="#">ЛИЧНЫЙ КАБИНЕТ</a>
          </div>
        </div>
          <div><hr></hr></div>

        <div className="last-child">
          <div className="our-partner">
            <span>Наш партнер:</span>
            <img src={img} alt="" />
          </div>
          <div className="social-link">
            <span>
              Copyright © 2018-2021 Online Gym project. All Rights Reserved.
            </span>
              <img src={facebook} alt=""/>
              <img src={telegram} alt=""/>
              <img src={twinter} alt=""/>
              <img src={instagram} alt=""/>
          </div>
          <div>
            <span>Разработано:</span>
            <span>PROMODEX</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
