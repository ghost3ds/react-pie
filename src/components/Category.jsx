import React from 'react';

function Category() {
  return (
    <div className="nav__category">
      <ul className="nav__list">
        <li className="nav__item item-all">
          <a href="" className="nav__item__link">
            Все
          </a>
        </li>
        <li className="nav__item">
          <a href="" className="nav__item__link">
            Осетинские
          </a>
        </li>
        <li className="nav__item">
          <a href="" className="nav__item__link">
            Мясные
          </a>
        </li>
        <li className="nav__item">
          <a href="" className="nav__item__link">
            Закрытые
          </a>
        </li>
        <li className="nav__item">
          <a href="" className="nav__item__link">
            Сытные
          </a>
        </li>
        <li className="nav__item">
          <a href="" className="nav__item__link">
            Русские
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Category;
