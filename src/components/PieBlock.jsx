import React, { useState } from 'react';

function PieBlock({ title, price, imageUrl, sizes }) {
  const [count, setCount] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const onClickAdd = () => setCount(count + 1);

  return (
    <div className="card__container">
      <div className="card__img">
        <img src={imageUrl} alt="pie"></img>
      </div>
      <h2 className="card__title">{title}</h2>
      <div className="card__options">
        <ul>
          {sizes.map((size, i) => (
            <li
              key={i}
              onClick={() => setActiveSize(i)}
              className={activeSize === i ? 'active' : ''}
            >
              {size} гр.
            </li>
          ))}
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
