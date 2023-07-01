import React from "react";
import logo from './images/logo.png';
import './style.css';
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <header>
            <div className="logo">
               <Link to={'/'}> <img src={logo} alt="logo"/></Link>
            </div>
           <div  className="nav-bar">
                     <a href="#">Программы тренировок</a>
                     <a href="#">Тренеры</a>
                     <a href="#">Результаты</a>
                     <a href="#">Программы подписки</a>
                     <a href="#">Блог</a>
                     <a href="#" ><i className="fa fa-globe" ></i>
                        <select>
                            <option>RU</option>
                            <option>EN</option>
                        </select>
                     </a>
                     <a href="#"><i className="fa fa-telegram"></i></a>                
            </div>
            <div className="personal-aera">
                 <a href="#" >ЛИЧНЫЙ КАБИНЕТ</a>   
            </div>
        </header>
    )
}

export default Header