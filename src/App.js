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
        <PieBlock title="Амстердамский пирог" price="395" />
        <PieBlock title="Сибирский пирог" price="395" />
        <PieBlock title="Ирландский пирог" price="395" />
        <PieBlock title="Белорусский пирог" price="395" />
        <PieBlock title="Мюнхенский пирог" price="395" />
        <PieBlock title="Греческий пирог" price="395" />
        <PieBlock title="Немецкий пирог" price="395" />
        <PieBlock title="Лоранский пирог" price="395" />
        <PieBlock title="Норвежский пирог" price="395" />
      </div>
    </div>
  );
}

export default App;
