import React from 'react';

function PieBlock(props) {
  return (
    <div className="card__container">
      <div className="card__img">
        <img src="./img/1.jpg" alt="pie"></img>
      </div>
      <h2 className="card__title">{props.title}</h2>
      <div className="card__options">
        <ul>
          <li className="card__options__text">300 гр.</li>
          <li className="card__options__text">600 гр.</li>
          <li className="card__options__text">900 гр.</li>
        </ul>
      </div>
      <div className="card__price">
        <div>
          от<span className="card__price__amount">{props.price}</span>&#8381;
        </div>
        <div className="card__btn">
          <button>
            Добавить<span className="card__amount">4</span>
          </button>
        </div>
      </div>
      <div className="card__rating"></div>
    </div>
  );
}

export default PieBlock;
