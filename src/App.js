import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { Error } from './pages/Error';
import './App.scss';
import { Cart } from './pages/Cart';

function App() {
  return (
    <div className="wrapper">
      <Header />
      lalala
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart.html" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
