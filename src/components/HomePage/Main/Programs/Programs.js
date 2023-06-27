import React from "react";
import "./style.css";
import restangle1 from "./images/Rectangle1.jpg";
import restangle2 from "./images/Rectangle2.png";
import { DefaultPlayer as Video } from "react-html5video";
import video from "./video/video.mp4";

const Programs = () => {
  return (
    <div className="result">
      <div className="result-info">
        <div className="result-title">
          <h2>Решение начать более 70% результата!</h2>
          <p>
            Хотите похудеть? Привести свое тело в форму? Сжечь лишние калории?
            Поставьте перед собой цель и посмотрите, как Gym project может
            помочь вам преобразовать вашу жизнь. Получите онлайн-доступ ко всем
            программам тренировок для любого телосложения и любого уровня
            подготовки.
          </p>
        </div>

        <div className="result-description">
          <p>
            155+ <span>Эксклюзивные программы от лучших тренеров</span>
          </p>
          <p>
            455+<span>Прошли программы</span>
          </p>
          <p>
            55+<span>Календари тренировок и трекеры прогресса</span>
          </p>
          <p>
            7550+<span>40 программ + питание</span>
          </p>
        </div>
      </div>

      <div className="result-img">
        <div className="result-img-firstChild">
          <img className="restangle1" src={restangle1} alt="img" />
        </div>

        <div className="img-absolute">
          <div>
            <Video  loop poster={restangle2}>
              <source src={video} type="video/webm" />
            </Video>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
