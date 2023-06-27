import React from "react";
const OurProgramsItem = ({ url1, url2, name }) => {
  return (
    <div className="card-item">
      <img className="img1" src={url1} alt="Avatar" />
      <div className="card-title">
        <div>
          <h4>зал Утреннее кардио 2.</h4>
          <h4> Сожги весь жир! </h4>
        </div>

        <div className="card-info">
          <div>
            <p>Кол-во тренировок</p>
            <p>Тренировки от и до</p>
            <p>Интенсивность</p>
          </div>

          <div className="quantity">
            <p>
              15<i className="fa fa-calendar"></i>
            </p>
            <p>
              18-30 мин<i className="fa fa-clock-o"></i>
            </p>
            <p>
              Низкая
              <i className="fa fa-line-chart"></i>
            </p>
          </div>
        </div>

        <div className="card-triner">
          <div className="triner-name">
            <img src={url2} alt='img'/>
            <span>{name}</span>
          </div>
          <div className="users">
            <p>
              2272
            </p>
            <i className="fa fa-user-o"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProgramsItem;
