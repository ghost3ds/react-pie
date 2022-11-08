import React from 'react';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IconContext } from 'react-icons';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header_logo">
          <img src="./img/logo_pie.svg" alt="logo" />
          <div>
            <h1>REACT PIE</h1>
            <p>лучшие пироги во всем мире</p>
          </div>
        </div>
        <a href="/cart.html" className="button">
          <div className="header_right">
            <span>500 &#8381;</span>
            <IconContext.Provider
              value={{
                size: '24px',
                style: { verticalAlign: 'middle' },
                className: 'react-icon',
              }}
            >
              <AiOutlineShoppingCart />
            </IconContext.Provider>
            <span>2</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default Header;
