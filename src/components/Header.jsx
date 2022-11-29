import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import logo from '../assets/logo_pie.svg';

function Header() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <div className="header_logo">
            <img src={logo} alt="logo" />
            <div>
              <h1>REACT PIE</h1>
              <p>лучшие пироги во всем мире</p>
            </div>
          </div>
        </Link>

        <Link to="/cart" className="button">
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
        </Link>
      </div>
    </header>
  );
}

export default Header;
