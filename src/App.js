import React from 'react';

import Header from './components/Header';
import Category from './components/Category';
import Sort from './components/Sort';
import PieBlock from './components/PieBlock';
import './App.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      {/* **********Меню********* */}
      <nav className="container menu">
        <Category />
        <Sort />
      </nav>
      <h2 className="category__title">Все пироги</h2>
      {/* Карточки */}
      <div className="card__grid">
        <PieBlock />
        <PieBlock />
        <PieBlock />
        <PieBlock />
        <PieBlock />
        <PieBlock />
        <PieBlock />
        <PieBlock />
        <PieBlock />
        <PieBlock />
      </div>
    </div>
  );
}

export default App;
