import React, { useEffect, useState } from 'react';
import Skeleton from './components/Skeleton';
import ContentLoader from 'react-content-loader';
import Header from './components/Header';
import Category from './components/Category';
import Sort from './components/Sort';
import PieBlock from './components/PieBlock';
import './App.scss';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://636f5291f2ed5cb047daa480.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);

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
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : items.map((obj, i) => <PieBlock {...obj} key={i} />)}
      </div>
    </div>
  );
}

export default App;
