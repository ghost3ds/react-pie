import React from 'react';

import { IconContext } from 'react-icons';
import { RiArrowDownSFill } from 'react-icons/ri';

function Sort() {
  return (
    <div className="nav__sort">
      <IconContext.Provider
        value={{
          size: '16px',
          style: { verticalAlign: 'middle' },
          className: 'react-icon',
        }}
      >
        <RiArrowDownSFill />
      </IconContext.Provider>

      <a href="" className="nav__sort__link">
        По популярности
      </a>
      <div className="nav__sort__popup">
        <ul>
          <li className="nav__sort__item">
            <a href="" className="nav__sort__link">
              По цене
            </a>
          </li>
          <li className="nav__sort__item">
            <a href="" className="nav__sort__link">
              По сытности
            </a>
          </li>
          <li className="nav__sort__item">
            <a href="" className="nav__sort__link">
              По рейтингу
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sort;
