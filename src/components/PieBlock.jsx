import React, { useState } from 'react';

function PieBlock({ title, price }) {
  const [count, setCount] = useState(0);
  const onClickAdd = () => setCount(count + 1);

  return (
    <div className="card__container">
      <div className="card__img">
        <img src="./img/1.jpg" alt="pie"></img>
      </div>
      <h2 className="card__title">{title}</h2>
      <div className="card__options">
        <ul>
          <li className="card__options__text">300 гр.</li>
          <li className="card__options__text">600 гр.</li>
          <li className="card__options__text">900 гр.</li>
        </ul>
      </div>
      <div className="card__price">
        <div>
          от<span className="card__price__amount">{price}</span>&#8381;
        </div>
        <div className="card__btn">
          <button onClick={onClickAdd}>
            Добавить<span className="card__amount">{count}</span>
          </button>
        </div>
      </div>
      <div className="card__rating"></div>
    </div>
  );
}

export default PieBlock;
